const fs = require('fs');
const glob = require('glob');
const path = require('path');

const tsxFiles = glob.sync('src/**/*.tsx');

tsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // General replacement for <a href="X"><Button>Y</Button></a>
  // We cannot blindly do this for everything because onClick={() => window.open(X)} is needed.
  // Actually, we can use router.push or window.location.href.
  // But let's fix the specific ones found in the previous search.

  // Success page
  if (file.includes('success/page.tsx')) {
    content = content.replace(
      /<a href="\/dashboard">\s*<Button>Zum Mitarbeiterportal<\/Button>\s*<\/a>/g,
      `<Button onClick={() => window.location.href = "/dashboard"}>Zum Mitarbeiterportal</Button>`
    );
    changed = true;
  }
  
  // admin contracts
  if (file.includes('contracts/[userId]/page.tsx')) {
    content = content.replace(
      /<a href="\/admin\/payslips\?user=.*">\s*<Button variant="secondary" size="sm">\+ Lohnzettel verwalten \/ hochladen<\/Button>\s*<\/a>/g,
      match => {
        const urlMatch = match.match(/href="([^"]+)"/);
        const url = urlMatch ? urlMatch[1] : '';
        return `<Button variant="secondary" size="sm" onClick={() => window.location.href = "${url}"}>+ Lohnzettel verwalten / hochladen</Button>`;
      }
    );
    content = content.replace(
      /<a href=\{slip\.url\} target="_blank" rel="noopener noreferrer">\s*<Button variant="outline" size="sm">Ansehen \/ Download<\/Button>\s*<\/a>/g,
      `<Button variant="outline" size="sm" onClick={() => window.open(slip.url, "_blank")}>Ansehen / Download</Button>`
    );
    content = content.replace(
      /<a href=\{cert\.url\} target="_blank" rel="noopener noreferrer">\s*<Button variant="outline" size="sm">Ansehen \/ Download<\/Button>\s*<\/a>/g,
      `<Button variant="outline" size="sm" onClick={() => window.open(cert.url, "_blank")}>Ansehen / Download</Button>`
    );
    changed = true;
  }

  // onboarding/contract/page.tsx
  if (file.includes('onboarding/contract/page.tsx')) {
    content = content.replace(
      /<a href="\/onboarding\/instructions">\s*<Button>Weiter zum nächsten Schritt<\/Button>\s*<\/a>/g,
      `<Button onClick={() => window.location.href = "/onboarding/instructions"}>Weiter zum nächsten Schritt</Button>`
    );
    changed = true;
  }

  if (file.includes('create-employee/page.tsx')) {
    content = content.replace(
      /<a href="\/admin">\s*<Button variant="secondary" type="button" style={{ width: "100%" }}>Abbrechen<\/Button>\s*<\/a>/g,
      `<Button variant="secondary" type="button" style={{ width: "100%" }} onClick={() => window.location.href = "/admin"}>Abbrechen</Button>`
    );
    changed = true;
  }
  
  if (file.includes('PayslipAdminDashboard.tsx')) {
    content = content.replace(
      /<a href=\{payslip\.url\} target="_blank" rel="noopener noreferrer" style=\{\{ textDecoration: 'none' \}\}>\s*<Button variant="ghost" size="sm">\s*PDF ansehen\s*<\/Button>\s*<\/a>/g,
      `<Button variant="ghost" size="sm" onClick={() => window.open(payslip.url, "_blank")}>PDF ansehen</Button>`
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
  }
});
console.log("Fixed all other known nesting issues");
