import React from 'react';
import { OnboardingSlide as OnboardingSlideData } from '../../../models/OnboardingModel';

export interface InstructionSlideProps {
  slide: OnboardingSlideData;
  totalSlides: number;
  className?: string;
}

export const InstructionSlide: React.FC<InstructionSlideProps> = ({
  slide,
  totalSlides,
  className = '',
}) => (
  <div className={`instruction-slide ${className}`}>
    <div className="instruction-slide__media">
      <img src={slide.imageSrc} alt={slide.title} loading="lazy" />
      <span className="instruction-slide__counter">
        {slide.number} / {String(totalSlides).padStart(2, '0')}
      </span>
    </div>
    <div className="instruction-slide__body">
      <h3>{slide.title}</h3>
      <p>{slide.text}</p>
    </div>
  </div>
);
