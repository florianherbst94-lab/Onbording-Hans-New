const fs = require('fs');
const file = 'src/app/admin/adminActions.ts';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('const contractType =')) {
  content = content.replace(
    'const jobRole = formData.get("jobRole") as string || "SERVICE"',
    'const jobRole = formData.get("jobRole") as string || "SERVICE"\n  const contractType = formData.get("contractType") as string || "MINIJOB"'
  );
  
  content = content.replace(
    'hourlyWage,\n        jobRole,',
    'hourlyWage,\n        jobRole,\n        contractType,'
  );

  // Fallback if formatting was different
  content = content.replace(
    'hourlyWage,\n        jobRole\n',
    'hourlyWage,\n        jobRole,\n        contractType\n'
  );
}

fs.writeFileSync(file, content);
console.log("Patched adminActions.ts successfully");
