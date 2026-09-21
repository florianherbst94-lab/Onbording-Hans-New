const fs = require('fs');
const file = 'src/app/admin/contracts/[userId]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Change user fetch to include jobRole
content = content.replace(
  'select: { startDate: true, hourlyWage: true }',
  'select: { startDate: true, hourlyWage: true, jobRole: true }'
);

// Add getJobTitle helper
if (!content.includes('const getJobTitle =')) {
  const getJobTitleFunc = `
const getJobTitle = (role?: string | null) => {
  switch (role) {
    case 'ORDNER': return 'Ordner'
    case 'REINIGUNGSKRAFT': return 'Reinigungskraft'
    case 'HAUSMEISTER': return 'Hausmeister'
    default: return 'Servicekraft / Barkraft'
  }
}
`;
  content = content.replace(
  'export default async function ContractPage(props: { params: Promise<{ userId: string }> }) {',
  getJobTitleFunc + '\nexport default async function ContractPage(props: { params: Promise<{ userId: string }> }) {'
  );
}

// Replace hardcoded "Servicekraft / Barkraft" with dynamic job role
content = content.replace(
  '<p>Der Arbeitnehmer wird als Servicekraft / Barkraft im Betrieb<br/>',
  '<p>Der Arbeitnehmer wird als {getJobTitle(user?.jobRole)} im Betrieb<br/>'
);

fs.writeFileSync(file, content);
console.log("Patched admin contract page successfully");
