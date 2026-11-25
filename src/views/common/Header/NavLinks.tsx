import React from 'react';
import { NavigationModel, NavLink as NavLinkType } from '../../../models/NavigationModel';
import { useI18n } from '../../../controllers/LocaleContext';

export interface NavLinksProps {
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick }) => {
  const { t } = useI18n();

  return (
    <nav className="nav-links" id="navLinks" aria-label={t('nav.ariaMain')}>
      {NavigationModel.getNavLinks(t).map((link: NavLinkType) => (
        <a
          key={link.href}
          className={link.isCta ? 'nav-links__cta' : undefined}
          href={link.href}
          onClick={(e) => onLinkClick(e, link.href)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};
