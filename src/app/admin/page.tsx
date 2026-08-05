import { prisma } from "@/lib/prisma"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { revalidatePath } from "next/cache"
import styles from "./page.module.css"

function getLastName(user: any) {
  const progress = user.stepProgresses?.find((p: any) => p.stepId === 'personal-data')
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

export default async function AdminDashboard() {
  const rawEmployees = await prisma.user.findMany({
    where: { role: 'EMPLOYEE', isArchived: false },
    include: { 
      onboardingStatus: true,
      documents: {
        where: { type: 'CONTRACT_SIGNED' }
      },
      stepProgresses: true
    }
  })

  // Sort by last name alphabetically (Nachname)
  const employees = [...rawEmployees].sort((a, b) => {
    const lastA = getLastName(a)
    const lastB = getLastName(b)
    return lastA.localeCompare(lastB, 'de-DE')
  })

  async function resetProgress(userId: string) {
    "use server"
    await prisma.stepProgress.deleteMany({ where: { userId } })
    await prisma.onboardingStatus.upsert({
      where: { userId },
      create: { userId, status: 'INVITED' },
      update: { status: 'INVITED' }
    })
    revalidatePath("/admin")
  }

  async function archiveEmployee(userId: string) {
    "use server"
    console.log(`[Archive Action] Starting for userId: ${userId}`)
    try {
      const result = await prisma.user.update({
        where: { id: userId },
        data: { isArchived: true }
      })
      console.log(`[Archive Action] SUCCESS for ${result.email}`)
    } catch (error) {
      console.error(`[Archive Action] FAILED for ${userId}:`, error)
    }
    revalidatePath("/admin")
    revalidatePath("/admin/archive")
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.headerArea}>
        <h1 className={styles.pageTitle}>Dashboard / Mitarbeiter</h1>
      </div>
      
      <Card className={styles.listCard}>
        <CardHeader>
          <CardTitle>Mitarbeiter Übersicht</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mitarbeiter-Akte</th>
                  <th>Bereich</th>
                  <th>E-Mail</th>
                  <th>Status</th>
                  <th>Steuerkanzlei</th>
                  <th>Erstellt am</th>
                  <th>Optionen</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => {
                  const advisorProgress = emp.stepProgresses?.find(p => p.stepId === 'advisor-sent')

                  return (
                    <tr key={emp.id}>
                      <td>{emp.name || '-'}</td>
                      <td>
                        <a href={`/admin/contracts/${emp.id}`} className={styles.actionBtn}>
                          <Button variant="outline" size="sm">Mitarbeiter-Akte</Button>
                        </a>
                      </td>
                      <td>{emp.jobRole || 'SERVICE'}</td>
                      <td>{emp.email}</td>
                      <td>
                        <span className={`${styles.badge} ${styles['status-' + (emp.onboardingStatus?.status || 'INVITED')]}`}>
                          {emp.onboardingStatus?.status || 'INVITED'}
                        </span>
                      </td>
                      <td>
                        {advisorProgress ? (
                          <span style={{ fontSize: '11px', backgroundColor: '#e6f4ea', color: '#137333', padding: '4px 8px', borderRadius: '12px', fontWeight: 'bold' }}>
                            {advisorProgress.updatedAt.toLocaleDateString('de-DE')} {advisorProgress.updatedAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr
                          </span>
                        ) : (
                          <span style={{ color: '#aaa', fontSize: '12px' }}>Ausstehend</span>
                        )}
                      </td>
                      <td>{emp.createdAt.toLocaleDateString('de-DE')}</td>
                      <td>
                        <div className={styles.tableActions}>
                          <form action={resetProgress.bind(null, emp.id)} style={{ display: 'inline' }}>
                            <Button variant="ghost" size="sm" type="submit" className={styles.resetBtn}>Reset</Button>
                          </form>
                          <form action={archiveEmployee.bind(null, emp.id)} style={{ display: 'inline' }}>
                            <Button variant="secondary" size="sm" type="submit">Archivieren</Button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  )
                })}
                {employees.length === 0 && (
                  <tr>
                    <td colSpan={8} className={styles.empty}>Keine Mitarbeiter gefunden.</td>
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

