const fs = require('fs');
let content = fs.readFileSync('src/app/admin/planning/DayPlanBuilder.tsx', 'utf8');

// 1. Add pdfExportMode state
content = content.replace(
  /const \[isGeneratingPDF, setIsGeneratingPDF\] = useState\(false\)/,
  `const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)\n  const [pdfExportMode, setPdfExportMode] = useState<string>("ALL")`
);

// 2. Add availableWeeks memo
content = content.replace(
  /const currentRequest = requests\.find\(r => r\.id === selectedRequestId\)/,
  `const currentRequest = requests.find(r => r.id === selectedRequestId)

  const availableWeeks = React.useMemo(() => {
    if (!currentRequest) return []
    const weeks = new Set<number>()
    currentRequest.days.forEach((d: any) => {
      const date = new Date(d.date)
      const u = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      u.setUTCDate(u.getUTCDate() + 4 - (u.getUTCDay() || 7))
      const yearStart = new Date(Date.UTC(u.getUTCFullYear(),0,1))
      const weekNo = Math.ceil((((u.getTime() - yearStart.getTime()) / 86400000) + 1)/7)
      weeks.add(weekNo)
    })
    return Array.from(weeks).sort((a,b) => a-b)
  }, [currentRequest])`
);

// 3. Update handleWeeklyPDF
content = content.replace(
  /const res = await fetch\(`\/api\/planning\/admin\/shifts\?requestId=\$\{selectedRequestId\}`\)\n      const plans = await res\.json\(\)\n      setWeeklyPlans\(plans\)/,
  `const res = await fetch(\`/api/planning/admin/shifts?requestId=\${selectedRequestId}\`)
      let plans = await res.json()
      
      if (pdfExportMode !== "ALL") {
        plans = plans.filter((p: any) => {
           const d = new Date(p.date)
           const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
           date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7))
           const yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1))
           const weekNo = Math.ceil((((date.getTime() - yearStart.getTime()) / 86400000) + 1)/7)
           return weekNo === parseInt(pdfExportMode)
        })
      }
      
      if (plans.length === 0) {
        alert("Für diesen Zeitraum liegen keine gespeicherten Pläne vor.")
        setIsGeneratingPDF(false)
        return
      }

      setWeeklyPlans(plans)`
);

// 4. Update the save filename
content = content.replace(
  /const requestTitle = currentRequest\.title\.replace\(\/\\s\+\/g, "_"\)\n      pdf\.save\(`Personalplan_\$\{requestTitle\}\.pdf`\)/,
  `const requestTitle = currentRequest.title.replace(/\\s+/g, "_")
      const suffix = pdfExportMode === "ALL" ? "Gesamt" : \`KW\${pdfExportMode}\`
      pdf.save(\`Personalplan_\${requestTitle}_\${suffix}.pdf\`)`
);

// 5. Update footer buttons
content = content.replace(
  /<div className=\{styles\.footerLeft\}>\n          <Button variant="outline" onClick=\{handleCSV\}>CSV Export<\/Button>\n          <Button variant="outline" onClick=\{handlePrint\}>🖨️ Drucken<\/Button>\n          <Button variant="outline" onClick=\{handleWeeklyPDF\} disabled=\{isGeneratingPDF\}>\n            \{isGeneratingPDF \? "PDF wird generiert…" : "📄 Wochenplan \(PDF\)"\}\n          <\/Button>\n        <\/div>/,
  `<div className={styles.footerLeft} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <Button variant="outline" onClick={handleCSV}>CSV Export</Button>
          <Button variant="outline" onClick={handlePrint}>🖨️ Drucken</Button>
          <div style={{ display: "flex", gap: "0.25rem", alignItems: "center", marginLeft: "0.5rem" }}>
            <select 
              value={pdfExportMode} 
              onChange={e => setPdfExportMode(e.target.value)}
              className={styles.selectInput}
              style={{ width: "auto", margin: 0, padding: "0.4rem" }}
            >
              <option value="ALL">Gesamter Zeitraum</option>
              {availableWeeks.map(w => (
                <option key={w} value={w}>Nur KW {w}</option>
              ))}
            </select>
            <Button variant="outline" onClick={handleWeeklyPDF} disabled={isGeneratingPDF}>
              {isGeneratingPDF ? "Generiert..." : "📄 Als PDF laden"}
            </Button>
          </div>
        </div>`
);

fs.writeFileSync('src/app/admin/planning/DayPlanBuilder.tsx', content);
