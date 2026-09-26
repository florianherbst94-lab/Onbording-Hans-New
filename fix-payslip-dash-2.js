const fs = require('fs');
let content = fs.readFileSync('src/components/admin/payslips/PayslipAdminDashboard.tsx', 'utf8');

content = content.replace(
  /<a\s*href=\{payslip\.url\}\s*target="_blank"\s*rel="noopener noreferrer"\s*>\s*<Button variant="ghost" size="sm">\s*PDF ansehen\s*<\/Button>\s*<\/a>/g,
  `<Button variant="ghost" size="sm" onClick={() => window.open(payslip.url, "_blank")}>PDF ansehen</Button>`
);

fs.writeFileSync('src/components/admin/payslips/PayslipAdminDashboard.tsx', content);
