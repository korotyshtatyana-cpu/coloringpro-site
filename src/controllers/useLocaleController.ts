import { useCallback, useEffect, useMemo, useState } from 'react';
import { Locale, LocaleModel, LocaleOption, Translate } from '../models/LocaleModel';

export interface LocaleControllerState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translate;
  options: LocaleOption[];
}

export function useLocaleController(): LocaleControllerState {
  const [locale, setLocale] = useState<Locale>(() => LocaleModel.detectInitialLocale());

  useEffect(() => {
    document.documentElement.lang = LocaleModel.getHtmlLang(locale);
    window.localStorage.setItem(LocaleModel.storageKey, locale);
  }, [locale]);

  const handleSetLocale = useCallback((next: Locale) => {
    setLocale(next);
    // Keep the URL override in sync so a reload preserves the chosen language
    // even when the visitor originally arrived with ?lang=...
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(window.history.state, '', url);
  }, []);

  const t = useMemo(() => LocaleModel.getTranslator(locale), [locale]);
  const options = useMemo(() => LocaleModel.getLanguageOptions(), []);

  return { locale, setLocale: handleSetLocale, t, options };
}
