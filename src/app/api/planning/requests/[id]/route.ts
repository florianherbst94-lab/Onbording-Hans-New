import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth()
    if (!session?.user || (session.user as any).role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { id } = await params
    const body = await req.json()
    const { status, title, startDate, endDate, days } = body

    const updateData: any = {}
    if (status) updateData.status = status
    if (title) updateData.title = title
    if (startDate) updateData.startDate = new Date(startDate)
    if (endDate) updateData.endDate = new Date(endDate)

    await prisma.$transaction(async (tx) => {
      await tx.availabilityRequest.update({
        where: { id },
        data: updateData
      })

      if (days && Array.isArray(days)) {
        await tx.availabilityDay.deleteMany({
          where: { requestId: id }
        })

        if (days.length > 0) {
          await tx.availabilityDay.createMany({
            data: days.map((d: any) => ({
              requestId: id,
              date: new Date(d.date),
              eventName: d.eventName || null,
              note: d.note || null
            }))
          })
        }
      }
    })

    const updatedRequest = await prisma.availabilityRequest.findUnique({
      where: { id },
      include: { days: true }
    })

    return NextResponse.json(updatedRequest)
  } catch (error) {
    console.error("PUT /api/planning/requests/[id] - Error updating request:", error)
    return NextResponse.json(
      { error: "Fehler beim Aktualisieren der Abfrage", details: (error as Error).message }, 
      { status: 500 }
    )
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth()
    if (!session?.user || (session.user as any).role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { id } = await params

    await prisma.availabilityRequest.delete({
      where: { id }
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error("DELETE /api/planning/requests/[id] - Error deleting request:", error)
    return NextResponse.json(
      { error: "Fehler beim Löschen der Abfrage", details: (error as Error).message }, 
      { status: 500 }
    )
  }
}
