import React from 'react';
import { ArrowRightIcon } from '../../common/Icons/ArrowRightIcon';
import { useI18n } from '../../../controllers/LocaleContext';

export interface GalleryHeaderProps {
  onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const GalleryHeader: React.FC<GalleryHeaderProps> = ({ onScrollTo }) => {
  const { t } = useI18n();

  return (
    <div className="section-head section-head__row" data-reveal>
      <div>
        <span className="eyebrow">{t('common.gallery')}</span>
        <h2>
          {t('gallery.heading1')}
          <br />
          {t('gallery.heading2')}
        </h2>
      </div>
      <a className="link-arrow" href="#download" onClick={(e) => onScrollTo(e, '#download')}>
        {t('gallery.badge')}
        <ArrowRightIcon />
      </a>
    </div>
  );
};
