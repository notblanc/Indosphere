import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage } from '../types';
import { COMPREHENSIVE_TRANSLATIONS } from '../data/translationsData';

export interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    es: string;
  };
}

export const UI_TRANSLATIONS: Translations = {
  ...COMPREHENSIVE_TRANSLATIONS
};

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem('living_canvas_lang');
    if (saved === 'en' || saved === 'hi' || saved === 'es') {
      return saved as SupportedLanguage;
    }
    return 'en';
  });

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('living_canvas_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const translation = UI_TRANSLATIONS[key];
    if (translation && translation[language]) {
      return translation[language];
    }
    if (fallback) return fallback;
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
