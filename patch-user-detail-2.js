const fs = require('fs');
let content = fs.readFileSync('src/app/admin/contracts/[userId]/page.tsx', 'utf8');

const widgetToFind = /<UserWageEditor userId=\{userId\} currentWage=\{user\?\.hourlyWage \|\| 13\.90\} currentContractType=\{user\?\.contractType \|\| "MINIJOB"\} currentJobRole=\{user\?\.jobRole \|\| "SERVICE"\} \/>/;
const match = content.match(widgetToFind);

if (match) {
  const replacement = match[0] + `
        {user && (
          <TimeAccountEditor 
            userId={userId} 
            initialTimeTrackingType={user.timeTrackingType} 
            initialWeeklyHours={user.weeklyHours}
            initialStartDate={user.timeAccountStartDate ? user.timeAccountStartDate.toISOString().split('T')[0] : null}
            workSchedules={user.workSchedules || []}
          />
        )}`;
  content = content.replace(widgetToFind, replacement);
  fs.writeFileSync('src/app/admin/contracts/[userId]/page.tsx', content);
  console.log("Patched user detail page successfully.");
} else {
  console.log("Still could not find UserWageEditor tag.");
}
