import React from 'react';
import { FaqHeader } from './FaqHeader';
import { FaqList } from './FaqList';
import { FaqControllerState } from '../../../controllers/useFaqController';
import { PageRoute } from '../../../models/LegalDocumentModel';

export interface FaqSectionProps {
  faqController: FaqControllerState;
  onNavigateRoute?: (route: PageRoute, e: React.MouseEvent) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqController, onNavigateRoute }) => (
  <section className="section" id="faq">
    <div className="container">
      <div className="faq">
        <FaqHeader />
        <FaqList faqController={faqController} onNavigateRoute={onNavigateRoute} />
      </div>
    </div>
  </section>
);
