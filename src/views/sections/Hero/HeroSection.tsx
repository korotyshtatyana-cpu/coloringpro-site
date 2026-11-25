import React from 'react';
import { HeroCopy } from './HeroCopy';
import { HeroStage } from './HeroStage';

export interface HeroSectionProps {
  onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo }) => (
  <section className="hero">
    <div className="hero-grid">
      <HeroCopy onScrollTo={onScrollTo} />
      <HeroStage />
    </div>
  </section>
);
