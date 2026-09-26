const fs = require('fs');
let content = fs.readFileSync('src/components/admin/BulkPayslipUpload.module.css', 'utf8');

// Change unassignedGrid to a vertical list
content = content.replace(
  /\.unassignedGrid {\n  display: grid;\n  grid-template-columns: repeat\(auto-fill, minmax\(360px, 1fr\)\);\n  gap: 1\.25rem;\n}/,
  `.unassignedGrid {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}`
);

// Change unassignedCard to a horizontal row layout
content = content.replace(
  /\.unassignedCard {\n  background: #fff;\n  border: 1\.5px solid #fed7aa;\n  border-radius: 14px;\n  padding: 1\.25rem;\n  box-shadow: 0 2px 10px rgba\(249, 115, 22, 0\.05\);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}/,
  `.unassignedCard {\n  background: #fff;\n  border: 1.5px solid #fed7aa;\n  border-radius: 14px;\n  padding: 1rem;\n  box-shadow: 0 2px 10px rgba(249, 115, 22, 0.05);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}`
);

// Make the thumbnail container smaller for the list view
content = content.replace(
  /\.thumbnailContainer {\n  width: 100%;\n  max-width: 180px;\n  height: 240px;\n/,
  `.thumbnailContainer {\n  width: 100px;\n  height: 140px;\n  flex-shrink: 0;\n`
);

// We need cardBody to be flex-row as well
content = content.replace(
  /\.cardBody {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}/,
  `.cardBody {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 1.5rem;\n  flex: 1;\n}`
);

// Make cardHeader a vertical stack of tags on the left side
content = content.replace(
  /\.cardHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}/,
  `.cardHeader {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex-shrink: 0;\n  min-width: 100px;\n}`
);

// cardDetails should expand
content = content.replace(
  /\.cardDetails {\n  display: flex;\n  flex-direction: column;\n  gap: 0\.8rem;\n  width: 100%;\n}/,
  `.cardDetails {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  flex: 1;\n}`
);

// Make successBanner sticky
content = content.replace(
  /\.successBanner {\n  display: flex;\n  align-items: center;\n  gap: 0\.5rem;\n  padding: 0\.9rem 1\.2rem;\n  margin-top: 1rem;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 12px;\n  color: #166534;\n  font-size: 0\.95rem;\n  font-weight: 600;\n  animation: fadeIn 0\.3s ease;\n}/,
  `.successBanner {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.9rem 1.2rem;\n  margin-top: 1rem;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 12px;\n  color: #166534;\n  font-size: 0.95rem;\n  font-weight: 600;\n  animation: fadeIn 0.3s ease;\n  position: sticky;\n  top: 1rem;\n  z-index: 100;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n}`
);

fs.writeFileSync('src/components/admin/BulkPayslipUpload.module.css', content);
