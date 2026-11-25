import { Translate, TranslationKey } from './LocaleModel';

export type FeatureIconType = 'vector' | 'brush' | 'palette' | 'adjust' | 'cloud' | 'export';

export interface FeatureItem {
  id: string;
  icon: FeatureIconType;
  title: string;
  description: string;
  delayMs?: number;
}

interface FeatureDefinition {
  id: FeatureIconType;
  delayMs?: number;
}

const FEATURES: FeatureDefinition[] = [
  { id: 'vector' },
  { id: 'brush', delayMs: 60 },
  { id: 'palette', delayMs: 120 },
  { id: 'adjust' },
  { id: 'cloud', delayMs: 60 },
  { id: 'export', delayMs: 120 },
];

export class FeatureModel {
  static getItems(t: Translate): FeatureItem[] {
    return FEATURES.map(({ id, delayMs }) => ({
      id,
      icon: id,
      title: t(`feature.${id}.title` as TranslationKey),
      description: t(`feature.${id}.description` as TranslationKey),
      delayMs,
    }));
  }
}
