const fs = require('fs');
let content = fs.readFileSync('src/app/admin/create-employee/page.tsx', 'utf8');

content = content.replace(
  /<a href="\/admin" style=\{\{ textDecoration: "none", flex: 1 \}\}>\s*<Button variant="secondary" type="button" style=\{\{ width: "100%" \}\}>Abbrechen<\/Button>\s*<\/a>/g,
  `<Button variant="secondary" type="button" style={{ width: "100%", flex: 1 }} onClick={() => window.location.href = "/admin"}>Abbrechen</Button>`
);

fs.writeFileSync('src/app/admin/create-employee/page.tsx', content);
