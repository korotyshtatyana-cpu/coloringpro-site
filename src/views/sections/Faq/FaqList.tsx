import React from 'react';
import { FaqModel } from '../../../models/FaqModel';
import { FaqItemView } from './FaqItemView';
import { FaqControllerState } from '../../../controllers/useFaqController';
import { PageRoute } from '../../../models/LegalDocumentModel';
import { useI18n } from '../../../controllers/LocaleContext';

export interface FaqListProps {
  faqController: FaqControllerState;
  onNavigateRoute?: (route: PageRoute, e: React.MouseEvent) => void;
}

export const FaqList: React.FC<FaqListProps> = ({ faqController, onNavigateRoute }) => {
  const { t } = useI18n();
  const { isOpen, toggleItem } = faqController;

  return (
    <div className="faq-list" data-reveal style={{ '--delay': '80ms' } as React.CSSProperties}>
      {FaqModel.getItems(t).map((item) => (
        <FaqItemView
          key={item.id}
          item={item}
          isOpen={isOpen(item.id)}
          onToggle={toggleItem}
          onNavigateRoute={onNavigateRoute}
        />
      ))}
    </div>
  );
};
