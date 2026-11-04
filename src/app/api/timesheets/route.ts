import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"

export async function GET(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const userId = searchParams.get("userId")
  const status = searchParams.get("status")

  const isAdmin = (session.user as any).role === "ADMIN"

  // Only admins can request timesheets for other users
  if (userId && userId !== session.user.id && !isAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const queryUserId = isAdmin ? (userId || undefined) : session.user.id

  try {
    const timesheets = await prisma.timesheet.findMany({
      where: {
        userId: queryUserId,
        ...(status ? { status } : {}),
      },
      include: {
        user: {
          select: { name: true, email: true },
        },
      },
      orderBy: { date: "desc" },
    })

    return NextResponse.json(timesheets)
  } catch (error) {
    console.error("GET Timesheets error:", error)
    return NextResponse.json({ error: "Fehler beim Laden der Zeiteinträge" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { date, startTime, endTime, breakMinutes, totalHours, note, status, absenceType, userId: overrideUserId } = body

    if (!date || (!absenceType || absenceType === "NONE" ? (!startTime || !endTime || totalHours === undefined) : false)) {
      return NextResponse.json({ error: "Fehlende Pflichtfelder" }, { status: 400 })
    }

    const isAdmin = (session.user as any).role === "ADMIN"
    const targetUserId = (isAdmin && overrideUserId) ? overrideUserId : session.user.id

    // Get user to save their hourly wage as a snapshot and check work schedules for absences
    const user = await prisma.user.findUnique({
      where: { id: targetUserId },
      select: { hourlyWage: true, timeTrackingType: true, workSchedules: true }
    })

    if (!user) {
      return NextResponse.json({ error: "Benutzer nicht gefunden" }, { status: 404 })
    }

    let finalTotalHours = Number(totalHours)
    if (absenceType === "VACATION" || absenceType === "SICK") {
      if (user.timeTrackingType === "TIME_ACCOUNT" && user.workSchedules) {
        // JS getDay(): 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        // DB weekday: 1 = Monday, ..., 7 = Sunday
        const d = new Date(date)
        const jsDay = d.getDay()
        const dbWeekday = jsDay === 0 ? 7 : jsDay
        
        const schedule = user.workSchedules.find(s => s.weekday === dbWeekday)
        if (schedule && schedule.enabled) {
          finalTotalHours = schedule.targetMinutes / 60
        } else {
          finalTotalHours = 0
        }
      } else {
        finalTotalHours = 0
      }
    }

    const timesheet = await prisma.timesheet.create({
      data: {
        userId: targetUserId,
        date,
        startTime: absenceType !== "NONE" ? "00:00" : startTime,
        endTime: absenceType !== "NONE" ? "00:00" : endTime,
        absenceType: absenceType || "NONE",
        breakMinutes: Number(breakMinutes) || 0,
        totalHours: finalTotalHours,
        note,
        status: status || "DRAFT",
        hourlyWage: user.hourlyWage || 13.90,
      },
    })

    return NextResponse.json(timesheet)
  } catch (error) {
    console.error("POST Timesheet error:", error)
    return NextResponse.json({ error: "Fehler beim Erstellen des Zeiteintrags" }, { status: 500 })
  }
}
