import React from 'react';
import { PencilIcon } from '../Icons/PencilIcon';
import { useI18n } from '../../../controllers/LocaleContext';

export const FooterBottom: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="footer-bottom">
      <span>{t('footer.copyright')}</span>
      <span>
        <PencilIcon />
        {t('footer.made')}
      </span>
    </div>
  );
};
