const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/timesheets/TimesheetForm.tsx', 'utf8');

// Add absenceType state
if (!content.includes('absenceType')) {
  content = content.replace(
    'const [breakMinutes, setBreakMinutes] = useState(0)',
    'const [breakMinutes, setBreakMinutes] = useState(0)\n  const [absenceType, setAbsenceType] = useState("NONE")'
  );

  // If absenceType is not NONE, don't require start/end times
  content = content.replace(
    'if (!startTime || !endTime) {',
    'if (absenceType === "NONE" && (!startTime || !endTime)) {'
  );

  // Pass absenceType to API
  content = content.replace(
    '          totalHours,',
    '          totalHours,\n          absenceType,'
  );

  // Add the dropdown for absenceType in the form JSX
  // Find where date input is rendered and put it next to it or below it
  const dateInputMatch = /<label className=\{styles\.label\}>Datum<\/label>\s*<input[^>]+>/;
  const match = content.match(dateInputMatch);
  
  if (match) {
    const replacement = match[0] + `
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Eintragstyp</label>
            <select
              value={absenceType}
              onChange={(e) => setAbsenceType(e.target.value)}
              className={styles.input}
              style={{ width: "100%", padding: "8px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "white" }}
            >
              <option value="NONE" style={{color: 'black'}}>Reguläre Arbeitszeit</option>
              <option value="VACATION" style={{color: 'black'}}>Urlaub</option>
              <option value="SICK" style={{color: 'black'}}>Krankheit</option>
              <option value="HOLIDAY" style={{color: 'black'}}>Feiertag</option>
              <option value="OTHER" style={{color: 'black'}}>Sonstige Abwesenheit</option>
            </select>
`;
    content = content.replace(dateInputMatch, replacement);
  }

  // Hide time inputs if absenceType is not NONE
  content = content.replace(
    '<div className={styles.timeGrid}>',
    '{absenceType === "NONE" && (\n        <div className={styles.timeGrid}>'
  );
  
  content = content.replace(
    '<div className={styles.formGroup}>\n            <label className={styles.label}>Pausenzeit',
    '</div>\n        )}\n        <div className={styles.formGroup}>\n            <label className={styles.label}>Pausenzeit'
  );
  
  // Actually wait, let's just make the pause group hidden too if it's an absence
  content = content.replace(
    '<div className={styles.timeGrid}>',
    '{absenceType === "NONE" && (\n        <><div className={styles.timeGrid}>'
  );
  
  content = content.replace(
    '<label className={styles.label}>Pausenzeit (Minuten)</label>\n            <input\n              type="number"\n              value={breakMinutes}\n              onChange={(e) => setBreakMinutes(Number(e.target.value))}\n              min="0"\n              step="15"\n              className={styles.input}\n            />\n          </div>',
    '<label className={styles.label}>Pausenzeit (Minuten)</label>\n            <input\n              type="number"\n              value={breakMinutes}\n              onChange={(e) => setBreakMinutes(Number(e.target.value))}\n              min="0"\n              step="15"\n              className={styles.input}\n            />\n          </div></>\n        )}'
  );

  fs.writeFileSync('src/app/dashboard/timesheets/TimesheetForm.tsx', content);
  console.log("Updated TimesheetForm.tsx");
}
