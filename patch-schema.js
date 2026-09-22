const fs = require('fs');
const file = 'prisma/schema.prisma';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('customName')) {
  content = content.replace(
    'employeeId      String?       // null = unbesetzte Position',
    'employeeId      String?       // null = unbesetzte Position\n  customName      String?       // Für externe Mitarbeiter oder manuelle Eingaben'
  );
  fs.writeFileSync(file, content);
  console.log("Patched schema");
} else {
  console.log("Already patched");
}
