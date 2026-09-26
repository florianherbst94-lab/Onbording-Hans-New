const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/DashboardClient.tsx', 'utf8');

// I will fix the potential hydration issues with Dates in DashboardClient
content = content.replace(
  'const uploadedDate = (isMounted ? new Date(hygieneDoc.uploadedAt) : new Date(0))',
  'const uploadedDate = hygieneDoc?.uploadedAt ? new Date(hygieneDoc.uploadedAt) : new Date(0)'
);
content = content.replace(
  'const fiveDaysAgo = isMounted ? new Date() : new Date(0)',
  'const fiveDaysAgo = new Date()'
);

content = content.replace(
  '{isMounted ? new Date(summary.nextShift.plan.date).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit" }) : ""}',
  '{summary.nextShift.plan.date ? new Date(summary.nextShift.plan.date).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit" }) : ""}'
);

content = content.replace(
  '{isMounted ? new Date(doc.uploadedAt).toLocaleDateString("de-DE") : ""}',
  '{doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleDateString("de-DE") : ""}'
);

content = content.replace(
  '{isMounted ? new Date(slip.uploadedAt).toLocaleDateString("de-DE") : ""}',
  '{slip.uploadedAt ? new Date(slip.uploadedAt).toLocaleDateString("de-DE") : ""}'
);

content = content.replace(
  '{isMounted ? new Date(a.plan.date).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }) : ""}',
  '{a.plan.date ? new Date(a.plan.date).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }) : ""}'
);

fs.writeFileSync('src/app/dashboard/DashboardClient.tsx', content);
