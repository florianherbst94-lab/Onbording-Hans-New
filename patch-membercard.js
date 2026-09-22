const fs = require('fs');
const file = 'src/app/dashboard/benefits/MemberCard.tsx';
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('const [isMounted, setIsMounted] = useState(false)')) {
    content = content.replace(
      'export function MemberCard({ user, birthDate }: { user: any, birthDate?: string }) {',
      'export function MemberCard({ user, birthDate }: { user: any, birthDate?: string }) {\n  const [isMounted, setIsMounted] = useState(false)\n  useEffect(() => setIsMounted(true), [])'
    );
    content = content.replace(
      'import React from "react"',
      'import React, { useState, useEffect } from "react"'
    );
    content = content.replace(
      /const now = new Date\(\)/g,
      'const now = isMounted ? new Date() : new Date(0)'
    );
    content = content.replace(
      /formattedBirthDate = new Date\(birthDate\)\.toLocaleDateString\('de-DE', \{ day: '2-digit', month: '2-digit', year: 'numeric' \}\)/g,
      'formattedBirthDate = isMounted ? new Date(birthDate).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }) : ""'
    );
    fs.writeFileSync(file, content);
    console.log("Patched MemberCard.tsx");
  } else {
    console.log("MemberCard already patched");
  }
}
