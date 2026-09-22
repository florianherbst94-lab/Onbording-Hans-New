const fs = require('fs');
const file = 'src/app/admin/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Find the Reset button in tableActions and replace its form with a new client component or add PasswordResetButton
// Since page.tsx is a Server Component, we should create a new Client Component for the reset password button

if (!content.includes('PasswordResetButton')) {
  content = content.replace(
    'import { revalidatePath } from "next/cache"',
    'import { revalidatePath } from "next/cache"\nimport { PasswordResetButton } from "@/components/admin/PasswordResetButton"'
  );
  
  // Replace the old Reset button with the new one
  content = content.replace(
    /<form\s*action=\{resetProgress\.bind\(null, emp\.id\)\}\s*style=\{\{ display: "inline" \}\}\s*>\s*<Button\s*variant="ghost"\s*size="sm"\s*type="submit"\s*className=\{styles\.resetBtn\}\s*>\s*Reset\s*<\/Button>\s*<\/form>/s,
    '<PasswordResetButton userId={emp.id} employeeName={emp.name || ""} />\n                          <form action={resetProgress.bind(null, emp.id)} style={{ display: "inline" }}><Button variant="ghost" size="sm" type="submit" className={styles.resetBtn}>Prog. Reset</Button></form>'
  );

  fs.writeFileSync(file, content);
  console.log("Patched admin page.tsx");
} else {
  console.log("admin page.tsx already patched");
}
