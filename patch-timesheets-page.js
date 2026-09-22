const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/timesheets/page.tsx', 'utf8');

content = content.replace(
  'const timesheets = await prisma.timesheet.findMany({',
  `const user = await prisma.user.findUnique({
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

  const timesheets = await prisma.timesheet.findMany({`
);

content = content.replace(
  '<TimesheetClient initialTimesheets={safeSerializeDates(timesheets)} />',
  '<TimesheetClient initialTimesheets={safeSerializeDates(timesheets)} timeAccount={timeAccount} timeTrackingType={user?.timeTrackingType || "SIMPLE"} />'
);

fs.writeFileSync('src/app/dashboard/timesheets/page.tsx', content);
console.log("Patched timesheets page");
