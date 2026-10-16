'use client';

import React, { useContext } from 'react';
import { LanguageContext } from '../app/context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    return (
      <div
        className="h-9 w-11 rounded-lg border border-border bg-secondary"
        aria-hidden
      />
    );
  }

  const { language, toggleLanguage } = context;

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex h-9 min-w-[2.75rem] items-center justify-center rounded-lg border border-border bg-background px-2 text-ds-xs font-medium tracking-wide text-foreground transition-colors duration-fast hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      {language === 'en' ? 'EN' : 'FR'}
    </button>
  );
};

export default LanguageToggle;
