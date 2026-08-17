import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import PayslipAdminDashboard from "@/components/admin/payslips/PayslipAdminDashboard"
import styles from "./page.module.css"

function getLastName(user: any) {
  const progress = user.stepProgresses?.find((p: any) => p.stepId === "personal-data")
  if (progress?.data) {
    try {
      const pd = JSON.parse(progress.data)
      if (pd.lastName) return pd.lastName.trim()
    } catch (e) {}
  }
  if (user.name) {
    const parts = user.name.trim().split(/\s+/)
    if (parts.length > 1) {
      return parts.slice(1).join(" ")
    }
    return parts[0] || ""
  }
  return ""
}

export default async function AdminPayslips() {
  const session = await auth()
  if (!session?.user || (session.user as { role?: string }).role !== "ADMIN") {
    redirect("/login")
  }

  const rawEmployees = await prisma.user.findMany({
    where: { 
      isArchived: false,
      role: { not: "ADMIN" }
    },
    include: {
      stepProgresses: {
        where: { stepId: "personal-data" },
      },
    },
  })

  // Filter out any admin test/system accounts (e.g. "User Admin", "Administrator", "admin@...")
  const nonAdminEmployees = rawEmployees.filter((e) => {
    const nameLower = (e.name || "").toLowerCase()
    const emailLower = (e.email || "").toLowerCase()
    if (nameLower.includes("admin") || nameLower.includes("administrator")) return false
    if (emailLower.includes("admin") || emailLower.includes("administrator")) return false
    return true
  })

  // Parse personal data to get zipCode and separate name parts
  const employees = nonAdminEmployees.map((e) => {
    let firstName = ""
    let lastName = ""
    let zipCode = ""

    const progress = e.stepProgresses?.find((p) => p.stepId === "personal-data")
    if (progress?.data) {
      try {
        const pd = JSON.parse(progress.data)
        firstName = pd.firstName || ""
        lastName = pd.lastName || ""
        zipCode = pd.zipCode || ""
      } catch (e) {}
    }

    // Fallback to split name if step data is missing
    if (!firstName && !lastName && e.name) {
      const parts = e.name.trim().split(/\s+/)
      firstName = parts[0]
      lastName = parts.slice(1).join(" ")
    }

    return {
      id: e.id,
      name: e.name,
      email: e.email,
      firstName,
      lastName,
      zipCode,
    }
  })

  // Sort employees strictly alphabetically by last name (Nachname, A-Z)
  employees.sort((a, b) => {
    const lastA = a.lastName || a.name || a.email || ""
    const lastB = b.lastName || b.name || b.email || ""
    return lastA.localeCompare(lastB, "de-DE")
  })

  const rawPayslips = await prisma.payslip.findMany({
    include: {
      user: {
        select: { name: true, email: true },
      },
    },
    orderBy: [{ year: "desc" }, { month: "desc" }],
  })

  const safePayslips = rawPayslips.map((p) => ({
    id: p.id,
    userId: p.userId,
    month: p.month,
    year: p.year,
    url: p.url,
    uploadedAt: p.uploadedAt.toISOString(),
    userName: p.user?.name || undefined,
    userEmail: p.user?.email || undefined,
  }))

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>Lohnzettel & Abrechnungen</h1>
          <p className={styles.pageSubtitle}>
            Verwalte Abrechnungen, prüfe den monatlichen Zuteilungsstatus aller Mitarbeiter und lade DATEV-Sammeldateien hoch.
          </p>
        </div>
      </div>

      <PayslipAdminDashboard
        employees={employees}
        initialPayslips={safePayslips}
      />
    </div>
  )
}
