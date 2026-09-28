const fs = require('fs');
let content = fs.readFileSync('src/app/admin/planning/page.tsx', 'utf8');

// Add import
content = content.replace(
  /import ResponsesClient from "\.\/ResponsesClient"/,
  `import ResponsesClient from "./ResponsesClient"\nimport StatisticsClient from "./StatisticsClient"`
);

// Add tab state type
content = content.replace(
  /useState<"REQUESTS" \| "RESPONSES" \| "SCHEDULER">\("REQUESTS"\)/,
  `useState<"REQUESTS" | "RESPONSES" | "STATISTICS" | "SCHEDULER">("REQUESTS")`
);

// Add tab button
const tabReplacement = `<button 
            className={\`\${styles.tab} \${activeTab === "RESPONSES" ? styles.activeTab : ""}\`}
            onClick={() => setActiveTab("RESPONSES")}
          >
            Auswertung
          </button>
          <button 
            className={\`\${styles.tab} \${activeTab === "STATISTICS" ? styles.activeTab : ""}\`}
            onClick={() => setActiveTab("STATISTICS")}
          >
            Statistik
          </button>`;

content = content.replace(
  /<button\s+className=\{\`\$\{styles\.tab\} \$\{activeTab === "RESPONSES" \? styles\.activeTab : ""\}\`\}\s+onClick=\{\(\) => setActiveTab\("RESPONSES"\)\}\s*>\s*Auswertung\s*<\/button>/,
  tabReplacement
);

// Add component render
content = content.replace(
  /\{activeTab === "RESPONSES" && <ResponsesClient requests=\{requests\} \/>\}/,
  `{activeTab === "RESPONSES" && <ResponsesClient requests={requests} />}\n            {activeTab === "STATISTICS" && <StatisticsClient requests={requests} />}`
);

fs.writeFileSync('src/app/admin/planning/page.tsx', content);
