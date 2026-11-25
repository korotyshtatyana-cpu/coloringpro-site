import React from 'react';
import { useI18n } from '../../../controllers/LocaleContext';

export interface NavCtaProps {
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const NavCta: React.FC<NavCtaProps> = ({ onLinkClick }) => {
  const { t } = useI18n();

  return (
    <a
      className="btn btn--primary btn--small nav-cta"
      href="#download"
      onClick={(e) => onLinkClick(e, '#download')}
    >
      {t('common.download')}
    </a>
  );
};
