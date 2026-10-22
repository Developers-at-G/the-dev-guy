'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

interface UseNavigationOptions {
  items: NavigationItem[];
}

export const useNavigation = ({ items }: UseNavigationOptions) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname?.startsWith('/blog')) {
      setActiveSection('blog');
      return;
    }
    if (pathname?.toLowerCase().startsWith('/projects')) {
      setActiveSection('projects');
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = '';
      for (const item of items) {
        if (item.href.startsWith('/')) continue;
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) {
          current = item.id;
        }
      }
      setActiveSection(current || items[0]?.id || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, pathname]);

  useEffect(() => {
    const onScrollChrome = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScrollChrome, { passive: true });
    onScrollChrome();
    return () => window.removeEventListener('scroll', onScrollChrome);
  }, []);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (pathname !== '/') {
        window.location.href = `/#${sectionId}`;
        setIsMenuOpen(false);
        return;
      }
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: Math.max(elementTop - offset, 0), behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    },
    [pathname]
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return {
    activeSection,
    isMenuOpen,
    scrolled,
    scrollToSection,
    toggleMenu,
    closeMenu,
  };
};
