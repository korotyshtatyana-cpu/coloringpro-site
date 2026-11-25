import React from 'react';
import { useI18n } from '../../../controllers/LocaleContext';

export const HeroBadge: React.FC = () => {
  const { t } = useI18n();

  return (
    <span className="hero__badge">
      <span className="dot"></span> {t('hero.badge')}
    </span>
  );
};
