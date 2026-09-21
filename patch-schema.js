const fs = require('fs');
const file = 'prisma/schema.prisma';
let content = fs.readFileSync(file, 'utf8');

// Add contractType
if (!content.includes('contractType')) {
  content = content.replace(
    'jobRole          String?           // e.g., "ORDNER", "REINIGUNGSKRAFT", "SERVICE"',
    'jobRole          String?           // e.g., "ORDNER", "REINIGUNGSKRAFT", "SERVICE"\n  contractType     String            @default("MINIJOB") // e.g., "MINIJOB", "PART_TIME", "FULL_TIME"'
  );
}

fs.writeFileSync(file, content);
console.log("Patched schema successfully");
