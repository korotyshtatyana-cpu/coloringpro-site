import React from 'react';
import { MailIcon } from '../Icons/MailIcon';
import { NavigationModel } from '../../../models/NavigationModel';
import { useI18n } from '../../../controllers/LocaleContext';

export const FooterBrand: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="footer-brand">
      <img src="assets/logo_text.svg" alt="Coloring PRO" />
      <p>{t('footer.tagline')}</p>
      <a className="footer-mail" href={`mailto:${NavigationModel.contactEmail}`}>
        <MailIcon />
        {NavigationModel.contactEmail}
      </a>
    </div>
  );
};
