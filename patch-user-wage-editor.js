const fs = require('fs');

// 1. Update the Server Action to accept contractType and jobRole
let adminActions = fs.readFileSync('src/app/admin/adminActions.ts', 'utf8');

adminActions = adminActions.replace(
  'export async function updateEmployeeWage(userId: string, wage: number) {',
  'export async function updateEmployeeWage(userId: string, wage: number, contractType?: string, jobRole?: string) {'
);

adminActions = adminActions.replace(
  'data: { hourlyWage: wage }',
  'data: { \n        hourlyWage: wage,\n        ...(contractType ? { contractType } : {}),\n        ...(jobRole ? { jobRole } : {})\n      }'
);

fs.writeFileSync('src/app/admin/adminActions.ts', adminActions);

// 2. Update the UI Component (UserWageEditor)
let userWageEditor = fs.readFileSync('src/components/admin/UserWageEditor.tsx', 'utf8');

userWageEditor = userWageEditor.replace(
  'export function UserWageEditor({ userId, currentWage }: { userId: string, currentWage: number }) {',
  'export function UserWageEditor({ userId, currentWage, currentContractType, currentJobRole }: { userId: string, currentWage: number, currentContractType: string, currentJobRole: string }) {'
);

userWageEditor = userWageEditor.replace(
  'const [wage, setWage] = useState(currentWage.toString())',
  'const [wage, setWage] = useState(currentWage.toString())\n  const [contractType, setContractType] = useState(currentContractType)\n  const [jobRole, setJobRole] = useState(currentJobRole)'
);

userWageEditor = userWageEditor.replace(
  'const res = await updateEmployeeWage(userId, val)',
  'const res = await updateEmployeeWage(userId, val, contractType, jobRole)'
);

const oldJSX = `<div style={{ flex: 1 }}>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', fontWeight: 600, color: '#86868b' }}>INDIVIDUELLER STUNDENLOHN (€)</p>
        <Input 
          type="number" 
          step="0.01" 
          value={wage} 
          onChange={e => setWage(e.target.value)} 
          style={{ marginBottom: 0 }}
        />
      </div>
      <Button onClick={handleUpdate} disabled={isPending}>
        {isPending ? "Speichern..." : "Lohn aktualisieren"}
      </Button>`;

const newJSX = `<div style={{ flex: 1 }}>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', fontWeight: 600, color: '#86868b' }}>VERTRAGSART</p>
        <select 
          value={contractType} 
          onChange={e => setContractType(e.target.value)}
          style={{ 
            width: '100%',
            padding: '10px 14px',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
            color: 'var(--foreground)',
            fontSize: '15px'
          }}
        >
          <option value="MINIJOB">Minijob (geringfügig)</option>
          <option value="PART_TIME">Teilzeit</option>
          <option value="FULL_TIME">Vollzeit</option>
        </select>
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', fontWeight: 600, color: '#86868b' }}>TÄTIGKEIT</p>
        <select 
          value={jobRole} 
          onChange={e => setJobRole(e.target.value)}
          style={{ 
            width: '100%',
            padding: '10px 14px',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
            color: 'var(--foreground)',
            fontSize: '15px'
          }}
        >
          <option value="SERVICE">Servicekraft / Barkraft</option>
          <option value="ORDNER">Ordner</option>
          <option value="REINIGUNGSKRAFT">Reinigungskraft</option>
          <option value="HAUSMEISTER">Hausmeister</option>
        </select>
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', fontWeight: 600, color: '#86868b' }}>STUNDENLOHN (€)</p>
        <Input 
          type="number" 
          step="0.01" 
          value={wage} 
          onChange={e => setWage(e.target.value)} 
          style={{ marginBottom: 0 }}
        />
      </div>
      <Button onClick={handleUpdate} disabled={isPending}>
        {isPending ? "Speichern..." : "Speichern"}
      </Button>`;

userWageEditor = userWageEditor.replace(oldJSX, newJSX);
userWageEditor = userWageEditor.replace('<h2>Vergütung anpassen</h2>', '<h2>Vertragsdaten anpassen</h2>');
userWageEditor = userWageEditor.replace('Lohn aktualisieren', 'Speichern');
userWageEditor = userWageEditor.replace('Stundenlohn aktualisiert!', 'Vertragsdaten erfolgreich aktualisiert!');

fs.writeFileSync('src/components/admin/UserWageEditor.tsx', userWageEditor);

// 3. Update the page to pass the new props
let adminContractPage = fs.readFileSync('src/app/admin/contracts/[userId]/page.tsx', 'utf8');

adminContractPage = adminContractPage.replace(
  '<h2>Vergütung anpassen</h2>',
  '<h2>Vertragsdaten anpassen</h2>'
);

adminContractPage = adminContractPage.replace(
  '<UserWageEditor userId={userId} currentWage={user?.hourlyWage || 13.90} />',
  '<UserWageEditor userId={userId} currentWage={user?.hourlyWage || 13.90} currentContractType={user?.contractType || "MINIJOB"} currentJobRole={user?.jobRole || "SERVICE"} />'
);

fs.writeFileSync('src/app/admin/contracts/[userId]/page.tsx', adminContractPage);

console.log("Patched UserWageEditor to include contractType and jobRole");
