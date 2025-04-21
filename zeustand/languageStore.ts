import { create } from 'zustand';
import en from '@/locales/en.json';
import nl from '@/locales/nl.json';

interface LanguageState {
  language: 'en' | 'nl';
  translations: any;
  switchLanguage: (lang: 'en' | 'nl') => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en',
  translations: en as any,
  switchLanguage: (lang: 'en' | 'nl') =>
    set({
      language: lang,
      translations: lang === 'en' ? (en as any) : (nl as any),
    }),
}));

export default useLanguageStore;
