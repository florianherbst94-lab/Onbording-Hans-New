import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { revalidatePath } from "next/cache"
import { LuExternalLink, LuUser, LuFolderOpen } from "react-icons/lu"
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

function getFirstName(user: any) {
  const progress = user.stepProgresses?.find((p: any) => p.stepId === "personal-data")
  if (progress?.data) {
    try {
      const pd = JSON.parse(progress.data)
      if (pd.firstName) return pd.firstName.trim()
    } catch (e) {}
  }
  if (user.name) {
    const parts = user.name.trim().split(/\s+/)
    return parts[0] || ""
  }
  return ""
}

export default async function AdminDashboard() {
  const rawEmployees = await prisma.user.findMany({
    where: { role: "EMPLOYEE", isArchived: false },
    include: {
      onboardingStatus: true,
      documents: {
        where: { type: "CONTRACT_SIGNED" },
      },
      stepProgresses: true,
    },
  })

  // Filter out any admin test/system accounts (e.g. "User Admin", "Administrator", "admin@...")
  const nonAdminEmployees = rawEmployees.filter((u) => {
    const nameLower = (u.name || "").toLowerCase()
    const emailLower = (u.email || "").toLowerCase()
    if (nameLower.includes("admin") || nameLower.includes("administrator")) return false
    if (emailLower.includes("admin") || emailLower.includes("administrator")) return false
    return true
  })

  // Sort strictly by last name alphabetically (Nachname, A-Z)
  const employees = [...nonAdminEmployees].sort((a, b) => {
    const lastA = getLastName(a) || a.name || a.email || ""
    const lastB = getLastName(b) || b.name || b.email || ""
    return lastA.localeCompare(lastB, "de-DE")
  })

  async function resetProgress(userId: string) {
    "use server"
    await prisma.stepProgress.deleteMany({ where: { userId } })
    await prisma.onboardingStatus.upsert({
      where: { userId },
      create: { userId, status: "INVITED" },
      update: { status: "INVITED" },
    })
    revalidatePath("/admin")
  }

  async function archiveEmployee(userId: string) {
    "use server"
    try {
      await prisma.user.update({
        where: { id: userId },
        data: { isArchived: true },
      })
    } catch (error) {
      console.error(`[Archive Action] FAILED for ${userId}:`, error)
    }
    revalidatePath("/admin")
    revalidatePath("/admin/archive")
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.headerArea}>
        <div>
          <h1 className={styles.pageTitle}>Mitarbeiter Übersicht</h1>
          <p className={styles.pageSubtitle}>
            Verwalte alle aktiven Mitarbeiter, öffne direkt die Mitarbeiterakte oder bearbeite den Onboarding-Status.
          </p>
        </div>
        <div className={styles.statsBadge}>
          {employees.length} aktive Mitarbeiter
        </div>
      </div>

      <Card className={styles.listCard}>
        <CardContent>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "35%" }}>Mitarbeiter / Akte</th>
                  <th style={{ width: "15%" }}>Bereich</th>
                  <th style={{ width: "15%" }}>Onboarding</th>
                  <th style={{ width: "18%" }}>Steuerkanzlei</th>
                  <th style={{ width: "17%", textAlign: "right" }}>Aktionen</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => {
                  const advisorProgress = emp.stepProgresses?.find(
                    (p) => p.stepId === "advisor-sent"
                  )
                  const lName = getLastName(emp)
                  const fName = getFirstName(emp)
                  const displayName = lName ? `${lName}, ${fName}` : emp.name || emp.email

                  return (
                    <tr key={emp.id} className={styles.tableRow}>
                      <td>
                        <Link
                          href={`/admin/contracts/${emp.id}`}
                          className={styles.employeeCardLink}
                          title="Zur Mitarbeiterakte"
                        >
                          <div className={styles.avatarCircle}>
                            <LuUser />
                          </div>
                          <div className={styles.empNameCol}>
                            <span className={styles.primaryName}>
                              {displayName}
                            </span>
                            <span className={styles.secondaryEmail}>{emp.email}</span>
                          </div>
                          <span className={styles.openAkteBadge}>
                            <LuFolderOpen /> Akte öffnen
                          </span>
                        </Link>
                      </td>
                      <td>
                        <span className={styles.roleTag}>
                          {emp.jobRole || "SERVICE"}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`${styles.badge} ${
                            styles["status-" + (emp.onboardingStatus?.status || "INVITED")]
                          }`}
                        >
                          {emp.onboardingStatus?.status || "INVITED"}
                        </span>
                      </td>
                      <td>
                        {advisorProgress ? (
                          <span className={styles.advisorDoneBadge}>
                            ✓ {advisorProgress.updatedAt.toLocaleDateString("de-DE")}
                          </span>
                        ) : (
                          <span className={styles.advisorPendingBadge}>Ausstehend</span>
                        )}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <div className={styles.tableActions}>
                          <form
                            action={resetProgress.bind(null, emp.id)}
                            style={{ display: "inline" }}
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              type="submit"
                              className={styles.resetBtn}
                            >
                              Reset
                            </Button>
                          </form>
                          <form
                            action={archiveEmployee.bind(null, emp.id)}
                            style={{ display: "inline" }}
                          >
                            <Button variant="secondary" size="sm" type="submit">
                              Archivieren
                            </Button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  )
                })}
                {employees.length === 0 && (
                  <tr>
                    <td colSpan={5} className={styles.empty}>
                      Keine aktiven Mitarbeiter gefunden.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
