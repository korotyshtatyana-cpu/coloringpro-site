import { useState, useCallback } from 'react';

export interface NavigationControllerState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  scrollToSection: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function useNavigationController(): NavigationControllerState {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const scrollToSection = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith('#')) {
        event.preventDefault();
        closeMenu();
        const targetId = href.substring(1);
        if (!targetId) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    [closeMenu],
  );

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    scrollToSection,
  };
}
