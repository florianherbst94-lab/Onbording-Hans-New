import { prisma } from "@/lib/prisma"

export async function calculateTimeAccountBalance(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      workSchedules: true,
    }
  })

  if (!user || user.timeTrackingType !== "TIME_ACCOUNT" || !user.timeAccountStartDate) {
    return { balanceMinutes: 0, targetMinutes: 0, actualMinutes: 0 }
  }

  const startDate = new Date(user.timeAccountStartDate)
  // Set to start of day
  startDate.setHours(0, 0, 0, 0)
  
  const today = new Date()
  today.setHours(23, 59, 59, 999)

  if (startDate > today) {
    return { balanceMinutes: 0, targetMinutes: 0, actualMinutes: 0 }
  }

  // Fetch all approved timesheets since start date
  const timesheets = await prisma.timesheet.findMany({
    where: {
      userId,
      status: "APPROVED",
      date: {
        gte: startDate.toISOString().split('T')[0],
        lte: today.toISOString().split('T')[0]
      }
    }
  })

  let targetMinutes = 0
  let actualMinutes = 0

  // Calculate actual minutes from timesheets
  for (const ts of timesheets) {
    actualMinutes += Math.round(ts.totalHours * 60)
  }

  // Calculate target minutes by iterating through days
  const scheduleMap = new Map<number, number>()
  for (const schedule of user.workSchedules) {
    if (schedule.enabled) {
      // JS getDay(): 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      // DB weekday: 1 = Monday, ..., 7 = Sunday
      const jsDay = schedule.weekday === 7 ? 0 : schedule.weekday
      scheduleMap.set(jsDay, schedule.targetMinutes)
    }
  }

  let currentDate = new Date(startDate)
  while (currentDate <= today) {
    const jsDay = currentDate.getDay()
    const dailyTarget = scheduleMap.get(jsDay) || 0
    targetMinutes += dailyTarget

    currentDate.setDate(currentDate.getDate() + 1)
  }

  const balanceMinutes = actualMinutes - targetMinutes + (user.timeAccountInitialBalance || 0)

  return {
    balanceMinutes,
    targetMinutes,
    actualMinutes,
    initialBalanceMinutes: user.timeAccountInitialBalance || 0
  }
}
