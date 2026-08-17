"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { writeFile, mkdir, unlink } from "fs/promises"
import path from "path"
import { put, del } from "@vercel/blob"

export async function uploadPayslip(formData: FormData) {
  const session = await auth()
  if (!session?.user || (session.user as { role?: string }).role !== "ADMIN") {
    throw new Error("Unauthorized")
  }

  const userId = formData.get("userId") as string
  const month = parseInt(formData.get("month") as string)
  const year = parseInt(formData.get("year") as string)
  const file = formData.get("file") as File

  if (!userId || !month || !year || !file) {
    throw new Error("Fehlende Daten")
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  let fileUrl = ""

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const filename = `payslips/${userId}_${year}_${month}_${Date.now()}.pdf`
      const blob = await put(filename, buffer, {
        access: "public",
        contentType: "application/pdf",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      })
      fileUrl = blob.url
    } catch (e) {
      console.error("Vercel blob upload error in uploadPayslip:", e)
      throw new Error("Fehler beim Hochladen in den Cloud-Speicher")
    }
  } else {
    // Fallback for local development without token
    const filename = `${userId}_${year}_${month}_${Date.now()}.pdf`
    const baseUploadDir = path.join(process.cwd(), "public", "uploads", "payslips")
    const filepath = path.join(baseUploadDir, filename)

    try {
      await mkdir(baseUploadDir, { recursive: true })
      await writeFile(filepath, buffer)
      fileUrl = `/uploads/payslips/${filename}`
    } catch (e) {
      console.error("Local payslip save error", e)
      throw new Error("Fehler beim Speichern der Datei")
    }
  }

  await prisma.payslip.upsert({
    where: {
      userId_month_year: { userId, month, year }
    },
    update: {
      url: fileUrl,
      uploadedAt: new Date()
    },
    create: {
      userId,
      month,
      year,
      url: fileUrl
    }
  })

  revalidatePath("/admin/payslips")
  revalidatePath(`/admin/contracts/${userId}`)
  revalidatePath("/admin")
}

export async function deletePayslip(id: string) {
  const session = await auth()
  if (!session?.user || (session.user as { role?: string }).role !== "ADMIN") {
    throw new Error("Unauthorized")
  }

  const slip = await prisma.payslip.findUnique({ where: { id } })
  if (!slip) return

  // Delete physical file
  if (slip.url.startsWith("/uploads/")) {
    // Local file
    const filepath = path.join(process.cwd(), "public", slip.url)
    try {
      await unlink(filepath)
    } catch (e) {
      console.error("Failed to delete local payslip file", e)
    }
  } else if (slip.url.includes("vercel-storage.com") || slip.url.includes("blob.vercel-storage.com") || slip.url.includes("public.blob.vercel-storage.com")) {
    // Vercel Blob
    try {
      await del(slip.url, { token: process.env.BLOB_READ_WRITE_TOKEN })
    } catch (e) {
      console.error("Failed to delete blob payslip file", e)
    }
  }

  await prisma.payslip.delete({ where: { id } })
  revalidatePath("/admin/payslips")
  revalidatePath(`/admin/contracts/${slip.userId}`)
  revalidatePath("/admin")
}
