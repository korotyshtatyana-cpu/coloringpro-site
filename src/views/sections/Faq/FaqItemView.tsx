import React from 'react';
import { FaqItem } from '../../../models/FaqModel';
import { PageRoute } from '../../../models/LegalDocumentModel';

export interface FaqItemViewProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
  onNavigateRoute?: (route: PageRoute, e: React.MouseEvent) => void;
}

export const FaqItemView: React.FC<FaqItemViewProps> = ({
  item,
  isOpen,
  onToggle,
  onNavigateRoute,
}) => (
  <details className="faq-item" open={isOpen}>
    <summary
      onClick={(e) => {
        e.preventDefault();
        onToggle(item.id);
      }}
    >
      {item.question}
    </summary>
    <div className="faq-item__body">
      {item.answer}
      {item.answerLink && (
        <>
          {' '}
          <a
            href={`${item.answerLink.route}.html`}
            onClick={(e) => onNavigateRoute && onNavigateRoute(item.answerLink!.route, e)}
          >
            {item.answerLink.label}
          </a>
        </>
      )}
    </div>
  </details>
);
