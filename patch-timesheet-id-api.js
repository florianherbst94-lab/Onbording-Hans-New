const fs = require('fs');
let content = fs.readFileSync('src/app/api/timesheets/[id]/route.ts', 'utf8');

content = content.replace(
  'const { date, startTime, endTime, breakMinutes, totalHours, status, note } = body',
  'const { date, startTime, endTime, breakMinutes, totalHours, status, note, absenceType } = body'
);

content = content.replace(
  '...(status && { status }),',
  '...(status && { status }),\n      ...(absenceType && { absenceType }),'
);

// Add recalculateTimeAccount call when approved/changed
if (!content.includes('import { recalculateTimeAccount }')) {
  content = content.replace(
    'import { auth } from "@/auth"',
    'import { auth } from "@/auth"\nimport { recalculateTimeAccount } from "@/lib/timeAccountService"'
  );
  
  content = content.replace(
    '    return NextResponse.json(updated)',
    `
    // Recalculate time account if status changed to or from APPROVED, or if it is APPROVED and details changed
    if (existing.status === "APPROVED" || status === "APPROVED") {
      const year = parseInt(updated.date.split('-')[0])
      const month = parseInt(updated.date.split('-')[1])
      try {
        await recalculateTimeAccount(existing.userId, year, month)
      } catch (e) {
        console.error("Time account recalculation error:", e)
      }
    }

    return NextResponse.json(updated)`
  );
}

fs.writeFileSync('src/app/api/timesheets/[id]/route.ts', content);
console.log("Patched timesheets ID API.");
