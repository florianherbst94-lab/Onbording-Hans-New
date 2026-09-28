const fs = require('fs');
let content = fs.readFileSync('src/components/ui/LinkButton.tsx', 'utf8');
if (!content.includes('"use client"')) {
  content = '"use client";\n' + content;
  fs.writeFileSync('src/components/ui/LinkButton.tsx', content);
}
