const fs = require('fs');
const file = 'src/app/dashboard/DashboardClient.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add isMounted
if (!content.includes('const [isMounted, setIsMounted] = useState(false)')) {
  content = content.replace(
    'const [isUploadingHygiene, setIsUploadingHygiene] = useState(false)',
    'const [isUploadingHygiene, setIsUploadingHygiene] = useState(false)\n  const [isMounted, setIsMounted] = useState(false)\n\n  React.useEffect(() => {\n    setIsMounted(true)\n  }, [])'
  );
}

// Replace new Date usages
content = content.replace(
  /new Date\((hygieneDoc\.uploadedAt)\)/g,
  '(isMounted ? new Date($1) : new Date(0))'
);
content = content.replace(
  /const fiveDaysAgo = new Date\(\)/g,
  'const fiveDaysAgo = isMounted ? new Date() : new Date(0)'
);

// We should just use isMounted for the display texts:
content = content.replace(
  /\{new Date\(summary\.nextShift\.plan\.date\)\.toLocaleDateString\('de-DE', \{ weekday: 'long', day: '2-digit', month: '2-digit' \}\)\}/g,
  '{isMounted ? new Date(summary.nextShift.plan.date).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit" }) : ""}'
);

content = content.replace(
  /\{new Date\(doc\.uploadedAt\)\.toLocaleDateString\("de-DE"\)\}/g,
  '{isMounted ? new Date(doc.uploadedAt).toLocaleDateString("de-DE") : ""}'
);

content = content.replace(
  /\{new Date\(slip\.uploadedAt\)\.toLocaleDateString\("de-DE"\)\}/g,
  '{isMounted ? new Date(slip.uploadedAt).toLocaleDateString("de-DE") : ""}'
);

content = content.replace(
  /\{new Date\(a\.plan\.date\)\.toLocaleDateString\("de-DE", \{ weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' \}\)\}/g,
  '{isMounted ? new Date(a.plan.date).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }) : ""}'
);

fs.writeFileSync(file, content);
console.log("Patched DashboardClient.tsx");
