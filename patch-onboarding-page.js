const fs = require('fs');
const file = 'src/app/onboarding/contract/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Include contractType in select
content = content.replace(
  'select: { name: true, email: true, startDate: true, hourlyWage: true, jobRole: true }',
  'select: { name: true, email: true, startDate: true, hourlyWage: true, jobRole: true, contractType: true }'
);

content = content.replace(
  'jobRole={user.jobRole}',
  'jobRole={user.jobRole}\n            contractType={user.contractType}'
);

fs.writeFileSync(file, content);
console.log("Patched onboarding contract page successfully");
