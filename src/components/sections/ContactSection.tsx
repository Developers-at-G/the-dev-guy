'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';
import { Container } from '@/components/ui/Container';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative flex min-h-[45vh] items-center scroll-mt-24 py-section md:min-h-[55vh] md:py-section-lg"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(circle at 25% 60%, var(--muted) 0%, transparent 50%)',
        }}
      />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-ds-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t('contact.subtitle', 'common')}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t('contact.lets_connect', 'common')}
          </h2>
          <p className="mt-4 text-ds-base leading-relaxed text-muted-foreground sm:text-ds-lg">
            {t('contact.description', 'common')}
          </p>
          <p className="mt-6 text-ds-sm text-muted-foreground sm:hidden">
            <a
              href="mailto:gueye.amadou1996@gmail.com"
              className="text-foreground underline-offset-4 hover:underline"
            >
              gueye.amadou1996@gmail.com
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
