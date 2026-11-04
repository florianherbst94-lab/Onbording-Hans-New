const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/timesheets/TimesheetForm.tsx', 'utf8');

// 1. Add resetKey state
content = content.replace(
  /const \[error, setError\] = useState<string \| null>\(null\)/,
  `const [error, setError] = useState<string | null>(null)\n  const [resetKey, setResetKey] = useState(0)`
);

// 2. Increment resetKey on success
content = content.replace(
  /\/\/ Reset form\n      setStartTime\(""\)\n      setEndTime\(""\)\n      setBreakMinutes\(0\)\n      setNote\(""\)\n      onSuccess\(\)/,
  `// Reset form
      setStartTime("")
      setEndTime("")
      setBreakMinutes(0)
      setNote("")
      setResetKey(k => k + 1)
      onSuccess()`
);

// 3. Change form to use key={resetKey}
content = content.replace(
  /<form className=\{styles\.formContainer\}>/,
  `<form key={resetKey} className={styles.formContainer}>`
);

// 4. Change value= to defaultValue= for date, startTime, endTime, breakMinutes, note
content = content.replace(
  /<input type="date" value=\{date\}/,
  `<input type="date" defaultValue={date}`
);
content = content.replace(
  /<input type="time" value=\{startTime\}/,
  `<input type="time" defaultValue={startTime}`
);
content = content.replace(
  /<input type="time" value=\{endTime\}/,
  `<input type="time" defaultValue={endTime}`
);
content = content.replace(
  /<input \n            type="number" \n            min="0" \n            value=\{breakMinutes\} \n            onChange=\{e => setBreakMinutes\(parseInt\(e\.target\.value\) \|\| 0\)\} \n          \/>/,
  `<input \n            type="number" \n            min="0" \n            defaultValue={breakMinutes || ""} \n            onChange={e => setBreakMinutes(parseInt(e.target.value) || 0)} \n          />`
);
content = content.replace(
  /<input \n            type="text" \n            placeholder="Besondere Vorkommnisse\.\.\." \n            value=\{note\} \n            onChange=\{e => setNote\(e\.target\.value\)\} \n          \/>/,
  `<input \n            type="text" \n            placeholder="Besondere Vorkommnisse..." \n            defaultValue={note} \n            onChange={e => setNote(e.target.value)} \n          />`
);

fs.writeFileSync('src/app/dashboard/timesheets/TimesheetForm.tsx', content);
