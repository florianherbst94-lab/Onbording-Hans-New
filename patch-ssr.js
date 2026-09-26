const fs = require('fs');

function patchPage(file, clientName) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    `import ${clientName} from "./${clientName}"`,
    `import dynamic from 'next/dynamic'\nconst ${clientName} = dynamic(() => import('./${clientName}'), { ssr: false })`
  );
  fs.writeFileSync(file, content);
}

patchPage('src/app/dashboard/page.tsx', 'DashboardClient');
patchPage('src/app/dashboard/timesheets/page.tsx', 'TimesheetClient');
console.log("Patched pages to use dynamic imports with ssr: false");
