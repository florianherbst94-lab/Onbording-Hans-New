const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/timesheets/TimesheetClient.tsx', 'utf8');

content = content.replace(
  'interface Props {',
  'interface Props {\n  timeAccount?: any\n  timeTrackingType?: string'
);

content = content.replace(
  'export default function TimesheetClient({ initialTimesheets }: Props) {',
  'export default function TimesheetClient({ initialTimesheets, timeAccount, timeTrackingType }: Props) {'
);

const timeAccountUI = `
      {timeTrackingType === "TIME_ACCOUNT" && timeAccount && (
        <div style={{ marginBottom: "20px", padding: "15px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "15px", color: "var(--color-primary)" }}>Mein Zeitkonto (Aktueller Monat)</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "0.9rem" }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>Sollstunden:</p>
              <p style={{ fontWeight: "600" }}>{Math.floor(timeAccount.targetMinutes / 60)}:{String(Math.abs(timeAccount.targetMinutes % 60)).padStart(2, '0')} h</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>Iststunden (genehmigt):</p>
              <p style={{ fontWeight: "600" }}>{Math.floor(timeAccount.actualMinutes / 60)}:{String(Math.abs(timeAccount.actualMinutes % 60)).padStart(2, '0')} h</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>Monatsdifferenz:</p>
              <p style={{ fontWeight: "600", color: timeAccount.monthlyDifferenceMinutes >= 0 ? "var(--color-success)" : "var(--color-danger)" }}>
                {timeAccount.monthlyDifferenceMinutes > 0 ? "+" : ""}{timeAccount.monthlyDifferenceMinutes < 0 ? "-" : ""}{Math.floor(Math.abs(timeAccount.monthlyDifferenceMinutes) / 60)}:{String(Math.abs(timeAccount.monthlyDifferenceMinutes % 60)).padStart(2, '0')} h
              </p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>Übertrag Vormonat:</p>
              <p style={{ fontWeight: "600", color: timeAccount.openingBalanceMinutes >= 0 ? "var(--color-success)" : "var(--color-danger)" }}>
                {timeAccount.openingBalanceMinutes > 0 ? "+" : ""}{timeAccount.openingBalanceMinutes < 0 ? "-" : ""}{Math.floor(Math.abs(timeAccount.openingBalanceMinutes) / 60)}:{String(Math.abs(timeAccount.openingBalanceMinutes % 60)).padStart(2, '0')} h
              </p>
            </div>
          </div>
          <div style={{ marginTop: "15px", paddingTop: "15px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: "600" }}>Aktueller Stand:</span>
            <span style={{ fontWeight: "bold", fontSize: "1.2rem", color: timeAccount.closingBalanceMinutes >= 0 ? "var(--color-success)" : "var(--color-danger)" }}>
              {timeAccount.closingBalanceMinutes > 0 ? "+" : ""}{timeAccount.closingBalanceMinutes < 0 ? "-" : ""}{Math.floor(Math.abs(timeAccount.closingBalanceMinutes) / 60)}:{String(Math.abs(timeAccount.closingBalanceMinutes % 60)).padStart(2, '0')} h
            </span>
          </div>
        </div>
      )}
`;

content = content.replace(
  '<div className={styles.header}>',
  timeAccountUI + '\n      <div className={styles.header}>'
);

fs.writeFileSync('src/app/dashboard/timesheets/TimesheetClient.tsx', content);
console.log("Patched TimesheetClient to display Time Account");
