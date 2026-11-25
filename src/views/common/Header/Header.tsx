import React from 'react';
import { Brand } from './Brand';
import { NavLinks } from './NavLinks';
import { NavCta } from './NavCta';
import { NavToggle } from './NavToggle';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { NavigationControllerState } from '../../../controllers/useNavigationController';

export interface HeaderProps {
  navController: NavigationControllerState;
  onBrandClick?: (e: React.MouseEvent) => void;
}

export const Header: React.FC<HeaderProps> = ({ navController, onBrandClick }) => {
  const { isMenuOpen, toggleMenu, scrollToSection } = navController;

  return (
    <header className="site-header">
      <div className={`nav-shell ${isMenuOpen ? 'is-open' : ''}`} id="navShell">
        <Brand onClick={onBrandClick} />
        <NavLinks onLinkClick={scrollToSection} />
        <NavCta onLinkClick={scrollToSection} />
        <LanguageSwitcher />
        <NavToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>
    </header>
  );
};
