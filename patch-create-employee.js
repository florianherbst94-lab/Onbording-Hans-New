const fs = require('fs');
const file = 'src/app/admin/create-employee/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add HAUSMEISTER to job roles in Create Employee
if (!content.includes('<option value="HAUSMEISTER">Hausmeister</option>')) {
  content = content.replace(
    '<option value="REINIGUNGSKRAFT">Reinigungskraft</option>',
    '<option value="REINIGUNGSKRAFT">Reinigungskraft</option>\n                <option value="HAUSMEISTER">Hausmeister</option>'
  );
}

fs.writeFileSync(file, content);
console.log("Patched create-employee successfully");
