import React from 'react';
import { ChevronLeftIcon } from '../../common/Icons/ChevronLeftIcon';
import { ChevronRightIcon } from '../../common/Icons/ChevronRightIcon';
import { useI18n } from '../../../controllers/LocaleContext';

export interface InstructionNavButtonProps {
  direction: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
}

export const InstructionNavButton: React.FC<InstructionNavButtonProps> = ({
  direction,
  disabled,
  onClick,
}) => {
  const { t } = useI18n();

  return (
    <button
      type="button"
      className="instruction-nav"
      aria-label={direction === 'prev' ? t('instruction.prev') : t('instruction.next')}
      disabled={disabled}
      onClick={onClick}
    >
      {direction === 'prev' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
};
