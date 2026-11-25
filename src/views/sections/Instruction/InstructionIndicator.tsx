import React from 'react';
import { useI18n } from '../../../controllers/LocaleContext';

export interface InstructionIndicatorProps {
  count: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

export const InstructionIndicator: React.FC<InstructionIndicatorProps> = ({
  count,
  currentIndex,
  onSelect,
}) => {
  const { t } = useI18n();

  return (
    <div className="instruction-indicator" role="tablist" aria-label={t('instruction.ariaSteps')}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={index === currentIndex}
          aria-label={t('instruction.ariaStep').replace('{index}', String(index + 1))}
          className={`instruction-indicator__dot ${
            index === currentIndex ? 'instruction-indicator__dot--active' : ''
          }`}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
};
