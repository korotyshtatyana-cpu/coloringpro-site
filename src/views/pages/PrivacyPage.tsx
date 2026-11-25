import React from 'react';
import { LegalHeader } from './LegalHeader';
import { LegalFooter } from './LegalFooter';
import { LegalDocumentModel, PageRoute } from '../../models/LegalDocumentModel';
import { useI18n } from '../../controllers/LocaleContext';

export interface PrivacyPageProps {
  onNavigateRoute: (route: PageRoute, e: React.MouseEvent) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigateRoute }) => {
  const { locale, t } = useI18n();
  const document = LegalDocumentModel.getDocument('privacy', locale, t);

  return (
    <>
      <LegalHeader onNavigateHome={onNavigateRoute} />
      <main className="legal-wrap">
        <article className="legal-card">
          <span className="legal-meta">{document?.meta}</span>
          <h1>{document?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: document?.html ?? '' }} />
        </article>
      </main>
      <LegalFooter onNavigateRoute={onNavigateRoute} />
    </>
  );
};
