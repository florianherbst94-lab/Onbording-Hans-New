import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import TimesheetClient from "./TimesheetClient"

export default async function TimesheetsPage() {
  const session = await auth()
  if (!session?.user?.id) redirect("/login")

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { timeTrackingType: true }
  })
  
  const now = new Date()
  let timeAccount = null
  if (user?.timeTrackingType === "TIME_ACCOUNT") {
    timeAccount = await prisma.timeAccountMonth.findUnique({
      where: { userId_year_month: { userId: session.user.id, year: now.getFullYear(), month: now.getMonth() + 1 } }
    })
  }

  const timesheets = await prisma.timesheet.findMany({
    where: { userId: session.user.id },
    orderBy: { date: "desc" }
  })

  return <TimesheetClient initialTimesheets={safeSerializeDates(timesheets)} timeAccount={timeAccount} timeTrackingType={user?.timeTrackingType || "SIMPLE"} />
}

function safeSerializeDates(obj: any): any {
  if (!obj) return obj;
  return JSON.parse(JSON.stringify(obj));
}
