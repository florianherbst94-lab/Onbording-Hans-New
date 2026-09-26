const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/timesheets/TimesheetClient.tsx', 'utf8');

content = content.replace(
  '{monthlyHours.toFixed(2)}h',
  '{isMounted ? monthlyHours.toFixed(2) : "..."}h'
);

fs.writeFileSync('src/app/dashboard/timesheets/TimesheetClient.tsx', content);
console.log("Patched monthlyHours in TimesheetClient");
