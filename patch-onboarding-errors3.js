const fs = require('fs');

// Fix ContractForm props
let file = 'src/app/onboarding/contract/ContractForm.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  'export function ContractForm({ personalData, startDate, hourlyWage, jobRole }: ContractFormProps) {',
  'export function ContractForm({ personalData, startDate, hourlyWage, jobRole, contractType = "MINIJOB" }: ContractFormProps) {'
);
fs.writeFileSync(file, content);

// Fix ContractFormClient signature correctly
file = 'src/app/onboarding/contract/ContractFormClient.tsx';
content = fs.readFileSync(file, 'utf8');
content = content.replace(
  'export default function ContractFormClient({ personalData, startDate, hourlyWage, jobRole }: { personalData: { firstName: string, lastName: string, address: string, zipCode: string, city: string, iban?: string } | null, startDate?: Date | null, hourlyWage: number, jobRole?: string | null\n  contractType: string }) {',
  'export default function ContractFormClient({ personalData, startDate, hourlyWage, jobRole, contractType }: { personalData: { firstName: string, lastName: string, address: string, zipCode: string, city: string, iban?: string } | null, startDate?: Date | null, hourlyWage: number, jobRole?: string | null, contractType: string }) {'
);
fs.writeFileSync(file, content);

console.log("Patched typescript errors round 3");
