'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations } from '@/lib/i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
}
const LanguageContext = createContext<LanguageContextType>({ lang: 'vi', setLang: () => {}, toggleLang: () => {}, t: translations.vi });
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('vi');
  useEffect(() => {
    // Legacy preference only. New guide-library copy is always English.
    try {
      const saved = localStorage.getItem('howdoi_lang');
      if (saved === 'vi' || saved === 'en') { setLangState(saved); return; }
    } catch { /* Storage may be unavailable; reading the site must still work. */ }
    setLangState(navigator.language.toLowerCase().startsWith('en') ? 'en' : 'vi');
  }, []);
  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try { localStorage.setItem('howdoi_lang', newLang); } catch { /* Keep the in-memory preference. */ }
  };
  return <LanguageContext.Provider value={{ lang, setLang, toggleLang: () => setLang(lang === 'vi' ? 'en' : 'vi'), t: translations[lang] }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
