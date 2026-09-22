const fs = require('fs');
let content = fs.readFileSync('src/app/admin/contracts/[userId]/page.tsx', 'utf8');

content = content.replace(
  '    include: { workSchedules: true }\n    select: { startDate: true, hourlyWage: true, jobRole: true, contractType: true }',
  '    include: { workSchedules: true }'
);
// We can't use include and select at the same time in prisma.
// But we still need the selected fields (hourlyWage, etc.).
// Wait, Prisma returns all scalar fields by default with include.
// So removing select is fine. Let's make sure I just remove select.

content = content.replace(
  /include: \{ workSchedules: true \}\s+select: \{ startDate: true, hourlyWage: true, jobRole: true, contractType: true, name: true, timeTrackingType: true, timeAccountStartDate: true \}/g,
  'include: { workSchedules: true }'
);
content = content.replace(
  /include: \{ workSchedules: true \}\s+select: \{ startDate: true, hourlyWage: true, jobRole: true, contractType: true \}/g,
  'include: { workSchedules: true }'
);

fs.writeFileSync('src/app/admin/contracts/[userId]/page.tsx', content);
