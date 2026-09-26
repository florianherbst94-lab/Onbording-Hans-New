const fs = require('fs');
let content = fs.readFileSync('src/app/admin/page.module.css', 'utf8');

content = content.replace(
  /\.employeeCardLink {\n  display: inline-flex;\n/g,
  `.employeeCardLink {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n`
);

fs.writeFileSync('src/app/admin/page.module.css', content);
