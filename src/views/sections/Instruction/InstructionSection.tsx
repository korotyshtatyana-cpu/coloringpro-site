import React from 'react';
import { InstructionHeader } from './InstructionHeader';
import { InstructionSlider } from './InstructionSlider';
import { InstructionIndicator } from './InstructionIndicator';
import { InstructionNavButton } from './InstructionNavButton';
import { OnboardingControllerState } from '../../../controllers/useOnboardingController';

export interface InstructionSectionProps {
  onboardingController: OnboardingControllerState;
}

export const InstructionSection: React.FC<InstructionSectionProps> = ({ onboardingController }) => {
  const { currentIndex, totalSlides, currentSlide, direction, isFirst, isLast, next, prev, goTo } =
    onboardingController;

  return (
    <section className="section" id="how">
      <div className="container">
        <InstructionHeader />

        <div className="instruction" data-reveal>
          <InstructionNavButton direction="prev" disabled={isFirst} onClick={prev} />

          <div className="instruction__card">
            <InstructionSlider
              slide={currentSlide}
              totalSlides={totalSlides}
              direction={direction}
            />
          </div>

          <InstructionNavButton direction="next" disabled={isLast} onClick={next} />
        </div>

        <InstructionIndicator count={totalSlides} currentIndex={currentIndex} onSelect={goTo} />
      </div>
    </section>
  );
};
