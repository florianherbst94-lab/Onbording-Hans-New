const fs = require('fs');
const file = 'src/app/admin/planning/DayPlanBuilder.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'const handlePickerSelect = (empId: string, empName: string) => {',
  'const handlePickerSelect = (empId: string | null, empName: string) => {'
);

fs.writeFileSync(file, content);
console.log("Patched DayPlanBuilder handlePickerSelect");
