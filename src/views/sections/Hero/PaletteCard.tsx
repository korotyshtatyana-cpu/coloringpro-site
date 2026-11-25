import React from 'react';
import { useI18n } from '../../../controllers/LocaleContext';

export const PaletteCard: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="palette-card">
      <div className="palette-card__title">
        <span>{t('hero.palette.color')}</span>
        <span>{t('hero.palette.lens')}</span>
      </div>
      <div className="color-wheel"></div>
      <div className="palette-card__hex">
        <span>#A0AA8E</span>
        <i></i>
      </div>
    </div>
  );
};
