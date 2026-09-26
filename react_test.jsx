import React from 'react';
import { renderToString } from 'react-dom/server';
import DashboardClient from './src/app/dashboard/DashboardClient';
import props from './milan_props.json';

// We need to polyfill some Next.js things if needed, but DashboardClient is just a function.
try {
  const html = renderToString(<DashboardClient {...props} />);
  console.log("SUCCESS RENDER");
} catch (e) {
  console.error("RENDER ERROR:", e);
}
