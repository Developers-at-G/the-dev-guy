'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../app/context/LanguageContext';

const easeOut = [0.16, 1, 0.3, 1] as const;

export const FloatingContactButton: React.FC = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const openedAtEnd = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const contact = document.getElementById('contact');
      if (!contact) {
        setAtEnd(false);
        return;
      }

      const rect = contact.getBoundingClientRect();
      const nearContact = rect.top < window.innerHeight * 0.7 && rect.bottom > 60;
      setAtEnd(nearContact);

      if (nearContact && !openedAtEnd.current) {
        openedAtEnd.current = true;
        setIsExpanded(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    {
      label: t('contact.email', 'common'),
      href: 'mailto:gueye.amadou1996@gmail.com',
    },
    {
      label: t('contact.linkedin', 'common'),
      href: 'https://www.linkedin.com/in/abdalah-amadou-gueye/',
    },
    {
      label: t('contact.github', 'common'),
      href: 'https://github.com/abdallah96',
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden items-center gap-3 sm:flex">
      <motion.button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        animate={
          atEnd
            ? { boxShadow: '0 0 0 6px color-mix(in srgb, var(--primary) 14%, transparent)' }
            : { boxShadow: '0 8px 24px color-mix(in srgb, var(--foreground) 12%, transparent)' }
        }
        transition={{ duration: 0.5, ease: easeOut }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        aria-expanded={isExpanded}
        aria-label={t('contact.lets_connect', 'common')}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.svg
              key="close"
              initial={{ opacity: 0, rotate: -40 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 40 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="message"
              initial={{ opacity: 0, rotate: 40 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -40 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {!isExpanded && (
          <motion.span
            key="label"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="whitespace-nowrap rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
          >
            {t('contact.lets_connect', 'common')}
          </motion.span>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="links"
            initial={{ opacity: 0, x: -16, width: 0 }}
            animate={{ opacity: 1, x: 0, width: 'auto' }}
            exit={{ opacity: 0, x: -12, width: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="flex overflow-hidden"
          >
            <div className="flex items-center gap-2 pl-1">
              {contactOptions.map((option, index) => (
                <motion.a
                  key={option.label}
                  href={option.href}
                  target={option.href.startsWith('http') ? '_blank' : undefined}
                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.08, duration: 0.4, ease: easeOut }}
                  className="whitespace-nowrap rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-foreground/35"
                >
                  {option.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
