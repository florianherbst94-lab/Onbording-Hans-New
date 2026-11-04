const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/DashboardClient.tsx', 'utf8');

// Replace the shiftDetails div to include the note if it exists.
content = content.replace(
  /<div><span className=\{styles\.shiftLabel\}>Beginn<\/span><div className=\{styles\.shiftValue\}>\{a\.startTime \|\| '\?\?:\?\?'\}<\/div><\/div>/,
  `<div><span className={styles.shiftLabel}>Beginn</span><div className={styles.shiftValue}>{a.startTime || '??:??'}</div></div>
                        {a.note && (
                          <div style={{ gridColumn: "1 / -1", marginTop: "0.5rem" }}>
                            <span className={styles.shiftLabel}>Notiz</span>
                            <div className={styles.shiftValue} style={{ whiteSpace: "pre-wrap" }}>{a.note}</div>
                          </div>
                        )}`
);

fs.writeFileSync('src/app/dashboard/DashboardClient.tsx', content);
