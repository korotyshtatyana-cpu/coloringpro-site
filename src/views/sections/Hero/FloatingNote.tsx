import React from 'react';
import { PencilIcon } from '../../common/Icons/PencilIcon';
import { useI18n } from '../../../controllers/LocaleContext';

export const FloatingNote: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="floating-note">
      <span className="floating-note__icon">
        <PencilIcon />
      </span>
      <span>
        <strong>{t('hero.note.title')}</strong>
        <small>{t('hero.note.subtitle')}</small>
      </span>
    </div>
  );
};
