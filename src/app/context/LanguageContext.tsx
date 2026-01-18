'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, getTranslation, getTranslations, Translations } from '../../lib/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
  t: (key: string, namespace?: keyof Translations, params?: Record<string, string | number>) => string;
  translations: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    const defaultTranslations = getTranslations('en');
    return {
      language: 'en' as Language,
      toggleLanguage: () => {},
      setLanguage: () => {},
      t: (key: string, namespace?: keyof Translations, params?: Record<string, string | number>) => {
        if (!namespace) {
          const parts = key.split('.');
          if (parts.length >= 2) {
            const [ns, ...rest] = parts;
            return getTranslation('en', ns as keyof Translations, rest.join('.'), params);
          }
        }
        return key;
      },
      translations: defaultTranslations,
    };
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    const initialLanguage = savedLanguage || 'en';
    setLanguageState(initialLanguage);
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  const t = (key: string, namespace?: keyof Translations, params?: Record<string, string | number>): string => {
    if (namespace) {
      return getTranslation(language, namespace, key, params);
    }
    
    const parts = key.split('.');
    if (parts.length >= 2) {
      const [ns, ...rest] = parts;
      return getTranslation(language, ns as keyof Translations, rest.join('.'), params);
    }
    
    return key;
  };

  const translations = getTranslations(language);

  if (!mounted) {
    const defaultTranslations = getTranslations('en');
    return (
      <LanguageContext.Provider value={{ 
        language: 'en', 
        toggleLanguage: () => {}, 
        setLanguage: () => {}, 
        t: (key: string) => key,
        translations: defaultTranslations,
      }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
