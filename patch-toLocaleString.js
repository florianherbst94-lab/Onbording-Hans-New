const fs = require('fs');

function formatCurrencyFix(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace .toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) with a custom format function,
  // OR just wrap it in isMounted ? ... : '...'
  
  if (file.includes('DashboardClient')) {
    content = content.replace(
      "{summary?.currentMonthEarnings.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}",
      "{isMounted ? summary?.currentMonthEarnings.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) : '...'}"
    );
  } else if (file.includes('TimesheetClient')) {
    content = content.replace(
      "{monthlyEarnings.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}",
      "{isMounted ? monthlyEarnings.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) : '...'}"
    );
    content = content.replace(
      "{(ts.totalHours * (ts.hourlyWage || 13.90)).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}",
      "{isMounted ? (ts.totalHours * (ts.hourlyWage || 13.90)).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) : '...'}"
    );
  }
  
  fs.writeFileSync(file, content);
}

formatCurrencyFix('src/app/dashboard/DashboardClient.tsx');
formatCurrencyFix('src/app/dashboard/timesheets/TimesheetClient.tsx');
console.log("Patched toLocaleString for currency");
