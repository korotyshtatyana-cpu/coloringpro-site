import React from 'react';
import { DeviceScreen } from './DeviceScreen';
import { FloatingNote } from './FloatingNote';
import { PaletteCard } from './PaletteCard';

export const HeroStage: React.FC = () => (
  <div className="hero-stage" aria-hidden="true">
    <DeviceScreen />
    <FloatingNote />
    <PaletteCard />
  </div>
);
