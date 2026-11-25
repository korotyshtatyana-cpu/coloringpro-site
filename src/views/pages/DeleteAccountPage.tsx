import React from 'react';
import { LegalHeader } from './LegalHeader';
import { LegalFooter } from './LegalFooter';
import { PageRoute } from '../../models/LegalDocumentModel';
import { NavigationModel } from '../../models/NavigationModel';
import { useI18n } from '../../controllers/LocaleContext';

export interface DeleteAccountPageProps {
  onNavigateRoute: (route: PageRoute, e: React.MouseEvent) => void;
}

export const DeleteAccountPage: React.FC<DeleteAccountPageProps> = ({ onNavigateRoute }) => {
  const { t } = useI18n();
  const [contactBefore, contactAfter = ''] = t('legal.delete.contact').split('{email}');

  return (
    <>
      <LegalHeader onNavigateHome={onNavigateRoute} />
      <main className="legal-wrap">
        <article className="legal-card">
          <span className="legal-meta">{t('legal.delete.meta')}</span>
          <h1>{t('legal.delete.title')}</h1>
          <p>
            <strong>{t('legal.delete.appName')}</strong> Coloring PRO
            <br />
            <strong>{t('legal.delete.developer')}</strong> Tatsiana Karatysh
          </p>

          <h2>{t('legal.delete.how')}</h2>
          <p>{t('legal.delete.intro')}</p>
          <ol>
            <li>{t('legal.delete.step1')}</li>
            <li dangerouslySetInnerHTML={{ __html: t('legal.delete.step2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('legal.delete.step3') }} />
            <li>{t('legal.delete.step4')}</li>
          </ol>

          <h2>{t('legal.delete.what')}</h2>
          <p>{t('legal.delete.whatIntro')}</p>
          <ul>
            <li>{t('legal.delete.data1')}</li>
            <li>{t('legal.delete.data2')}</li>
            <li>{t('legal.delete.data3')}</li>
            <li>{t('legal.delete.data4')}</li>
            <li>{t('legal.delete.data5')}</li>
          </ul>

          <h2>{t('legal.delete.retentionTitle')}</h2>
          <p>{t('legal.delete.retention')}</p>

          <p className="note">
            {contactBefore}
            <a href="mailto:korotyshtatyana@gmail.com">{NavigationModel.contactEmail}</a>
            {contactAfter}
          </p>
        </article>
      </main>
      <LegalFooter onNavigateRoute={onNavigateRoute} />
    </>
  );
};
