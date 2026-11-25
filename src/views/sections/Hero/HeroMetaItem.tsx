import React from 'react';

export interface HeroMetaItemProps {
  icon: React.ReactNode;
  text: string;
}

export const HeroMetaItem: React.FC<HeroMetaItemProps> = ({ icon, text }) => (
  <li>
    {icon}
    {text}
  </li>
);
