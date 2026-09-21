const fs = require('fs');
const file = 'src/app/admin/create-employee/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add ContractType to Create Employee
if (!content.includes('Vertragsart')) {
  content = content.replace(
    '</select>\n            </div>\n            <Input label="Arbeitsbeginn"',
    `</select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Vertragsart</label>
              <select name="contractType" className={styles.select} defaultValue="MINIJOB">
                <option value="MINIJOB">Minijob (geringfügig)</option>
                <option value="PART_TIME">Teilzeit</option>
                <option value="FULL_TIME">Vollzeit</option>
              </select>
            </div>
            <Input label="Arbeitsbeginn"`
  );
}

fs.writeFileSync(file, content);
console.log("Patched create-employee successfully");
