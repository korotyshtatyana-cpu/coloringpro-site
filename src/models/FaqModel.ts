import { PageRoute } from './LegalDocumentModel';
import { Translate, TranslationKey } from './LocaleModel';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  /** Optional link rendered after the answer text. */
  answerLink?: {
    route: PageRoute;
    label: string;
  };
}

const ITEM_IDS = [1, 2, 3, 4, 5, 6, 7] as const;

export class FaqModel {
  static getItems(t: Translate): FaqItem[] {
    return ITEM_IDS.map((number) => ({
      id: `faq-${number}`,
      question: t(`faq.${number}.question` as TranslationKey),
      answer: t(`faq.${number}.answer` as TranslationKey),
      ...(number === 7
        ? {
            answerLink: {
              route: 'delete-account' as PageRoute,
              label: t('faq.7.link'),
            },
          }
        : {}),
    }));
  }
}
