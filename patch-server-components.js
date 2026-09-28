const fs = require('fs');

// 1. src/app/admin/create-employee/page.tsx
let createEmployee = fs.readFileSync('src/app/admin/create-employee/page.tsx', 'utf8');
createEmployee = createEmployee.replace(
  /import \{ Button \} from "@\/components\/ui\/Button"/,
  `import { Button } from "@/components/ui/Button"\nimport { LinkButton } from "@/components/ui/LinkButton"`
);
createEmployee = createEmployee.replace(
  /<Button variant="secondary" type="button" style=\{\{ width: "100%", flex: 1 \}\} onClick=\{\(\) => window\.location\.href = "\/admin"\}>Abbrechen<\/Button>/,
  `<LinkButton href="/admin" variant="secondary" style={{ width: "100%", flex: 1 }}>Abbrechen</LinkButton>`
);
fs.writeFileSync('src/app/admin/create-employee/page.tsx', createEmployee);

// 2. src/app/admin/contracts/[userId]/page.tsx
let contracts = fs.readFileSync('src/app/admin/contracts/[userId]/page.tsx', 'utf8');
contracts = contracts.replace(
  /import \{ Button \} from "@\/components\/ui\/Button"/,
  `import { Button } from "@/components/ui/Button"\nimport { LinkButton } from "@/components/ui/LinkButton"`
);
contracts = contracts.replace(
  /<Button variant="secondary" size="sm" onClick=\{\(\) => window\.location\.href = "\/admin\/payslips"\}>\+ Lohnzettel verwalten \/ hochladen<\/Button>/,
  `<LinkButton href="/admin/payslips" variant="secondary" size="sm">+ Lohnzettel verwalten / hochladen</LinkButton>`
);
contracts = contracts.replace(
  /<Button variant="outline" size="sm" onClick=\{\(\) => window\.open\(slip\.url, "_blank"\)\}>Ansehen \/ Download<\/Button>/g,
  `<LinkButton href={slip.url} target="_blank" variant="outline" size="sm">Ansehen / Download</LinkButton>`
);
contracts = contracts.replace(
  /<Button variant="outline" size="sm" onClick=\{\(\) => window\.open\(cert\.url, "_blank"\)\}>Ansehen \/ Download<\/Button>/g,
  `<LinkButton href={cert.url} target="_blank" variant="outline" size="sm">Ansehen / Download</LinkButton>`
);
fs.writeFileSync('src/app/admin/contracts/[userId]/page.tsx', contracts);

// 3. src/app/onboarding/contract/page.tsx
let onboardingContract = fs.readFileSync('src/app/onboarding/contract/page.tsx', 'utf8');
onboardingContract = onboardingContract.replace(
  /import \{ Button \} from "@\/components\/ui\/Button"/,
  `import { Button } from "@/components/ui/Button"\nimport { LinkButton } from "@/components/ui/LinkButton"`
);
onboardingContract = onboardingContract.replace(
  /<Button onClick=\{\(\) => window\.location\.href = "\/onboarding\/instructions"\}>Weiter zum nächsten Schritt<\/Button>/,
  `<LinkButton href="/onboarding/instructions">Weiter zum nächsten Schritt</LinkButton>`
);
fs.writeFileSync('src/app/onboarding/contract/page.tsx', onboardingContract);

// 4. src/app/onboarding/success/page.tsx
let onboardingSuccess = fs.readFileSync('src/app/onboarding/success/page.tsx', 'utf8');
onboardingSuccess = onboardingSuccess.replace(
  /import \{ Button \} from "@\/components\/ui\/Button"/,
  `import { Button } from "@/components/ui/Button"\nimport { LinkButton } from "@/components/ui/LinkButton"`
);
onboardingSuccess = onboardingSuccess.replace(
  /<Button onClick=\{\(\) => window\.location\.href = "\/dashboard"\}>Zum Mitarbeiterportal<\/Button>/,
  `<LinkButton href="/dashboard">Zum Mitarbeiterportal</LinkButton>`
);
fs.writeFileSync('src/app/onboarding/success/page.tsx', onboardingSuccess);
