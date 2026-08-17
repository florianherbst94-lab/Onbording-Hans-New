import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { put } from "@vercel/blob"
import { writeFile, mkdir } from "fs/promises"
import path from "path"

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user || (session.user as { role?: string }).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const formData = await req.formData()
    const file = formData.get("file") as File
    const userId = formData.get("userId") as string
    const month = parseInt(formData.get("month") as string)
    const year = parseInt(formData.get("year") as string)

    if (!file || !userId || !month || !year) {
      return NextResponse.json({ error: "Fehlende Daten" }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    let fileUrl = ""

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const filename = `payslips/${userId}_${year}_${month}_${Date.now()}.pdf`
      const blob = await put(filename, buffer, { 
        access: "public",
        contentType: "application/pdf",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      })
      fileUrl = blob.url
    } else {
      // Local development fallback
      const filename = `${userId}_${year}_${month}_${Date.now()}.pdf`
      const baseUploadDir = path.join(process.cwd(), "public", "uploads", "payslips")
      await mkdir(baseUploadDir, { recursive: true })
      await writeFile(path.join(baseUploadDir, filename), buffer)
      fileUrl = `/uploads/payslips/${filename}`
    }

    const payslip = await prisma.payslip.upsert({
      where: {
        userId_month_year: { userId, month, year },
      },
      update: {
        url: fileUrl,
        uploadedAt: new Date(),
      },
      create: {
        userId,
        month,
        year,
        url: fileUrl,
      },
    })

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true },
    })

    return NextResponse.json({
      success: true,
      payslipId: payslip.id,
      url: payslip.url,
      userId: userId,
      month: month,
      year: year,
      employeeName: user?.name || user?.email || "Unbekannt",
    })
  } catch (error) {
    console.error("Save payslip error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unbekannter Fehler"
    return NextResponse.json(
      { error: `Fehler beim Speichern: ${errorMessage}` },
      { status: 500 }
    )
  }
}
