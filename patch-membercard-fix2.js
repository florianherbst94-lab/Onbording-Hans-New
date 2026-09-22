const fs = require('fs');
const file = 'src/app/dashboard/benefits/MemberCard.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'const now = isMounted ? new Date() : new Date(0)',
  'const now = new Date()'
);

fs.writeFileSync(file, content);
console.log("Fixed MemberCard.tsx again");
