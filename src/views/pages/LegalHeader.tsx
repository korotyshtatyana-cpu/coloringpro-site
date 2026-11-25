import React from 'react';
import { Brand } from '../common/Header/Brand';
import { LanguageSwitcher } from '../common/LanguageSwitcher/LanguageSwitcher';
import { ChevronLeftIcon } from '../common/Icons/ChevronLeftIcon';
import { PageRoute } from '../../models/LegalDocumentModel';
import { useI18n } from '../../controllers/LocaleContext';

export interface LegalHeaderProps {
  onNavigateHome: (route: PageRoute, e: React.MouseEvent) => void;
}

export const LegalHeader: React.FC<LegalHeaderProps> = ({ onNavigateHome }) => {
  const { t } = useI18n();

  return (
    <header className="legal-header">
      <div className="legal-header__inner">
        <Brand onClick={(e) => onNavigateHome('home', e)} />
        <div className="legal-header__actions">
          <LanguageSwitcher />
          <a className="legal-back" href="index.html" onClick={(e) => onNavigateHome('home', e)}>
            <ChevronLeftIcon />
            {t('common.backToSite')}
          </a>
        </div>
      </div>
    </header>
  );
};
