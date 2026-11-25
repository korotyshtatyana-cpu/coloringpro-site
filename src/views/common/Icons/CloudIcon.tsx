import React from 'react';

export const CloudIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M7 18a4 4 0 0 1-.6-7.95A5.5 5.5 0 0 1 17.2 9.5 4.25 4.25 0 0 1 17 18H7z" />
  </svg>
);
