import React from 'react';
import { useI18n } from '../../../controllers/LocaleContext';

export const FeaturesHeader: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="section-head section-head--center" data-reveal>
      <span className="eyebrow">{t('common.features')}</span>
      <h2>
        {t('features.heading1')}
        <br />
        {t('features.heading2')}
      </h2>
      <p>{t('features.lead')}</p>
    </div>
  );
};
