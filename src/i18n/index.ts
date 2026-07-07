import { zh } from './zh';
import { en } from './en';

export type Locale = 'zh' | 'en';

export const translations = {
  zh,
  en,
};

export const defaultLocale: Locale = 'zh';

export function getBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return defaultLocale;
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith('zh')) return 'zh';
  if (lang.startsWith('en')) return 'en';
  return defaultLocale;
}

export function getStoredLocale(): Locale | null {
  if (typeof localStorage === 'undefined') return null;
  const stored = localStorage.getItem('locale');
  if (stored === 'zh' || stored === 'en') return stored;
  return null;
}

export function setStoredLocale(locale: Locale): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('locale', locale);
  }
}

export function getCurrentLocale(): Locale {
  return getStoredLocale() || getBrowserLocale();
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

export type Translation = typeof zh;
