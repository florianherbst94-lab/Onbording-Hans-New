const fs = require('fs');
let content = fs.readFileSync('src/app/api/timesheets/route.ts', 'utf8');

content = content.replace(
  'const { date, startTime, endTime, breakMinutes, totalHours, note, status } = body',
  'const { date, startTime, endTime, breakMinutes, totalHours, note, status, absenceType } = body'
);

content = content.replace(
  'if (!date || !startTime || !endTime || totalHours === undefined) {',
  'if (!date || (!absenceType || absenceType === "NONE" ? (!startTime || !endTime || totalHours === undefined) : false)) {'
);

content = content.replace(
  '        startTime,',
  '        startTime: absenceType !== "NONE" ? "00:00" : startTime,\n        endTime: absenceType !== "NONE" ? "00:00" : endTime,\n        absenceType: absenceType || "NONE",'
);

fs.writeFileSync('src/app/api/timesheets/route.ts', content);
console.log("Patched timesheets API.");
