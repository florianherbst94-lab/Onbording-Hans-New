const fs = require('fs');
let content = fs.readFileSync('src/app/admin/page.tsx', 'utf8');

content = content.replace(
  /import \{ PasswordResetButton \} from "\@\/components\/admin\/PasswordResetButton"/,
  `import { PasswordResetButton } from "@/components/admin/PasswordResetButton"\nimport AdminTableRow from "./AdminTableRow"`
);

content = content.replace(
  /<tr key=\{emp\.id\} className=\{styles\.tableRow\}>/g,
  `<AdminTableRow key={emp.id} className={styles.tableRow} href={\`/admin/contracts/\${emp.id}\`}>`
);

content = content.replace(
  /<\/tr>\s*\)\s*\}\)\}/g,
  `</AdminTableRow>\n                  )\n                })}`
);

fs.writeFileSync('src/app/admin/page.tsx', content);
