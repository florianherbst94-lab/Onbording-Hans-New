const fs = require('fs');
const file = 'src/app/dashboard/availability/AvailabilityClient.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('const [isMounted, setIsMounted] = useState(false)')) {
  content = content.replace(
    'const [hasChanges, setHasChanges] = useState(false)',
    'const [hasChanges, setHasChanges] = useState(false)\n  const [isMounted, setIsMounted] = useState(false)'
  );
  content = content.replace(
    '  useEffect(() => {',
    '  useEffect(() => {\n    setIsMounted(true)'
  );
  content = content.replace(
    /return new Date\(dateString\).toLocaleDateString\("de-DE", \{ weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' \}\)/g,
    'return isMounted ? new Date(dateString).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }) : ""'
  );
  fs.writeFileSync(file, content);
  console.log("Patched AvailabilityClient.tsx");
} else {
  console.log("AvailabilityClient already patched");
}
