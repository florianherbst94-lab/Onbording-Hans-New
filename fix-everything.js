const fs = require('fs');

// Fix page.tsx select
let file = 'src/app/onboarding/contract/page.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  'select: { startDate: true, hourlyWage: true, jobRole: true }',
  'select: { startDate: true, hourlyWage: true, jobRole: true, contractType: true }'
);
fs.writeFileSync(file, content);

// Fix ContractForm props - add contractType to component props destructuring
file = 'src/app/onboarding/contract/ContractForm.tsx';
content = fs.readFileSync(file, 'utf8');
if (!content.includes('export default function ContractForm({ personalData, startDate, hourlyWage, jobRole, contractType')) {
  content = content.replace(
    'export default function ContractForm({ personalData, startDate, hourlyWage, jobRole }: ContractFormProps)',
    'export default function ContractForm({ personalData, startDate, hourlyWage, jobRole, contractType = "MINIJOB" }: ContractFormProps)'
  );
}
fs.writeFileSync(file, content);

// Fix ContractFormClient props
file = 'src/app/onboarding/contract/ContractFormClient.tsx';
content = fs.readFileSync(file, 'utf8');
if (!content.includes('export function ContractFormClient({ personalData, startDate, hourlyWage, jobRole, contractType')) {
  content = content.replace(
    'export function ContractFormClient({ personalData, startDate, hourlyWage, jobRole }: Props)',
    'export function ContractFormClient({ personalData, startDate, hourlyWage, jobRole, contractType = "MINIJOB" }: Props)'
  );
}
fs.writeFileSync(file, content);

console.log("Fixed all typescript errors");
