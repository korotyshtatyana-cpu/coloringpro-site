import enUS from './locales/en-US.json';
import ruRU from './locales/ru-RU.json';
import beBY from './locales/be-BY.json';
import deDE from './locales/de-DE.json';
import esES from './locales/es-ES.json';
import frFR from './locales/fr-FR.json';
import ptBR from './locales/pt-BR.json';

export const LOCALES = ['en-US', 'ru-RU', 'be-BY', 'de-DE', 'es-ES', 'fr-FR', 'pt-BR'] as const;

export type Locale = (typeof LOCALES)[number];
export type TranslationKey = keyof typeof enUS;
export type Translate = (key: TranslationKey) => string;

export interface LocaleOption {
  code: Locale;
  nativeName: string;
}

const STORAGE_KEY = 'coloringpro.locale';
const QUERY_KEY = 'lang';
const DEFAULT_LOCALE: Locale = 'en-US';

const DICTIONARIES: Record<Locale, Record<TranslationKey, string>> = {
  'en-US': enUS,
  'ru-RU': ruRU,
  'be-BY': beBY,
  'de-DE': deDE,
  'es-ES': esES,
  'fr-FR': frFR,
  'pt-BR': ptBR,
};

const NATIVE_NAMES: Record<Locale, string> = {
  'en-US': 'English',
  'ru-RU': 'Русский',
  'be-BY': 'Беларуская',
  'de-DE': 'Deutsch',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'pt-BR': 'Português',
};

const LANGUAGE_PREFIXES: Record<string, Locale> = {
  en: 'en-US',
  ru: 'ru-RU',
  be: 'be-BY',
  de: 'de-DE',
  es: 'es-ES',
  fr: 'fr-FR',
  pt: 'pt-BR',
};

export class LocaleModel {
  static readonly defaultLocale = DEFAULT_LOCALE;
  static readonly storageKey = STORAGE_KEY;

  static isLocale(value: string | null | undefined): value is Locale {
    return !!value && (LOCALES as readonly string[]).includes(value);
  }

  /** Resolves a BCP 47 tag or locale code to one of the supported locales. */
  static fromLanguageTag(tag: string | null | undefined): Locale | null {
    if (!tag) {
      return null;
    }
    const normalized = tag.replace('_', '-').toLowerCase();
    const exact = LOCALES.find((locale) => locale.toLowerCase() === normalized);
    if (exact) {
      return exact;
    }
    return LANGUAGE_PREFIXES[normalized.split('-')[0]] ?? null;
  }

  /** Picks the locale from URL override, saved choice, then browser languages. */
  static detectInitialLocale(): Locale {
    const queryLocale = new URLSearchParams(window.location.search).get(QUERY_KEY);
    const fromQuery = LocaleModel.fromLanguageTag(queryLocale);
    if (fromQuery) {
      return fromQuery;
    }

    const saved = LocaleModel.fromLanguageTag(window.localStorage.getItem(STORAGE_KEY));
    if (saved) {
      return saved;
    }

    const browserLanguages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];
    for (const language of browserLanguages) {
      const detected = LocaleModel.fromLanguageTag(language);
      if (detected) {
        return detected;
      }
    }
    return DEFAULT_LOCALE;
  }

  static getTranslator(locale: Locale): Translate {
    const dictionary = DICTIONARIES[locale];
    return (key) => dictionary[key] ?? DICTIONARIES[DEFAULT_LOCALE][key] ?? key;
  }

  static getLanguageOptions(): LocaleOption[] {
    return LOCALES.map((code) => ({ code, nativeName: NATIVE_NAMES[code] }));
  }

  static getHtmlLang(locale: Locale): string {
    return locale;
  }
}
