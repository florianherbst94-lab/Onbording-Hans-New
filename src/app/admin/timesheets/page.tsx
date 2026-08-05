import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import TimesheetAdminClient from "@/components/admin/timesheets/TimesheetAdminClient"

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

export default async function AdminTimesheetPage() {
  const session = await auth()
  if (!session?.user || (session.user as any).role !== "ADMIN") {
    redirect("/login")
  }

  const timesheets = await prisma.timesheet.findMany({
    include: {
      user: {
        select: { name: true, email: true }
      }
    },
    orderBy: { date: "desc" }
  })

  // get distinct users for filter dropdown
  const rawUsers = await prisma.user.findMany({
    where: { isArchived: false },
    include: {
      stepProgresses: {
        where: { stepId: 'personal-data' }
      }
    }
  })

  // Sort by last name alphabetically (Nachname)
  const users = [...rawUsers].sort((a, b) => {
    const lastA = getLastName(a)
    const lastB = getLastName(b)
    return lastA.localeCompare(lastB, 'de-DE')
  }).map(u => ({
    id: u.id,
    name: u.name,
    email: u.email
  }))

  // Serialize dates for Client Component
  const safeTimesheets = timesheets.map(t => ({
    ...t,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
    user: t.user ? {
      name: t.user.name,
      email: t.user.email
    } : null
  }))

  return <TimesheetAdminClient timesheets={safeTimesheets as any} users={users} />
}

