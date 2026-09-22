import { prisma } from "@/lib/prisma"

// Interface for calculation results
export interface MonthCalculation {
  year: number
  month: number
  openingBalanceMinutes: number
  targetMinutes: number
  actualMinutes: number
  monthlyDifferenceMinutes: number
  closingBalanceMinutes: number
}

/**
 * Calculates the target minutes for a given month based on the employee's work schedule.
 */
export async function calculateTargetMinutesForMonth(userId: string, year: number, month: number): Promise<number> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { workSchedules: true }
  })

  if (!user || user.timeTrackingType !== "TIME_ACCOUNT" || !user.workSchedules) {
    return 0
  }

  // Get active schedules grouped by weekday (1=Mon, 7=Sun)
  const schedulesByWeekday = new Map<number, number>()
  for (const schedule of user.workSchedules) {
    if (schedule.enabled) {
      schedulesByWeekday.set(schedule.weekday, schedule.targetMinutes)
    }
  }

  let totalTargetMinutes = 0
  
  // Create Date object for the first day of the month
  const startDate = new Date(year, month - 1, 1)
  const endDate = new Date(year, month, 0) // Last day of the month

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    // JS getDay() returns 0 for Sunday, 1 for Monday... 
    // We map it to 1=Monday...7=Sunday to match our db
    let weekday = d.getDay()
    if (weekday === 0) weekday = 7

    const target = schedulesByWeekday.get(weekday)
    if (target) {
      totalTargetMinutes += target
    }
  }

  return totalTargetMinutes
}

/**
 * Calculates the actual minutes worked, plus absence minutes.
 */
export async function calculateActualMinutesForMonth(userId: string, year: number, month: number): Promise<number> {
  const startDateStr = `${year}-${String(month).padStart(2, '0')}-01`
  const endDateStr = `${year}-${String(month).padStart(2, '0')}-${String(new Date(year, month, 0).getDate()).padStart(2, '0')}`

  // Fetch approved or submitted timesheets (depending on your logic, usually only APPROVED)
  // Let's assume we count APPROVED for the actual balance, but maybe we want to include SUBMITTED?
  // We'll stick to APPROVED for official balance.
  const timesheets = await prisma.timesheet.findMany({
    where: {
      userId,
      date: {
        gte: startDateStr,
        lte: endDateStr
      },
      status: "APPROVED"
    }
  })

  // We also need the user's work schedule to calculate absence hours
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { workSchedules: true }
  })

  const schedulesByWeekday = new Map<number, number>()
  if (user && user.workSchedules) {
    for (const schedule of user.workSchedules) {
      if (schedule.enabled) {
        schedulesByWeekday.set(schedule.weekday, schedule.targetMinutes)
      }
    }
  }

  let totalMinutes = 0

  for (const ts of timesheets) {
    if (ts.absenceType === "NONE") {
      // Normal work day
      totalMinutes += Math.round(ts.totalHours * 60)
    } else {
      // Absence day (Vacation, Sick, Holiday)
      // The actual minutes credited = the target minutes for that day
      const dateObj = new Date(ts.date)
      let weekday = dateObj.getDay()
      if (weekday === 0) weekday = 7

      const target = schedulesByWeekday.get(weekday) || 0
      totalMinutes += target
    }
  }

  return totalMinutes
}

/**
 * Recalculates the time account for a specific month and all subsequent months
 */
export async function recalculateTimeAccount(userId: string, startYear: number, startMonth: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  })

  if (!user || user.timeTrackingType !== "TIME_ACCOUNT") return

  let currentYear = startYear
  let currentMonth = startMonth

  const now = new Date()
  const endYear = now.getFullYear()
  const endMonth = now.getMonth() + 1 // 1-12

  // Get adjustments
  const adjustments = await prisma.timeAccountAdjustment.findMany({
    where: { userId }
  })

  let openingBalance = 0
  
  // Calculate opening balance from the previous month
  if (currentMonth === 1) {
    const prevMonthRecord = await prisma.timeAccountMonth.findUnique({
      where: { userId_year_month: { userId, year: currentYear - 1, month: 12 } }
    })
    if (prevMonthRecord) openingBalance = prevMonthRecord.closingBalanceMinutes
  } else {
    const prevMonthRecord = await prisma.timeAccountMonth.findUnique({
      where: { userId_year_month: { userId, year: currentYear, month: currentMonth - 1 } }
    })
    if (prevMonthRecord) openingBalance = prevMonthRecord.closingBalanceMinutes
  }

  // Iterate from startMonth to the current month (or beyond if future entries exist, but usually up to current month is enough)
  while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth)) {
    const targetMinutes = await calculateTargetMinutesForMonth(userId, currentYear, currentMonth)
    const actualMinutes = await calculateActualMinutesForMonth(userId, currentYear, currentMonth)

    // Check for any adjustments in this month
    const monthAdjustments = adjustments.filter(adj => {
      const adjDate = new Date(adj.date)
      return adjDate.getFullYear() === currentYear && (adjDate.getMonth() + 1) === currentMonth
    })
    const adjMinutes = monthAdjustments.reduce((acc, curr) => acc + curr.minutes, 0)

    const monthlyDifference = (actualMinutes + adjMinutes) - targetMinutes
    const closingBalance = openingBalance + monthlyDifference

    await prisma.timeAccountMonth.upsert({
      where: {
        userId_year_month: { userId, year: currentYear, month: currentMonth }
      },
      create: {
        userId,
        year: currentYear,
        month: currentMonth,
        openingBalanceMinutes: openingBalance,
        targetMinutes,
        actualMinutes: actualMinutes + adjMinutes, // Store actual + adjustments as "actual" or we might want to store adjustments separately. Let's just add it to actual for now, or keep it as difference.
        monthlyDifferenceMinutes: monthlyDifference,
        closingBalanceMinutes: closingBalance
      },
      update: {
        openingBalanceMinutes: openingBalance,
        targetMinutes,
        actualMinutes: actualMinutes + adjMinutes,
        monthlyDifferenceMinutes: monthlyDifference,
        closingBalanceMinutes: closingBalance
      }
    })

    // Prepare for next month
    openingBalance = closingBalance
    currentMonth++
    if (currentMonth > 12) {
      currentMonth = 1
      currentYear++
    }
  }
}
