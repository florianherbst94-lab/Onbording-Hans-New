const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/DashboardClient.tsx', 'utf8');

content = content.replace(
  /<a href="https:\/\/kw.my\/jEM8PK\/#\/" target="_blank" rel="noopener noreferrer">\s*<Button variant="outline" size="sm">Zur Schulung<\/Button>\s*<\/a>/g,
  `<Button variant="outline" size="sm" onClick={() => window.open('https://kw.my/jEM8PK/#/', '_blank')}>Zur Schulung</Button>`
);

content = content.replace(
  /<a href=\{doc\.type === "CONTRACT_SIGNED" \? "\/dashboard\/contract" : doc\.url\} target=\{doc\.type === "CONTRACT_SIGNED" \? undefined : "_blank"\} rel="noopener noreferrer">\s*<Button fullWidth variant="outline">Anschauen \/ Download<\/Button>\s*<\/a>/g,
  `<Button fullWidth variant="outline" onClick={() => window.open(doc.type === "CONTRACT_SIGNED" ? "/dashboard/contract" : doc.url, doc.type === "CONTRACT_SIGNED" ? "_self" : "_blank")}>Anschauen / Download</Button>`
);

content = content.replace(
  /<a href=\{slip\.url\} target="_blank" rel="noopener noreferrer">\s*<Button fullWidth variant="outline">Herunterladen<\/Button>\s*<\/a>/g,
  `<Button fullWidth variant="outline" onClick={() => window.open(slip.url, '_blank')}>Herunterladen</Button>`
);

fs.writeFileSync('src/app/dashboard/DashboardClient.tsx', content);
console.log("Fixed HTML nesting issues.");
