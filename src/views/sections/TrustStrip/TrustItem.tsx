import React from 'react';

export interface TrustItemProps {
  icon: React.ReactNode;
  text: string;
}

export const TrustItem: React.FC<TrustItemProps> = ({ icon, text }) => (
  <li>
    {icon}
    {text}
  </li>
);
