import React, { useEffect, useRef, useState } from 'react';
import { OnboardingSlide as OnboardingSlideData } from '../../../models/OnboardingModel';
import { InstructionSlide } from './InstructionSlide';

const ANIMATION_MS = 400;

export interface InstructionSliderProps {
  slide: OnboardingSlideData;
  totalSlides: number;
  direction: 'prev' | 'next';
}

/**
 * Renders the active slide and, during transitions, the outgoing one:
 * the old slide exits to the direction side while the new one enters
 * from the opposite side.
 */
export const InstructionSlider: React.FC<InstructionSliderProps> = ({
  slide,
  totalSlides,
  direction,
}) => {
  const [rendered, setRendered] = useState(slide);
  const [exiting, setExiting] = useState<OnboardingSlideData | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Adjust state during render (React's recommended pattern for this case):
  // when the incoming slide differs, keep the old one for the exit animation.
  // Compare text as well as id so switching language refreshes the content.
  if (slide.id !== rendered.id || slide.title !== rendered.title || slide.text !== rendered.text) {
    setRendered(slide);
    setExiting(rendered);
  }

  useEffect(() => {
    if (!exiting) {
      return;
    }
    timeoutRef.current = setTimeout(() => setExiting(null), ANIMATION_MS);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [exiting]);

  return (
    <div className="instruction__viewport">
      {exiting && (
        <InstructionSlide
          slide={exiting}
          totalSlides={totalSlides}
          className={`instruction-slide--exit instruction-slide--exit-${direction}`}
        />
      )}
      <InstructionSlide
        slide={rendered}
        totalSlides={totalSlides}
        className={exiting ? `instruction-slide--enter-${direction}` : ''}
      />
    </div>
  );
};
