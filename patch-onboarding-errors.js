const fs = require('fs');

// Fix ContractForm props mapping
const file1 = 'src/app/onboarding/contract/ContractForm.tsx';
let content1 = fs.readFileSync(file1, 'utf8');
content1 = content1.replace(
  'export default function ContractForm({ personalData, startDate, hourlyWage, jobRole }: ContractFormProps) {',
  'export default function ContractForm({ personalData, startDate, hourlyWage, jobRole, contractType }: ContractFormProps) {'
);
fs.writeFileSync(file1, content1);

// Fix ContractFormClient signature
const file2 = 'src/app/onboarding/contract/ContractFormClient.tsx';
let content2 = fs.readFileSync(file2, 'utf8');
content2 = content2.replace(
  'export function ContractFormClient({ personalData, startDate, hourlyWage, jobRole }: Props) {',
  'export function ContractFormClient({ personalData, startDate, hourlyWage, jobRole, contractType }: Props) {'
);
fs.writeFileSync(file2, content2);

// Fix onboarding page client prop
const file3 = 'src/app/onboarding/contract/page.tsx';
let content3 = fs.readFileSync(file3, 'utf8');
content3 = content3.replace(
  '<ContractFormClient personalData={personalData} startDate={user?.startDate} hourlyWage={user?.hourlyWage || 13.90} />',
  '<ContractFormClient personalData={personalData} startDate={user?.startDate} hourlyWage={user?.hourlyWage || 13.90} jobRole={user?.jobRole} contractType={user?.contractType || "MINIJOB"} />'
);
// Fix double props from previous run if any
content3 = content3.replace(
  'jobRole={user?.jobRole} contractType={user?.contractType || "MINIJOB"}\n            contractType={user.contractType}',
  'jobRole={user?.jobRole} contractType={user?.contractType || "MINIJOB"}'
);
content3 = content3.replace(
  'jobRole={user.jobRole}\n            contractType={user.contractType}',
  '' // Already added in the main tag now
);
fs.writeFileSync(file3, content3);

console.log("Patched remaining typescript errors");
