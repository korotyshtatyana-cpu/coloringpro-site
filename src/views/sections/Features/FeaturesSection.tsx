import React from 'react';
import { FeaturesHeader } from './FeaturesHeader';
import { FeaturesGrid } from './FeaturesGrid';

export const FeaturesSection: React.FC = () => (
  <section className="section" id="features">
    <div className="container">
      <FeaturesHeader />
      <FeaturesGrid />
    </div>
  </section>
);
