import React from 'react';
import { useI18n } from '../../../controllers/LocaleContext';

export const QuoteSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="container">
        <div className="quote-card" data-reveal>
          <span className="quote-card__mark">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 20c-4-2.5-7-5.5-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 3.5-3 6.5-7 9z" />
            </svg>
          </span>
          <blockquote>{t('quote.text')}</blockquote>
          <p>{t('quote.author')}</p>
          <img className="quote-card__logo" src="assets/logo.svg" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
