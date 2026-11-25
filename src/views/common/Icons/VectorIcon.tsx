import React from 'react';

export const VectorIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M4 17c4-1 5-4 8-4s4 3 8 2" />
    <path d="M4 12c4-1 5-4 8-4s4 3 8 2" />
    <path d="M4 7c4-1 5-4 8-4s4 3 8 2" />
  </svg>
);
