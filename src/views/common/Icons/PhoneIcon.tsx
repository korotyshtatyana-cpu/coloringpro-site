import React from 'react';

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="6" y="3" width="12" height="18" rx="3" />
    <path d="M10 17h4" />
  </svg>
);
