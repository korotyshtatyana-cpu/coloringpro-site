import React from 'react';
import { FooterBrand } from './FooterBrand';
import { FooterLinksColumn } from './FooterLinksColumn';
import { FooterBottom } from './FooterBottom';
import { PageRoute } from '../../../models/LegalDocumentModel';
import { NavigationModel } from '../../../models/NavigationModel';
import { useI18n } from '../../../controllers/LocaleContext';

export interface FooterProps {
  onNavigateRoute?: (route: PageRoute, e: React.MouseEvent) => void;
  onScrollToSection?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateRoute, onScrollToSection }) => {
  const { t } = useI18n();
  const appLinks = [
    { label: t('common.gallery'), href: '#gallery' },
    { label: t('common.features'), href: '#features' },
    { label: t('common.howItWorks'), href: '#how' },
    { label: t('common.faq'), href: '#faq' },
  ];

  const docLinks = [
    { label: t('common.privacyPolicy'), route: 'privacy' as PageRoute },
    { label: t('common.termsOfUse'), route: 'terms' as PageRoute },
    { label: t('common.deleteAccount'), route: 'delete-account' as PageRoute },
  ];

  const contactLinks = [
    { label: t('common.writeToUs'), href: `mailto:${NavigationModel.contactEmail}` },
    { label: t('common.googlePlay'), href: NavigationModel.googlePlayUrl },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-grid">
          <FooterBrand />
          <FooterLinksColumn
            title={t('footer.app')}
            links={appLinks}
            onScrollTo={onScrollToSection}
          />
          <FooterLinksColumn
            title={t('footer.documents')}
            links={docLinks}
            onNavigate={onNavigateRoute}
          />
          <FooterLinksColumn title={t('footer.contact')} links={contactLinks} />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};
