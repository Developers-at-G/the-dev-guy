'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';
import { Button } from '@/components/ui/Button';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { navigationItems } from '@/data/navigation';

export default function Navigation() {
  const { t } = useLanguage();
  const {
    activeSection,
    isMenuOpen,
    scrolled,
    scrollToSection,
    toggleMenu,
    closeMenu,
  } = useNavigation({ items: navigationItems });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-foreground hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            AG
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              const className = `rounded-lg px-3 py-2 text-sm font-medium capitalize transition-colors ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`;

              if (item.href.startsWith('/')) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={className}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {t(`nav.${item.label.toLowerCase()}`, 'common')}
                  </Link>
                );
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={className}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {t(`nav.${item.label.toLowerCase()}`, 'common')}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                const className = `rounded-lg px-3 py-2 text-left text-sm font-medium capitalize transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`;

                if (item.href.startsWith('/')) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={className}
                      onClick={closeMenu}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {t(`nav.${item.label.toLowerCase()}`, 'common')}
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={className}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {t(`nav.${item.label.toLowerCase()}`, 'common')}
                  </button>
                );
              })}
              <div className="mt-3 flex items-center justify-end border-t border-border pt-3">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
