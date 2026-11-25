import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LocaleModel } from './LocaleModel';

describe('LocaleModel.fromLanguageTag', () => {
  it.each([
    ['en-US', 'en-US'],
    ['pt-BR', 'pt-BR'],
    ['ru', 'ru-RU'],
    ['de_DE', 'de-DE'],
    ['fr-CA', 'fr-FR'],
    ['es', 'es-ES'],
    ['be-BY', 'be-BY'],
  ])('resolves %s to %s', (tag, expected) => {
    expect(LocaleModel.fromLanguageTag(tag)).toBe(expected);
  });

  it.each([null, undefined, '', 'it-IT', 'zh'])('ignores unsupported tag %s', (tag) => {
    expect(LocaleModel.fromLanguageTag(tag)).toBeNull();
  });
});

describe('LocaleModel.detectInitialLocale', () => {
  let search: string;
  let savedLocale: string | null;

  beforeEach(() => {
    search = '';
    savedLocale = null;
    vi.stubGlobal('window', {
      location: {
        get search() {
          return search;
        },
      },
      localStorage: {
        getItem: (key: string) => (key === LocaleModel.storageKey ? savedLocale : null),
        setItem: () => undefined,
      },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('prefers the ?lang= URL parameter', () => {
    search = '?lang=de&utm_source=test';
    savedLocale = 'ru-RU';
    vi.stubGlobal('navigator', { languages: ['fr-FR'], language: 'fr-FR' });

    expect(LocaleModel.detectInitialLocale()).toBe('de-DE');
  });

  it('falls back to the saved choice', () => {
    savedLocale = 'pt-BR';
    vi.stubGlobal('navigator', { languages: ['es-ES'], language: 'es-ES' });

    expect(LocaleModel.detectInitialLocale()).toBe('pt-BR');
  });

  it('uses the first supported browser language', () => {
    vi.stubGlobal('navigator', { languages: ['it-IT', 'be-BY', 'en-US'], language: 'it-IT' });

    expect(LocaleModel.detectInitialLocale()).toBe('be-BY');
  });

  it('defaults to English when nothing matches', () => {
    vi.stubGlobal('navigator', { languages: ['it-IT'], language: 'it-IT' });

    expect(LocaleModel.detectInitialLocale()).toBe('en-US');
  });
});

describe('LocaleModel.getTranslator', () => {
  it('returns translated strings and falls back to English for missing keys', () => {
    const translate = LocaleModel.getTranslator('ru-RU');
    expect(translate('common.all')).toBe('Все');
    expect(translate('common.features')).toBe('Возможности');
  });
});
