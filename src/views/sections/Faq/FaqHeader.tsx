import React from 'react';
import { MailIcon } from '../../common/Icons/MailIcon';
import { NavigationModel } from '../../../models/NavigationModel';
import { useI18n } from '../../../controllers/LocaleContext';

export const FaqHeader: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="faq__intro" data-reveal>
      <span className="eyebrow">{t('common.faq')}</span>
      <h2>
        {t('faq.heading1')}
        <br />
        {t('faq.heading2')}
      </h2>
      <p>{t('faq.lead')}</p>
      <a
        className="faq__contact"
        href={`mailto:${NavigationModel.contactEmail}?subject=Coloring%20PRO`}
      >
        <MailIcon />
        {NavigationModel.contactEmail}
      </a>
    </div>
  );
};
