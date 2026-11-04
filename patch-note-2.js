const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/DashboardClient.tsx', 'utf8');

// Replace the previous gridColumn style with one more suited for flex (width 100%, flexBasis 100%)
content = content.replace(
  /gridColumn: "1 \/ -1", marginTop: "0\.5rem"/,
  `flexBasis: "100%", marginTop: "0.25rem"`
);

// We need to ensure .shiftDetails has flex-wrap: wrap by default to allow flexBasis 100% to push it to a new line
let css = fs.readFileSync('src/app/dashboard/page.module.css', 'utf8');
if (!css.includes('flex-wrap: wrap;') || css.indexOf('flex-wrap: wrap;') > css.indexOf('.shiftDetails {')) {
  // Let's just add it to the main .shiftDetails block
  css = css.replace(
    /\.shiftDetails \{\n  display: flex;\n  gap: 1rem;/,
    `.shiftDetails {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;`
  );
  fs.writeFileSync('src/app/dashboard/page.module.css', css);
}

fs.writeFileSync('src/app/dashboard/DashboardClient.tsx', content);
