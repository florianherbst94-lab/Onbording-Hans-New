const fs = require('fs');
const file = 'src/app/dashboard/DashboardClient.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'payslips.sort((a, b) => b.year - a.year || b.month - a.month).map',
  '[...payslips].sort((a, b) => b.year - a.year || b.month - a.month).map'
);

fs.writeFileSync(file, content);
console.log("Patched sort in DashboardClient.tsx");
