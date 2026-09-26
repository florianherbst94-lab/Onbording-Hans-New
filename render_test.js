const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Since we cannot easily transpile the whole Next.js app in Node,
// let's just write a mock version of the exact logic in DashboardClient
// to see if we can trigger an exception.

const props = require('./milan_props.json');

function testRender() {
  const { user, documents, payslips, summary } = props;
  
  const firstName = user.name?.split(" ")[0] || user.name;
  const hygieneDoc = documents.find(d => d.type === "HYGIENE_CERTIFICATE");
  const hasHygieneCertificate = !!hygieneDoc;
  
  let showHygieneCard = true;
  if (hygieneDoc) {
    const isMounted = false; // SERVER SIDE
    const uploadedDate = (isMounted && hygieneDoc?.uploadedAt) ? new Date(hygieneDoc.uploadedAt) : new Date(0);
    const fiveDaysAgo = isMounted ? new Date() : new Date(0);
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
    
    if (uploadedDate < fiveDaysAgo) {
      showHygieneCard = false;
    }
  }

  // Check MONTHS
  const MONTHS = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];
  if (payslips.length > 0) {
    const latestPayslipMonth = MONTHS[payslips[0].month - 1];
    if (latestPayslipMonth === undefined) {
      throw new Error(`Payslip month undefined: ${payslips[0].month}`);
    }
  }

  // simulate map
  const sorted = [...payslips].sort((a, b) => b.year - a.year || b.month - a.month);
  
  console.log("No error thrown in logic simulation!");
}

testRender();
