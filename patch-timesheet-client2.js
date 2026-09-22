const fs = require('fs');
const file = 'src/app/dashboard/timesheets/TimesheetClient.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'const [loading, setLoading] = useState(false)',
  'const [loading, setLoading] = useState(false)\n  const [isMounted, setIsMounted] = useState(false)\n  useEffect(() => setIsMounted(true), [])'
);

fs.writeFileSync(file, content);
console.log("Fixed TimesheetClient.tsx");
