import React, { createContext, useContext } from 'react';
import { LocaleControllerState } from './useLocaleController';

const LocaleContext = createContext<LocaleControllerState | null>(null);

export interface LocaleProviderProps {
  value: LocaleControllerState;
  children: React.ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ value, children }) => (
  <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
);

export function useI18n(): LocaleControllerState {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useI18n must be used inside LocaleProvider');
  }
  return context;
}
