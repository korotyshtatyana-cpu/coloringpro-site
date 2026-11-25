import React from 'react';
import { ArrowRightIcon } from '../../common/Icons/ArrowRightIcon';
import { useI18n } from '../../../controllers/LocaleContext';

export interface HeroActionsProps {
  onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({ onScrollTo }) => {
  const { t } = useI18n();

  return (
    <div className="hero__actions">
      <a className="btn btn--primary" href="#gallery" onClick={(e) => onScrollTo(e, '#gallery')}>
        {t('hero.viewGallery')}
        <ArrowRightIcon />
      </a>
      <a className="btn btn--ghost" href="#features" onClick={(e) => onScrollTo(e, '#features')}>
        {t('common.features')}
      </a>
    </div>
  );
};
