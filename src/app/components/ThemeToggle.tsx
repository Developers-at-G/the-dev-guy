'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);
  
  // If context is not available (during SSR), render a placeholder
  if (!context) {
    return (
      <div className="relative inline-flex h-10 w-20 items-center rounded-full bg-gradient-to-r from-primary/20 to-accent/20 p-1">
        <div className="absolute inset-0 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20" />
        <div className="relative z-10 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg" />
      </div>
    );
  }

  const { theme, toggleTheme } = context;

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-20 items-center rounded-full bg-gradient-to-r from-primary/20 to-accent/20 p-1 transition-all duration-300 hover:from-primary/30 hover:to-accent/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="absolute inset-0 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20" />
      
      <div
        className={`relative z-10 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg transition-all duration-300 ease-out ${
          theme === 'light' ? 'translate-x-10' : 'translate-x-0'
        }`}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            theme === 'light' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        >
          <svg
            className="h-4 w-4 text-primary-foreground"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        >
          <svg
            className="h-4 w-4 text-primary-foreground"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-full opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/20 to-red-500/20 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-indigo-500/20 rounded-full" />
      </div>
    </button>
  );
};

export default ThemeToggle; 