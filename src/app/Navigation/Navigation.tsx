'use client';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../../hooks/useNavigation';
import { Button } from '../../components/ui/Button';
import { ResumeDownload } from '../../components/ResumeDownload';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';
import { navigationItems } from '../../data/navigation';

function NavigationSection() {
  const { t } = useLanguage();
  const {
    activeSection,
    isMenuOpen,
    scrolled,
    scrollToSection,
    toggleMenu,
    closeMenu
  } = useNavigation({ items: navigationItems });

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            AG
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isExternalLink = item.href.startsWith('/');
              
              if (isExternalLink) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                    onClick={closeMenu}
                  >
                    {t(`nav.${item.label.toLowerCase()}`)}
                  </Link>
                );
              }
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {t(`nav.${item.label.toLowerCase()}`)}
                </button>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <ResumeDownload variant="outline" size="sm" source="Navigation Header" />
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const isExternalLink = item.href.startsWith('/');
                
                if (isExternalLink) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="px-3 py-2 rounded-lg text-left text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                      onClick={closeMenu}
                    >
                      {t(`nav.${item.label.toLowerCase()}`)}
                    </Link>
                  );
                }
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-lg text-left text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {t(`nav.${item.label.toLowerCase()}`)}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-border mt-3">
                <div className="flex items-center justify-between">
                  <ResumeDownload variant="outline" size="sm" source="Mobile Navigation" />
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function Navigation() {
  return <NavigationSection />;
}
