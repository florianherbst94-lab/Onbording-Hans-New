const fs = require('fs');
const file = 'src/app/admin/planning/DayPlanBuilder.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add customName to RowData interface
content = content.replace(
  'employeeName: string | null\n  startTime: string',
  'employeeName: string | null\n  customName?: string | null\n  startTime: string'
);

// Update makeRow
content = content.replace(
  'employeeId: null, employeeName: null, startTime, endTime: "", note: "" }',
  'employeeId: null, employeeName: null, customName: null, startTime, endTime: "", note: "" }'
);

// In the GET parsing logic
content = content.replace(
  'employeeName: r.user?.name || null,',
  'employeeName: r.user?.name || r.customName || null,\n          customName: r.customName || null,'
);

// In the handleSave (POST)
content = content.replace(
  'employeeId: r.employeeId || null,\n            startTime: r.startTime || null,',
  'employeeId: r.employeeId || null,\n            customName: r.employeeId ? null : (r.employeeName || null),\n            startTime: r.startTime || null,'
);

// In EmployeePicker Props
content = content.replace(
  'onSelect: (empId: string, empName: string) => void',
  'onSelect: (empId: string | null, empName: string) => void'
);

// EmployeePicker UI: Add button for custom name if search is not empty
const searchInputStr = `<input
        type="text"
        placeholder="Mitarbeiter suchen…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={styles.pickerSearch}
        autoFocus
      />`;

const searchInputNewStr = `<input
        type="text"
        placeholder="Mitarbeiter suchen oder Namen eingeben…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={styles.pickerSearch}
        autoFocus
      />
      {search.trim().length > 0 && (
        <div className={styles.pickerGroup} style={{ marginTop: '8px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
          <button 
            type="button" 
            className={styles.pickerItem} 
            onClick={() => onSelect(null, search.trim())}
            style={{ fontWeight: 600, color: 'var(--primary)' }}
          >
            <span className={styles.pickerName}>➕ Extern: "{search.trim()}" übernehmen</span>
          </button>
        </div>
      )}`;

content = content.replace(searchInputStr, searchInputNewStr);

fs.writeFileSync(file, content);
console.log("Patched DayPlanBuilder");
