import React from 'react';
import { DownloadButton } from './DownloadButton';
import { AppleIcon } from '../../common/Icons/AppleIcon';
import { GooglePlayIcon } from '../../common/Icons/GooglePlayIcon';
import { NavigationModel } from '../../../models/NavigationModel';
import { useI18n } from '../../../controllers/LocaleContext';

export const DownloadCtaPanel: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="cta-panel" data-reveal>
      <div className="cta-panel__inner">
        <div>
          <span className="eyebrow">{t('download.title')}</span>
          <h2>{t('download.heading')}</h2>
          <p>{t('download.lead')}</p>
        </div>

        <div className="cta-actions">
          <DownloadButton
            icon={<GooglePlayIcon />}
            storeName={t('common.googlePlay')}
            caption={t('download.getItOn')}
            href={NavigationModel.googlePlayUrl}
            isSolid
          />
          <DownloadButton
            icon={<AppleIcon />}
            storeName={t('common.appStore')}
            caption={t('download.comingSoon')}
            href={NavigationModel.appStoreUrl ?? undefined}
          />

          <p className="cta-note">
            {t('download.questions')}
            <a href={`mailto:${NavigationModel.contactEmail}?subject=Coloring%20PRO`}>
              {t('download.writeToUs')}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
