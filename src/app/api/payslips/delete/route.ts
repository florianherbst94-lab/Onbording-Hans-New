import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { unlink } from "fs/promises"
import path from "path"
import { del } from "@vercel/blob"

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user || (session.user as { role?: string }).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { id, userId, month, year } = await req.json()

    let slip = null
    if (id) {
      slip = await prisma.payslip.findUnique({ where: { id } })
    } else if (userId && month && year) {
      slip = await prisma.payslip.findUnique({
        where: { userId_month_year: { userId, month: parseInt(month), year: parseInt(year) } }
      })
    }

    if (!slip) {
      return NextResponse.json({ error: "Lohnzettel nicht gefunden" }, { status: 404 })
    }

    // Delete physical file
    if (slip.url.startsWith("/uploads/")) {
      const filepath = path.join(process.cwd(), "public", slip.url)
      try {
        await unlink(filepath)
      } catch (e) {
        console.error("Failed to delete local payslip file", e)
      }
    } else if (
      slip.url.includes("vercel-storage.com") ||
      slip.url.includes("blob.vercel-storage.com") ||
      slip.url.includes("public.blob.vercel-storage.com")
    ) {
      try {
        await del(slip.url, { token: process.env.BLOB_READ_WRITE_TOKEN })
      } catch (e) {
        console.error("Failed to delete blob payslip file", e)
      }
    }

    await prisma.payslip.delete({ where: { id: slip.id } })

    return NextResponse.json({ success: true, deletedId: slip.id })
  } catch (error) {
    console.error("Delete payslip error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unbekannter Fehler"
    return NextResponse.json(
      { error: `Fehler beim Löschen: ${errorMessage}` },
      { status: 500 }
    )
  }
}
