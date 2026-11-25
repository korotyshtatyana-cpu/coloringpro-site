import React, { useEffect } from 'react';
import { LocaleProvider } from './controllers/LocaleContext';
import { useLocaleController } from './controllers/useLocaleController';
import { useNavigationController } from './controllers/useNavigationController';
import { useGalleryController } from './controllers/useGalleryController';
import { useFaqController } from './controllers/useFaqController';
import { useOnboardingController } from './controllers/useOnboardingController';
import { useScrollRevealController } from './controllers/useScrollRevealController';
import { useRouterController } from './controllers/useRouterController';
import { HomePage } from './views/pages/HomePage';
import { PrivacyPage } from './views/pages/PrivacyPage';
import { TermsPage } from './views/pages/TermsPage';
import { DeleteAccountPage } from './views/pages/DeleteAccountPage';

export const App: React.FC = () => {
  const router = useRouterController();
  const i18n = useLocaleController();
  const { locale, t } = i18n;
  const navController = useNavigationController();
  const galleryController = useGalleryController(locale, t);
  const faqController = useFaqController();
  const onboardingController = useOnboardingController(t);
  useScrollRevealController(router.currentRoute);

  useEffect(() => {
    document.body.classList.toggle('legal-body', router.currentRoute !== 'home');
  }, [router.currentRoute]);

  useEffect(() => {
    const metaKey =
      router.currentRoute === 'home'
        ? 'home'
        : router.currentRoute === 'delete-account'
          ? 'delete'
          : router.currentRoute;
    document.title = t(`meta.${metaKey}.title` as Parameters<typeof t>[0]);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t(`meta.${metaKey}.description` as Parameters<typeof t>[0]));

    if (router.currentRoute === 'home') {
      document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute('content', t('meta.home.ogTitle'));
      document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute('content', t('meta.home.ogDescription'));
    }
  }, [router.currentRoute, t]);

  const content = (() => {
    switch (router.currentRoute) {
      case 'privacy':
        return <PrivacyPage onNavigateRoute={router.navigateTo} />;
      case 'terms':
        return <TermsPage onNavigateRoute={router.navigateTo} />;
      case 'delete-account':
        return <DeleteAccountPage onNavigateRoute={router.navigateTo} />;
      default:
        return (
          <HomePage
            navController={navController}
            galleryController={galleryController}
            faqController={faqController}
            onboardingController={onboardingController}
            onNavigateRoute={router.navigateTo}
          />
        );
    }
  })();

  return <LocaleProvider value={i18n}>{content}</LocaleProvider>;
};
