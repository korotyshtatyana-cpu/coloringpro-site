import React from 'react';
import { Header } from '../common/Header/Header';
import { HeroSection } from '../sections/Hero/HeroSection';
import { TrustStripSection } from '../sections/TrustStrip/TrustStripSection';
import { GallerySection } from '../sections/Gallery/GallerySection';
import { FeaturesSection } from '../sections/Features/FeaturesSection';
import { InstructionSection } from '../sections/Instruction/InstructionSection';
import { QuoteSection } from '../sections/Quote/QuoteSection';
import { FaqSection } from '../sections/Faq/FaqSection';
import { DownloadSection } from '../sections/Download/DownloadSection';
import { Footer } from '../common/Footer/Footer';
import { SkipLink } from '../common/SkipLink';
import { NavigationControllerState } from '../../controllers/useNavigationController';
import { GalleryControllerState } from '../../controllers/useGalleryController';
import { FaqControllerState } from '../../controllers/useFaqController';
import { OnboardingControllerState } from '../../controllers/useOnboardingController';
import { PageRoute } from '../../models/LegalDocumentModel';

export interface HomePageProps {
  navController: NavigationControllerState;
  galleryController: GalleryControllerState;
  faqController: FaqControllerState;
  onboardingController: OnboardingControllerState;
  onNavigateRoute: (route: PageRoute, e: React.MouseEvent) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  navController,
  galleryController,
  faqController,
  onboardingController,
  onNavigateRoute,
}) => {
  return (
    <>
      <SkipLink />
      <Header
        navController={navController}
        onBrandClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      <main id="main">
        <HeroSection onScrollTo={navController.scrollToSection} />
        <TrustStripSection />
        <GallerySection
          galleryController={galleryController}
          onScrollTo={navController.scrollToSection}
        />
        <FeaturesSection />
        <InstructionSection onboardingController={onboardingController} />
        <QuoteSection />
        <FaqSection faqController={faqController} onNavigateRoute={onNavigateRoute} />
        <DownloadSection />
      </main>
      <Footer onNavigateRoute={onNavigateRoute} onScrollToSection={navController.scrollToSection} />
    </>
  );
};
