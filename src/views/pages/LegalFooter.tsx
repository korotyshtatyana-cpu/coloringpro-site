import React from 'react';
import { PageRoute } from '../../models/LegalDocumentModel';
import { useI18n } from '../../controllers/LocaleContext';

export interface LegalFooterProps {
  onNavigateRoute: (route: PageRoute, e: React.MouseEvent) => void;
}

export const LegalFooter: React.FC<LegalFooterProps> = ({ onNavigateRoute }) => {
  const { t } = useI18n();

  return (
    <footer className="legal-footer">
      <span>{t('footer.copyright')}</span>
      {' · '}
      <a href="privacy.html" onClick={(e) => onNavigateRoute('privacy', e)}>
        {t('common.privacyPolicy')}
      </a>
      {' · '}
      <a href="terms.html" onClick={(e) => onNavigateRoute('terms', e)}>
        {t('common.termsOfUse')}
      </a>
      {' · '}
      <a href="delete-account.html" onClick={(e) => onNavigateRoute('delete-account', e)}>
        {t('common.deleteAccount')}
      </a>
    </footer>
  );
};
