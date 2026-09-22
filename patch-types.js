const fs = require('fs');
let content = fs.readFileSync('src/types/timesheet.ts', 'utf8');

if (!content.includes('absenceType')) {
  content = content.replace(
    '  status: TimesheetStatus',
    '  status: TimesheetStatus\n  absenceType?: string'
  );
  fs.writeFileSync('src/types/timesheet.ts', content);
  console.log("Updated TimesheetEntry type.");
}
