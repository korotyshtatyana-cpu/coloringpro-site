import React from 'react';
import { MenuIcon } from '../Icons/MenuIcon';
import { CloseIcon } from '../Icons/CloseIcon';
import { useI18n } from '../../../controllers/LocaleContext';

export interface NavToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NavToggle: React.FC<NavToggleProps> = ({ isOpen, onToggle }) => {
  const { t } = useI18n();

  return (
    <button
      className="nav-toggle"
      id="navToggle"
      type="button"
      aria-label={isOpen ? t('nav.toggleClose') : t('nav.toggleOpen')}
      aria-expanded={isOpen}
      aria-controls="navLinks"
      onClick={onToggle}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};
