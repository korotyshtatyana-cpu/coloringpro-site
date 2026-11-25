import React from 'react';
import { FeatureModel } from '../../../models/FeatureModel';
import { FeatureCard } from './FeatureCard';
import { useI18n } from '../../../controllers/LocaleContext';

export const FeaturesGrid: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="features-grid">
      {FeatureModel.getItems(t).map((item) => (
        <FeatureCard key={item.id} item={item} />
      ))}
    </div>
  );
};
