const fs = require('fs');
let content = fs.readFileSync('src/components/admin/BulkPayslipUpload.tsx', 'utf8');

content = content.replace(
  /<a href=\{item\.url\} target="_blank" rel="noopener noreferrer" className=\{styles\.viewLink\}>\s*<Button variant="ghost" size="sm">PDF ansehen<\/Button>\s*<\/a>/g,
  `<Button variant="ghost" size="sm" onClick={() => window.open(item.url, "_blank")} className={styles.viewLink}>PDF ansehen</Button>`
);

fs.writeFileSync('src/components/admin/BulkPayslipUpload.tsx', content);
