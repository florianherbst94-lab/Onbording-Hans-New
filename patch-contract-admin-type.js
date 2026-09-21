const fs = require('fs');
const file = 'src/app/admin/contracts/[userId]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Include contractType in select
content = content.replace(
  'select: { startDate: true, hourlyWage: true, jobRole: true }',
  'select: { startDate: true, hourlyWage: true, jobRole: true, contractType: true }'
);

// Update heading and intro text
content = content.replace(
  '<h2>Arbeitsvertrag für eine geringfügige Beschäftigung (Minijob)</h2>',
  '<h2>{user?.contractType === "MINIJOB" ? "Arbeitsvertrag für eine geringfügige Beschäftigung (Minijob)" : user?.contractType === "PART_TIME" ? "Arbeitsvertrag (Teilzeit)" : "Arbeitsvertrag (Vollzeit)"}</h2>'
);

content = content.replace(
  '<h3>§4 Vergütung</h3>\n          <p>Der Arbeitnehmer erhält einen Stundenlohn in Höhe von {(user?.hourlyWage || 13.90).toFixed(2).replace(\'.\', \',\')} € brutto.<br/>\n          Die Beschäftigung erfolgt im Rahmen eines geringfügigen Beschäftigungsverhältnisses gemäß § 8 SGB IV.<br/>\n          Das regelmäßige monatliche Arbeitsentgelt darf die gesetzliche Geringfügigkeitsgrenze (derzeit 603 €) nicht überschreiten.<br/>',
  `<h3>§4 Vergütung</h3>
          <p>Der Arbeitnehmer erhält einen Stundenlohn in Höhe von {(user?.hourlyWage || 13.90).toFixed(2).replace('.', ',')} € brutto.<br/>
          {user?.contractType === "MINIJOB" ? (
            <>Die Beschäftigung erfolgt im Rahmen eines geringfügigen Beschäftigungsverhältnisses gemäß § 8 SGB IV.<br/>Das regelmäßige monatliche Arbeitsentgelt darf die gesetzliche Geringfügigkeitsgrenze (derzeit 603 €) nicht überschreiten.<br/></>
          ) : (
            <>Die Beschäftigung erfolgt im Rahmen eines sozialversicherungspflichtigen Arbeitsverhältnisses.<br/></>
          )}`
);

content = content.replace(
  'Der Arbeitgeber führt die pauschalen Abgaben zur Sozialversicherung an die Minijob-Zentrale ab.</p>',
  '{user?.contractType === "MINIJOB" && "Der Arbeitgeber führt die pauschalen Abgaben zur Sozialversicherung an die Minijob-Zentrale ab."}</p>'
);

content = content.replace(
  'Die monatliche Arbeitszeit beträgt maximal 43 Stunden.<br/>',
  '{user?.contractType === "MINIJOB" ? "Die monatliche Arbeitszeit beträgt maximal 43 Stunden." : "Die monatliche Arbeitszeit richtet sich nach der betrieblichen Einsatzplanung und den gesetzlichen Höchstgrenzen."}<br/>'
);

content = content.replace(
  '<h3>§10 Rentenversicherung (Minijob)</h3>',
  '{user?.contractType === "MINIJOB" ? <h3>§10 Rentenversicherung (Minijob)</h3> : <h3>§10 Rentenversicherung</h3>}'
);

content = content.replace(
  '<p>Der Arbeitnehmer unterliegt der Versicherungspflicht in der gesetzlichen Rentenversicherung.\n          Er kann sich auf schriftlichen Antrag von der Versicherungspflicht befreien lassen.</p>',
  '<p>{user?.contractType === "MINIJOB" ? "Der Arbeitnehmer unterliegt der Versicherungspflicht in der gesetzlichen Rentenversicherung. Er kann sich auf schriftlichen Antrag von der Versicherungspflicht befreien lassen." : "Der Arbeitnehmer unterliegt der allgemeinen Versicherungspflicht in der gesetzlichen Rentenversicherung."}</p>'
);

fs.writeFileSync(file, content);
console.log("Patched admin contract text successfully");
