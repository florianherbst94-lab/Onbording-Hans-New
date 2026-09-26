const fs = require('fs');

function patchPage(file, clientName) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(`import ${clientName} from "./${clientName}"`)) {
    content = content.replace(
      `import ${clientName} from "./${clientName}"`,
      `import dynamic from 'next/dynamic'\nconst ${clientName} = dynamic(() => import('./${clientName}'), { ssr: false })`
    );
    fs.writeFileSync(file, content);
  }
}

patchPage('src/app/dashboard/availability/page.tsx', 'AvailabilityClient');
console.log("Patched more pages");
