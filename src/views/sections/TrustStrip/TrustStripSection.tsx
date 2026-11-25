import React from 'react';
import { TrustItem } from './TrustItem';
import { PhoneIcon } from '../../common/Icons/PhoneIcon';
import { VectorIcon } from '../../common/Icons/VectorIcon';
import { CheckCircleIcon } from '../../common/Icons/CheckCircleIcon';
import { useI18n } from '../../../controllers/LocaleContext';

export const TrustStripSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="trust-strip">
      <div className="trust-strip__inner">
        <span className="trust-strip__label">{t('trust.label')}</span>
        <ul className="trust-strip__items">
          <TrustItem icon={<PhoneIcon />} text="iPhone & iPad" />
          <TrustItem
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="4" y="5" width="16" height="14" rx="4" />
                <path d="M8 15v-2M16 15v-2M8 9h.01M16 9h.01" />
              </svg>
            }
            text="Android"
          />
          <TrustItem icon={<VectorIcon />} text={t('trust.vector')} />
          <TrustItem icon={<CheckCircleIcon />} text={t('trust.noAds')} />
        </ul>
      </div>
    </div>
  );
};
