'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';

function ContactSection() {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
        </svg>
      ),
      title: t('contact.email', 'common'),
      value: 'gueye.amadou1996@gmail.com',
      href: 'mailto:gueye.amadou1996@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: t('contact.linkedin', 'common'),
      value: '/in/abdallah-amadou-gueye',
      href: 'https://www.linkedin.com/in/abdalah-amadou-gueye/',
    },
    {
      icon: (
        <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: t('contact.github', 'common'),
      value: '@abdallah96',
      href: 'https://github.com/abdallah96',
    },
  ];

  return (
    <Section id="contact" variant="featured">
      <Container>
        <SectionHeader
          title={t('contact.title', 'common')}
          description={t('contact.description', 'common')}
        />

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-gap-block sm:gap-4 md:gap-6">
          {contactMethods.map((method, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block w-full sm:w-auto sm:min-w-[200px] sm:max-w-[280px]"
                onFocus={() => setExpandedIndex(index)}
                onBlur={() => setExpandedIndex(null)}
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                initial={false}
                animate={{ scale: isExpanded ? 1.02 : 1 }}
                transition={{ type: 'spring', damping: 25, stiffness: 400 }}
              >
                <motion.div
                  className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 sm:p-5 overflow-hidden transition-shadow duration-normal hover:shadow-xl hover:border-primary/30 hover:bg-card"
                  layout
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {method.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-ds-sm font-semibold text-foreground truncate">{method.title}</p>
                      <AnimatePresence mode="wait">
                        {isExpanded ? (
                          <motion.p
                            key="value"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-ds-sm font-mono text-primary truncate mt-0.5"
                          >
                            {method.value}
                          </motion.p>
                        ) : (
                          <motion.p
                            key="hint"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.2 }}
                            className="text-ds-xs text-muted-foreground truncate mt-0.5"
                          >
                            {t('contact.open_message', 'common')}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className="shrink-0 text-muted-foreground/60">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default function Contact() {
  return <ContactSection />;
}
