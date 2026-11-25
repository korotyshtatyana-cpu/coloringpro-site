import React from 'react';
import { HeroBadge } from './HeroBadge';
import { HeroActions } from './HeroActions';
import { HeroMeta } from './HeroMeta';
import { useI18n } from '../../../controllers/LocaleContext';

export interface HeroCopyProps {
  onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const HeroCopy: React.FC<HeroCopyProps> = ({ onScrollTo }) => {
  const { t } = useI18n();

  return (
    <div className="hero__copy">
      <HeroBadge />
      <h1>
        {t('hero.title1')}
        <span className="accent">{t('hero.title2')}</span>
      </h1>
      <p className="hero__lead">{t('hero.lead')}</p>
      <HeroActions onScrollTo={onScrollTo} />
      <HeroMeta />
    </div>
  );
};
