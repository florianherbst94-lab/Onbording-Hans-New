const fs = require('fs');
let content = fs.readFileSync('src/app/admin/contracts/[userId]/page.tsx', 'utf8');

content = content.replace(
  /<a href="\/admin\/payslips">\s*<Button variant="secondary" size="sm">\+ Lohnzettel verwalten \/ hochladen<\/Button>\s*<\/a>/g,
  `<Button variant="secondary" size="sm" onClick={() => window.location.href = "/admin/payslips"}>+ Lohnzettel verwalten / hochladen</Button>`
);

fs.writeFileSync('src/app/admin/contracts/[userId]/page.tsx', content);
