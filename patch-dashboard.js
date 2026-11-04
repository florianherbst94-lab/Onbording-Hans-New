const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/DashboardClient.tsx', 'utf8');

// The replacement logic:
// Replace a.area with derived area, a.role with derived role.
// We can do this right inside the map function.
content = content.replace(
  /myShifts\.map\(\(a: any\) => \(/,
  `myShifts.map((a: any) => {
                  const label = a.assignmentLabel || "";
                  let area = label;
                  let role = "-";
                  const match = label.match(/^(.*?)(?:\\s*\\((.*?)\\))?$/);
                  if (match) {
                    area = match[1].trim();
                    if (match[2]) {
                      role = match[2].trim();
                    }
                  }
                  return (`
);

content = content.replace(
  /\{a\.area\}/,
  `{area}`
);

content = content.replace(
  /\{a\.role \|\| '-'\}/,
  `{role}`
);

content = content.replace(
  /<\/Card>\n                \)\)/,
  `</Card>\n                );})`
);


fs.writeFileSync('src/app/dashboard/DashboardClient.tsx', content);
