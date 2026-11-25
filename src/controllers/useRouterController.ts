import { useState, useEffect, useCallback } from 'react';
import { PageRoute, LegalDocumentModel } from '../models/LegalDocumentModel';

export interface RouterControllerState {
  currentRoute: PageRoute;
  navigateTo: (route: PageRoute, event?: React.MouseEvent) => void;
}

export function useRouterController(): RouterControllerState {
  const getInitialRoute = (): PageRoute => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;

    // Check path or hash route
    let route = LegalDocumentModel.getRouteFromPath(pathname);
    if (route === 'home' && hash.startsWith('#/')) {
      route = LegalDocumentModel.getRouteFromPath(hash.replace('#/', ''));
    }
    return route;
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = useCallback((route: PageRoute, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    window.history.pushState({}, '', LegalDocumentModel.getPathFromRoute(route));
  }, []);

  return {
    currentRoute,
    navigateTo,
  };
}
