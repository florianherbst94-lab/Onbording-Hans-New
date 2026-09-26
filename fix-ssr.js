const fs = require('fs');

function revertPage(file, clientName) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    `import dynamic from 'next/dynamic'\nconst ${clientName} = dynamic(() => import('./${clientName}'), { ssr: false })`,
    `import ${clientName} from "./${clientName}"`
  );
  fs.writeFileSync(file, content);
}

revertPage('src/app/dashboard/page.tsx', 'DashboardClient');
revertPage('src/app/dashboard/timesheets/page.tsx', 'TimesheetClient');
revertPage('src/app/dashboard/availability/page.tsx', 'AvailabilityClient');
console.log("Reverted dynamic imports");
