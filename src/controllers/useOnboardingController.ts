import { useState, useCallback, useMemo } from 'react';
import { OnboardingModel, OnboardingSlide } from '../models/OnboardingModel';
import { Translate } from '../models/LocaleModel';

export interface OnboardingControllerState {
  currentIndex: number;
  totalSlides: number;
  currentSlide: OnboardingSlide;
  direction: 'prev' | 'next';
  isFirst: boolean;
  isLast: boolean;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}

export function useOnboardingController(t: Translate): OnboardingControllerState {
  const slides = useMemo(() => OnboardingModel.getSlides(t), [t]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'prev' | 'next'>('next');

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.min(Math.max(index, 0), slides.length - 1);
      setCurrentIndex((prev) => {
        if (clamped !== prev) {
          setDirection(clamped > prev ? 'next' : 'prev');
        }
        return clamped;
      });
    },
    [slides.length],
  );

  const next = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prev = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  return {
    currentIndex,
    totalSlides: slides.length,
    currentSlide: slides[currentIndex],
    direction,
    isFirst: currentIndex === 0,
    isLast: currentIndex === slides.length - 1,
    next,
    prev,
    goTo,
  };
}
