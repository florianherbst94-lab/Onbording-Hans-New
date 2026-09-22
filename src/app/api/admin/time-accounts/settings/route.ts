import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { userId, timeTrackingType, weeklyHours, timeAccountStartDate, schedules } = await req.json()

    await prisma.user.update({
      where: { id: userId },
      data: {
        timeTrackingType,
        weeklyHours: weeklyHours ? parseFloat(weeklyHours) : null,
        timeAccountStartDate: timeAccountStartDate ? new Date(timeAccountStartDate) : null
      }
    })

    if (timeTrackingType === "TIME_ACCOUNT" && schedules) {
      // Upsert work schedules
      for (const schedule of schedules) {
        await prisma.employeeWorkSchedule.upsert({
          where: {
            userId_weekday: { userId, weekday: schedule.weekday }
          },
          create: {
            userId,
            weekday: schedule.weekday,
            targetMinutes: schedule.targetMinutes,
            enabled: schedule.enabled
          },
          update: {
            targetMinutes: schedule.targetMinutes,
            enabled: schedule.enabled
          }
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Settings error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
