import { Translate, TranslationKey } from './LocaleModel';

export interface OnboardingSlide {
  id: string;
  number: string;
  title: string;
  text: string;
  imageSrc: string;
}

const SLIDE_IDS = [
  'slide-01',
  'slide-02',
  'slide-03',
  'slide-04',
  'slide-05',
  'slide-06',
  'slide-07',
  'slide-08',
  'slide-09',
  'slide-10',
] as const;

export class OnboardingModel {
  /** Slides follow the site's order; titles and texts come from app locales. */
  static getSlides(t: Translate): OnboardingSlide[] {
    return SLIDE_IDS.map((id, index) => {
      const number = String(index + 1).padStart(2, '0');
      return {
        id,
        number,
        title: t(`onboarding.slide.${number}.title` as TranslationKey),
        text: t(`onboarding.slide.${number}.text` as TranslationKey),
        imageSrc: `assets/onboarding/${id}.webp`,
      };
    });
  }
}
