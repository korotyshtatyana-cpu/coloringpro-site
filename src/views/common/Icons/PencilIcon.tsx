import React from 'react';

export const PencilIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M12 19l7-7a2.5 2.5 0 0 0-3.5-3.5L8 16l-1.5 4.5L11 19z" />
    <path d="M14.5 7.5l2 2" />
  </svg>
);
