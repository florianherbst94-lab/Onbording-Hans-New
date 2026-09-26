const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/timesheets/TimesheetClient.tsx', 'utf8');

content = content.replace(
  '{isMounted ? new Date(ts.date).toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric" }) : ""}',
  '{isMounted && ts.date ? new Date(ts.date).toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric" }) : ""}'
);

fs.writeFileSync('src/app/dashboard/timesheets/TimesheetClient.tsx', content);
