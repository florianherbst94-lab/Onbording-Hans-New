const fs = require('fs');
const file = 'src/app/onboarding/contract/ContractForm.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add contractType to ContractText destructured params
content = content.replace(
  'function ContractText({ name, addressLine, today, startDate, personalData, hourlyWage, jobRole }:',
  'function ContractText({ name, addressLine, today, startDate, personalData, hourlyWage, jobRole, contractType }:'
);

// Pass contractType to ContractText component instances
content = content.replace(
  /<ContractText name=\{name\} addressLine=\{addressLine\} today=\{today\} startDate=\{startDateStr\} personalData=\{personalData\} hourlyWage=\{hourlyWage\} jobRole=\{jobRole\} \/>/g,
  '<ContractText name={name} addressLine={addressLine} today={today} startDate={startDateStr} personalData={personalData} hourlyWage={hourlyWage} jobRole={jobRole} contractType={contractType} />'
);

fs.writeFileSync(file, content);

const file2 = 'src/app/onboarding/contract/ContractFormClient.tsx';
let content2 = fs.readFileSync(file2, 'utf8');

if (content2) {
  content2 = content2.replace(
    'jobRole?: string | null',
    'jobRole?: string | null\n  contractType: string'
  );
  
  content2 = content2.replace(
    'export function ContractFormClient({ personalData, startDate, hourlyWage, jobRole }: Props) {',
    'export function ContractFormClient({ personalData, startDate, hourlyWage, jobRole, contractType }: Props) {'
  );
  
  content2 = content2.replace(
    'return <ContractForm personalData={personalData} startDate={startDate} hourlyWage={hourlyWage} jobRole={jobRole} />',
    'return <ContractForm personalData={personalData} startDate={startDate} hourlyWage={hourlyWage} jobRole={jobRole} contractType={contractType} />'
  );
  
  fs.writeFileSync(file2, content2);
}

console.log("Patched ContractForm typescript errors successfully");
