const fs = require('fs');
let content = fs.readFileSync('src/components/admin/BulkPayslipUpload.tsx', 'utf8');

content = content.replace(
  /<a href=\{result\.url\} target="_blank" rel="noopener noreferrer">\s*<Button variant="ghost" size="sm">PDF ansehen<\/Button>\s*<\/a>/g,
  `<Button variant="ghost" size="sm" onClick={() => window.open(result.url, "_blank")}>PDF ansehen</Button>`
);

fs.writeFileSync('src/components/admin/BulkPayslipUpload.tsx', content);
console.log("Fixed BulkPayslipUpload nesting");
