const fs = require('fs');
let content = fs.readFileSync('src/components/admin/payslips/PayslipAdminDashboard.tsx', 'utf8');

content = content.replace(
  /<a href=\{payslip\.url\} target="_blank" rel="noopener noreferrer" style=\{\{ textDecoration: 'none' \}\}>\s*<Button variant="ghost" size="sm">\s*PDF ansehen\s*<\/Button>\s*<\/a>/g,
  `<Button variant="ghost" size="sm" onClick={() => window.open(payslip.url, "_blank")} style={{ textDecoration: 'none' }}>PDF ansehen</Button>`
);

fs.writeFileSync('src/components/admin/payslips/PayslipAdminDashboard.tsx', content);
