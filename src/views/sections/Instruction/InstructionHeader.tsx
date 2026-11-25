import React from 'react';
import { useI18n } from '../../../controllers/LocaleContext';

export const InstructionHeader: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="section-head">
      <span className="eyebrow">{t('common.howItWorks')}</span>
      <h2>
        {t('instruction.heading1')}
        <br />
        {t('instruction.heading2')}
      </h2>
      <p>{t('instruction.lead')}</p>
    </div>
  );
};
