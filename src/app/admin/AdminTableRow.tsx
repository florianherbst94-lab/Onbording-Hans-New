"use client";
import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AdminTableRow({ href, children, className }: Props) {
  return (
    <tr 
      className={className} 
      style={{ cursor: 'pointer' }}
      onClick={(e) => {
        // Prevent click if they clicked on a form, button, or link inside the row
        const target = e.target as HTMLElement;
        if (
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.closest('form')
        ) {
          return;
        }
        window.location.href = href;
      }}
    >
      {children}
    </tr>
  );
}
