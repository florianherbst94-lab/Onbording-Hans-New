const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/DashboardClient.tsx', 'utf8');

// I should actually use `isMounted` properly to prevent hydration mismatch.
// Hydration mismatch happens when the server renders one string and the client renders another on the first pass.
// Dates formatted on the server (which might be in UTC) will differ from dates formatted on the client (in local timezone).
// Next.js throws hydration errors if the text content doesn't match perfectly.
// To fix it, we ONLY render the date if `isMounted` is true.

content = content.replace(
  'const uploadedDate = hygieneDoc?.uploadedAt ? new Date(hygieneDoc.uploadedAt) : new Date(0)',
  'const uploadedDate = (isMounted && hygieneDoc?.uploadedAt) ? new Date(hygieneDoc.uploadedAt) : new Date(0)'
);

content = content.replace(
  'const fiveDaysAgo = new Date()',
  'const fiveDaysAgo = isMounted ? new Date() : new Date(0)'
);

content = content.replace(
  '{summary.nextShift.plan.date ? new Date(summary.nextShift.plan.date).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit" }) : ""}',
  '{isMounted && summary.nextShift.plan.date ? new Date(summary.nextShift.plan.date).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit" }) : ""}'
);

content = content.replace(
  '{doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleDateString("de-DE") : ""}',
  '{isMounted && doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleDateString("de-DE") : ""}'
);

content = content.replace(
  '{slip.uploadedAt ? new Date(slip.uploadedAt).toLocaleDateString("de-DE") : ""}',
  '{isMounted && slip.uploadedAt ? new Date(slip.uploadedAt).toLocaleDateString("de-DE") : ""}'
);

content = content.replace(
  '{a.plan.date ? new Date(a.plan.date).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }) : ""}',
  '{isMounted && a.plan.date ? new Date(a.plan.date).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }) : ""}'
);

fs.writeFileSync('src/app/dashboard/DashboardClient.tsx', content);
