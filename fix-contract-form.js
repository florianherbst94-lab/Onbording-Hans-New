const fs = require('fs');
let content = fs.readFileSync('src/app/onboarding/contract/ContractForm.tsx', 'utf8');

content = content.replace(
  /<a href="\/onboarding\/instructions">\s*<Button>Weiter zum nächsten Schritt<\/Button>\s*<\/a>/g,
  `<Button onClick={() => window.location.href = "/onboarding/instructions"}>Weiter zum nächsten Schritt</Button>`
);

content = content.replace(
  /<a href="\/onboarding\/tax-data\/sign">\s*<Button variant="ghost" size="sm">Daten korrigieren \/ Zurück<\/Button>\s*<\/a>/g,
  `<Button variant="ghost" size="sm" onClick={() => window.location.href = "/onboarding/tax-data/sign"}>Daten korrigieren / Zurück</Button>`
);

content = content.replace(
  /<a href="\/onboarding\/tax-data\/sign">\s*<Button variant="ghost" size="sm" className=\{styles\.backBtn\}>Zurück zum Personalfragebogen<\/Button>\s*<\/a>/g,
  `<Button variant="ghost" size="sm" className={styles.backBtn} onClick={() => window.location.href = "/onboarding/tax-data/sign"}>Zurück zum Personalfragebogen</Button>`
);

fs.writeFileSync('src/app/onboarding/contract/ContractForm.tsx', content);
console.log("Fixed ContractForm nesting");
