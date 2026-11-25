import React from 'react';

export const AppleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 7.9.7 1 1.5 2 2.5 2 1 0 1.4-.6 2.7-.6s1.6.6 2.7.6c1.1 0 1.8-1 2.5-1.9.8-1.1 1.1-2.2 1.1-2.3 0 0-2.2-.8-2.2-2.9zM14.5 6.5c.6-.7 1-1.7.9-2.6-.9 0-1.9.6-2.5 1.3-.6.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.3z" />
  </svg>
);
