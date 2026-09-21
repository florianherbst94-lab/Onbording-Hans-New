const fs = require('fs');

// Fix ContractForm props mapping
const file1 = 'src/app/onboarding/contract/ContractForm.tsx';
let content1 = fs.readFileSync(file1, 'utf8');
content1 = content1.replace(
  'export default function ContractForm({ personalData, startDate, hourlyWage, jobRole, contractType }: ContractFormProps) {',
  'export default function ContractForm({ personalData, startDate, hourlyWage, jobRole, contractType = "MINIJOB" }: ContractFormProps) {'
);
content1 = content1.replace(
  /<ContractText.*?contractType=\{contractType\} \/>/g,
  '<ContractText name={name} addressLine={addressLine} today={today} startDate={startDateStr} personalData={personalData} hourlyWage={hourlyWage} jobRole={jobRole} contractType={contractType} />'
);
fs.writeFileSync(file1, content1);

// Fix ContractFormClient signature
const file2 = 'src/app/onboarding/contract/ContractFormClient.tsx';
let content2 = fs.readFileSync(file2, 'utf8');
content2 = content2.replace(
  'export function ContractFormClient({ personalData, startDate, hourlyWage, jobRole, contractType }: Props) {',
  'export function ContractFormClient({ personalData, startDate, hourlyWage, jobRole, contractType = "MINIJOB" }: Props) {'
);
fs.writeFileSync(file2, content2);

console.log("Patched typescript errors round 2");
