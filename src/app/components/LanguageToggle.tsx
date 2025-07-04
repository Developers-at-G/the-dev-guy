'use client';
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const context = useContext(LanguageContext);
  
  // If context is not available (during SSR), render a placeholder
  if (!context) {
    return (
      <div className="relative inline-flex h-10 w-16 items-center rounded-full bg-gradient-to-r from-primary/20 to-accent/20 p-1">
        <div className="absolute inset-0 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20" />
        <div className="relative z-10 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg" />
      </div>
    );
  }

  const { language, toggleLanguage } = context;

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex h-10 w-16 items-center rounded-full bg-gradient-to-r from-primary/20 to-accent/20 p-1 transition-all duration-300 hover:from-primary/30 hover:to-accent/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      {/* Toggle Track */}
      <div className="absolute inset-0 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20" />
      
      {/* Toggle Handle */}
      <div
        className={`relative z-10 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg transition-all duration-300 ease-out ${
          language === 'fr' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {/* English Flag/Text */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            language === 'fr' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        >
          <span className="text-xs font-bold text-primary-foreground">EN</span>
        </div>
        
        {/* French Flag/Text */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            language === 'en' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        >
          <span className="text-xs font-bold text-primary-foreground">FR</span>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 rounded-full opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-red-500/20 to-blue-600/20 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 via-white/20 to-blue-400/20 rounded-full" />
      </div>
    </button>
  );
};

export default LanguageToggle; 