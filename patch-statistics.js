const fs = require('fs');
let content = fs.readFileSync('src/app/admin/planning/StatisticsClient.tsx', 'utf8');

// Replace style with an inline div
content = content.replace(
  /<CardContent style=\{\{ paddingTop: "1\.5rem" \}\}>/,
  `<CardContent>\n        <div style={{ paddingTop: "1.5rem" }}>`
);

content = content.replace(
  /<\/CardContent>/,
  `</div>\n      </CardContent>`
);

fs.writeFileSync('src/app/admin/planning/StatisticsClient.tsx', content);
