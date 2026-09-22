const fs = require('fs');
let content = fs.readFileSync('src/app/api/timesheets/route.ts', 'utf8');

content = content.replace(
  '        endTime: absenceType !== "NONE" ? "00:00" : endTime,\n        absenceType: absenceType || "NONE",\n        endTime,',
  '        endTime: absenceType !== "NONE" ? "00:00" : endTime,\n        absenceType: absenceType || "NONE",'
);

fs.writeFileSync('src/app/api/timesheets/route.ts', content);
