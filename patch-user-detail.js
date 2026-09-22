const fs = require('fs');
let content = fs.readFileSync('src/app/admin/contracts/[userId]/page.tsx', 'utf8');

if (!content.includes('TimeAccountEditor')) {
  content = content.replace(
    'import { UserWageEditor } from "@/components/admin/UserWageEditor"',
    'import { UserWageEditor } from "@/components/admin/UserWageEditor"\nimport { TimeAccountEditor } from "@/components/admin/TimeAccountEditor"'
  );

  content = content.replace(
    '  const user = await prisma.user.findUnique({',
    '  const user = await prisma.user.findUnique({'
  );
  
  // We need to fetch the user with workSchedules to pass to TimeAccountEditor
  // Let's modify the user fetch
  content = content.replace(
    '    where: { id: userId },',
    '    where: { id: userId },\n    include: { workSchedules: true }'
  );

  // Add the TimeAccountEditor component below UserWageEditor
  const widgetToFind = /<UserWageEditor[^>]+userId=\{userId\}[^>]+hourlyWage=\{user\.hourlyWage\}[^>]*\/>/;
  const match = content.match(widgetToFind);
  
  if (match) {
    const replacement = match[0] + `
        <TimeAccountEditor 
          userId={userId} 
          initialTimeTrackingType={user.timeTrackingType} 
          initialWeeklyHours={user.weeklyHours}
          initialStartDate={user.timeAccountStartDate ? user.timeAccountStartDate.toISOString().split('T')[0] : null}
          workSchedules={user.workSchedules}
        />`;
    content = content.replace(widgetToFind, replacement);
  } else {
    console.log("Could not find UserWageEditor tag to replace.");
  }

  fs.writeFileSync('src/app/admin/contracts/[userId]/page.tsx', content);
  console.log("Patched user detail page.");
}
