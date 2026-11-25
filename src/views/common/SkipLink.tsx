import React from 'react';
import { useI18n } from '../../controllers/LocaleContext';

export const SkipLink: React.FC = () => {
  const { t } = useI18n();

  return (
    <a className="skip-link" href="#main">
      {t('common.skipToContent')}
    </a>
  );
};
