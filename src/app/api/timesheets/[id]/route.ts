import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"
import { recalculateTimeAccount } from "@/lib/timeAccountService"

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { date, startTime, endTime, breakMinutes, totalHours, status, note, absenceType } = body
    const { id } = await params
    
    const existing = await prisma.timesheet.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 })

    const isAdmin = (session.user as any).role === "ADMIN"

    // Only creator or admin can edit
    if (!isAdmin) {
      if (existing.userId !== session.user.id) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 })
      }
      
      // Employees can only save drafts or submit
      if (status && !["DRAFT", "SUBMITTED"].includes(status)) {
        return NextResponse.json({ error: "Mitarbeiter können Zeiteinträge nur als Entwurf speichern oder einreichen." }, { status: 400 })
      }

      // Block edits if already approved/rejected
      if (["APPROVED", "REJECTED"].includes(existing.status)) {
        return NextResponse.json({ error: "Genehmigte oder abgelehnte Einträge können nicht bearbeitet werden." }, { status: 400 })
      }
    }

    const dataToUpdate: any = {
      ...(date && { date }),
      ...(startTime && { startTime }),
      ...(endTime && { endTime }),
      ...(breakMinutes !== undefined && { breakMinutes: Number(breakMinutes) }),
      ...(totalHours !== undefined && { totalHours: Number(totalHours) }),
      ...(note !== undefined && { note }),
      ...(status && { status }),
      ...(absenceType && { absenceType }),
    }

    if (status && status !== existing.status) {
      // Admin rejecting or approving
      if (isAdmin && ["APPROVED", "REJECTED"].includes(status)) {
        dataToUpdate.approvedBy = session.user.name || session.user.email
      }
    }

    const updated = await prisma.timesheet.update({
      where: { id },
      data: dataToUpdate,
    })


    // Recalculate time account if status changed to or from APPROVED, or if it is APPROVED and details changed
    if (existing.status === "APPROVED" || status === "APPROVED") {
      const year = parseInt(updated.date.split('-')[0])
      const month = parseInt(updated.date.split('-')[1])
      try {
        await recalculateTimeAccount(existing.userId, year, month)
      } catch (e) {
        console.error("Time account recalculation error:", e)
      }
    }

    return NextResponse.json(updated)
  } catch (error) {
    console.error("PUT Timesheet error:", error)
    return NextResponse.json({ error: "Fehler beim Aktualisieren des Zeiteintrags" }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { id } = await params
    const existing = await prisma.timesheet.findUnique({ where: { id } })
    
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 })

    const isAdmin = (session.user as any).role === "ADMIN"

    // Only creator or admin can delete
    if (!isAdmin && existing.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Employees cannot delete finalized entries
    if (!isAdmin && ["APPROVED", "REJECTED"].includes(existing.status)) {
      return NextResponse.json({ error: "Genehmigte oder abgelehnte Einträge können nicht gelöscht werden." }, { status: 400 })
    }

    await prisma.timesheet.delete({ where: { id } })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("DELETE Timesheet error:", error)
    return NextResponse.json({ error: "Fehler beim Löschen des Zeiteintrags" }, { status: 500 })
  }
}
