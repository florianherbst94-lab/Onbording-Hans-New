const fs = require('fs');
const file = 'src/app/api/planning/admin/shifts/route.ts';
let content = fs.readFileSync(file, 'utf8');

// POST updating row mappings
content = content.replace(
  'note: r.note || null,',
  'note: r.note || null,\n              customName: r.customName || null,'
);
// replace multiple occurrences, there are two (update and create)
content = content.replace(
  'note: r.note || null,\n              }))',
  'note: r.note || null,\n              customName: r.customName || null,\n              }))'
);

fs.writeFileSync(file, content);
console.log("Patched API route");
