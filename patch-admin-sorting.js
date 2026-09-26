const fs = require('fs');
let content = fs.readFileSync('src/app/admin/page.tsx', 'utf8');

// Change sorting to first name / full name
content = content.replace(
  /const employees = \[\.\.\.nonAdminEmployees\]\.sort\(\(a, b\) => \{[\s\S]*?return lastA\.localeCompare\(lastB, "de-DE"\)\n  \}\)/m,
  `const employees = [...nonAdminEmployees].sort((a, b) => {
    const nameA = a.name || a.email || "";
    const nameB = b.name || b.email || "";
    return nameA.localeCompare(nameB, "de-DE");
  })`
);

// Display as First Name Last Name
content = content.replace(
  /const displayName = lName \? \`\$\{lName\}, \$\{fName\}\` : emp\.name \|\| emp\.email/g,
  `const displayName = fName && lName ? \`\${fName} \${lName}\` : emp.name || emp.email`
);

fs.writeFileSync('src/app/admin/page.tsx', content);
