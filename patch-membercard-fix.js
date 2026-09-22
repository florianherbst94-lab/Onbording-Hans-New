const fs = require('fs');
const file = 'src/app/dashboard/benefits/MemberCard.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'const [timeStr, setTimeStr] = useState<string>("")',
  'const [timeStr, setTimeStr] = useState<string>("")\n  const [isMounted, setIsMounted] = useState(false)\n  useEffect(() => setIsMounted(true), [])'
);

fs.writeFileSync(file, content);
console.log("Fixed MemberCard.tsx");
