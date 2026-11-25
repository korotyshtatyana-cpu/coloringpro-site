import React from 'react';
import { useI18n } from '../../../controllers/LocaleContext';

export interface BrandProps {
  onClick?: (e: React.MouseEvent) => void;
}

export const Brand: React.FC<BrandProps> = ({ onClick }) => {
  const { t } = useI18n();

  return (
    <a
      className="brand"
      href="index.html"
      aria-label={`Coloring PRO — ${t('common.home')}`}
      onClick={onClick}
    >
      <img src="assets/logo.svg" alt="" />
      <span className="brand__name">
        Coloring <span>PRO</span>
      </span>
    </a>
  );
};
