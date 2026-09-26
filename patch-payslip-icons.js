const fs = require('fs');
let content = fs.readFileSync('src/components/admin/BulkPayslipUpload.tsx', 'utf8');

content = content.replace(
  /import \{ Button \} from "@\/components\/ui\/Button"/,
  `import { Button } from "@/components/ui/Button"\nimport { LuUndo2, LuCheck, LuEye } from "react-icons/lu"`
);

content = content.replace(
  /\{deletingPage === item\.page \? "Löscht…" : "Zuordnung aufheben \/ Löschen"\}/,
  `{deletingPage === item.page ? "Wird rückgängig gemacht…" : <><LuUndo2 style={{ marginRight: '5px' }} /> Zuordnung rückgängig machen</>}`
);

// Add icons to other buttons
content = content.replace(
  />PDF ansehen<\/Button>/,
  `><LuEye style={{ marginRight: '5px' }} /> PDF ansehen</Button>`
);

content = content.replace(
  /\{assigningPage === item\.page \? "Ordnet zu…" : "Hinzufügen"\}/,
  `{assigningPage === item.page ? "Wird zugewiesen…" : <><LuCheck style={{ marginRight: '5px' }} /> Hinzufügen</>}`
);

fs.writeFileSync('src/components/admin/BulkPayslipUpload.tsx', content);
