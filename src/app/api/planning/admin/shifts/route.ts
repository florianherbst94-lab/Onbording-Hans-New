import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request) {
  try {
    const session = await auth()
    if (!session?.user || (session.user as any).role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const dayId = searchParams.get("dayId")
    const requestId = searchParams.get("requestId")

    if (requestId) {
      const plans = await prisma.staffPlanDay.findMany({
        where: {
          day: { requestId }
        },
        include: {
          rows: {
            include: { user: { select: { id: true, name: true } } },
            orderBy: { sortOrder: "asc" }
          }
        },
        orderBy: { date: 'asc' }
      })
      return NextResponse.json(plans)
    }

    if (!dayId) {
      return new NextResponse("Missing dayId or requestId", { status: 400 })
    }

    const plan = await prisma.staffPlanDay.findUnique({
      where: { dayId },
      include: {
        rows: {
          include: { user: { select: { id: true, name: true } } },
          orderBy: { sortOrder: "asc" }
        }
      }
    })

    return NextResponse.json(plan || null)
  } catch (error) {
    console.error("GET /api/planning/admin/shifts", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user || (session.user as any).role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()
    const { dayId, date, eventName, note, status, rows, assignments } = body
    
    // Normalize rows/assignments
    const normalizedRows = rows || assignments || []

    if (!dayId) return NextResponse.json({ error: "Fehler", details: "Fehler: dayId fehlt" }, { status: 400 })

    const plan = await prisma.$transaction(async (tx) => {
      const existingPlan = await tx.staffPlanDay.findUnique({
        where: { dayId }
      })

      let p: any
      if (existingPlan) {
        p = await tx.staffPlanDay.update({
          where: { id: existingPlan.id },
          data: { status, note, eventName },
        })

        await tx.staffPlanRow.deleteMany({
          where: { planId: p.id }
        })

        if (normalizedRows.length > 0) {
          await tx.staffPlanRow.createMany({
            data: normalizedRows.map((r: any, i: number) => ({
              planId: p.id,
              sortOrder: i,
              assignmentLabel: r.assignmentLabel || r.area || "Unbekannter Bereich",
              employeeId: r.employeeId || null,
              startTime: r.startTime || null,
              endTime: r.endTime || null,
              note: r.note || null,
            }))
          })
        }
      } else {
        p = await tx.staffPlanDay.create({
          data: {
            dayId,
            date: new Date(date),
            eventName,
            note,
            status,
            rows: {
              create: normalizedRows.map((r: any, i: number) => ({
                sortOrder: i,
                assignmentLabel: r.assignmentLabel || r.area || "Unbekannter Bereich",
                employeeId: r.employeeId || null,
                startTime: r.startTime || null,
                endTime: r.endTime || null,
                note: r.note || null,
              }))
            }
          }
        })
      }
      return p
    })

    return NextResponse.json({ success: true, planId: plan.id })
  } catch (error) {
    console.error("POST /api/planning/admin/shifts - Error saving shifts:", error)
    return NextResponse.json(
      { error: "Fehler beim Speichern der Schichten", details: (error as Error).message }, 
      { status: 500 }
    )
  }
}
