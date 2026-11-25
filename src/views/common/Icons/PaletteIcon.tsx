import React from 'react';

export const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="9" cy="9.5" r="1" />
    <circle cx="15" cy="9.5" r="1" />
    <circle cx="9.5" cy="14.5" r="1" />
    <circle cx="14.5" cy="14" r="1" />
  </svg>
);
