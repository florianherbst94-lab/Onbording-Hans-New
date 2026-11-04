import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import TimesheetClient from "./TimesheetClient"
import { calculateTimeAccountBalance } from "@/lib/time-account-utils"

export default async function TimesheetsPage() {
  const session = await auth()
  if (!session?.user?.id) redirect("/login")

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { timeTrackingType: true }
  })
  
  let timeAccountBalance = null
  if (user?.timeTrackingType === "TIME_ACCOUNT") {
    timeAccountBalance = await calculateTimeAccountBalance(session.user.id)
  }

  const timesheets = await prisma.timesheet.findMany({
    where: { userId: session.user.id },
    orderBy: { date: "desc" }
  })

  return <TimesheetClient initialTimesheets={safeSerializeDates(timesheets)} timeAccountBalance={timeAccountBalance} timeTrackingType={user?.timeTrackingType || "SIMPLE"} />
}

function safeSerializeDates(obj: any): any {
  if (!obj) return obj;
  return JSON.parse(JSON.stringify(obj));
}
