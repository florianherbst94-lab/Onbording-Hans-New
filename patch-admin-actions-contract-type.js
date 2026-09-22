const fs = require('fs');
const file = 'src/app/admin/adminActions.ts';
let content = fs.readFileSync(file, 'utf8');

// Fix inviteEmployee creation missing contractType
content = content.replace(
  'role: \'EMPLOYEE\',\n        jobRole,\n        startDate,\n        hourlyWage,\n        password: hashedPassword,',
  'role: \'EMPLOYEE\',\n        jobRole,\n        contractType,\n        startDate,\n        hourlyWage,\n        password: hashedPassword,'
);

// Fix update user
content = content.replace(
  'jobRole: jobRole || user.jobRole,\n        password: hashedPassword',
  'jobRole: jobRole || user.jobRole,\n        contractType: contractType || user.contractType,\n        password: hashedPassword'
);

fs.writeFileSync(file, content);
console.log("Patched adminActions.ts with contractType");
