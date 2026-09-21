const fs = require('fs');
const file = 'src/app/onboarding/contract/ContractForm.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update getJobTitle in ContractForm
content = content.replace(
  "case 'REINIGUNGSKRAFT': return 'Reinigungskraft'",
  "case 'REINIGUNGSKRAFT': return 'Reinigungskraft'\n      case 'HAUSMEISTER': return 'Hausmeister'"
);

fs.writeFileSync(file, content);
console.log("Patched ContractForm successfully");
