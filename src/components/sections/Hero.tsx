'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../app/context/LanguageContext';
import { getProfileData } from '../../data/profile';
import { Container } from '../ui/Container';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

// Keywords to highlight — tech in primary, value in accent
const KEYWORDS_PRIMARY = ['React', 'Next.js', 'TypeScript'];
const KEYWORDS_ACCENT = ['component architecture', 'performance', 'products'];

function highlightKeywords(displayed: string) {
  const keywords = [...KEYWORDS_ACCENT, ...KEYWORDS_PRIMARY].sort((a, b) => b.length - a.length);
  const escaped = keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = displayed.split(regex);
  return parts.map((part, i) => {
    const lower = part.toLowerCase();
    if (KEYWORDS_ACCENT.some((k) => k.toLowerCase() === lower)) {
      return (
        <span key={i} className="text-accent font-semibold bg-accent/10 px-1.5 py-0.5 rounded">
          {part}
        </span>
      );
    }
    if (KEYWORDS_PRIMARY.some((k) => k.toLowerCase() === lower)) {
      return (
        <span key={i} className="text-primary font-semibold bg-primary/10 px-1.5 py-0.5 rounded">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function Typewriter({
  text,
  speed = 40,
  className = '',
  start = true,
}: {
  text: string;
  speed?: number;
  className?: string;
  start?: boolean;
}) {
  const [displayed, setDisplayed] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!start) return;
    setDisplayed('');
    setIsComplete(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, start]);

  if (!start) {
    return (
      <p className={className}>
        <span className="inline-block w-0.5 h-[1em] align-baseline bg-primary animate-cursor-blink" aria-hidden />
      </p>
    );
  }

  return (
    <p className={className}>
      <span>{highlightKeywords(displayed)}</span>
      <span
        className={`inline-block w-0.5 h-[1em] align-baseline bg-primary ml-0.5 ${isComplete ? 'animate-cursor-blink' : ''}`}
        aria-hidden
      />
    </p>
  );
}

export const Hero: React.FC = () => {
  const { translations, t } = useLanguage();
  const profileData = getProfileData(translations);
  const typewriterRef = useRef(null);
  const typewriterInView = useInView(typewriterRef, { amount: 0.3, once: true });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-background scroll-mt-20"
    >
      <Container className="relative z-10 py-10 sm:py-14 lg:py-16">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Picture — reveal on scroll: scale + fade */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeScale}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-border bg-muted/20 shadow-lg shrink-0"
          >
            <Image
              src={profileData.image}
              alt={profileData.name}
              width={176}
              height={176}
              sizes="176px"
              className="w-full h-full object-cover object-top"
              priority
            />
          </motion.div>

          {/* Name — reveal: fade up */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight"
          >
            {profileData.name}
          </motion.h1>

          {/* Subtitle — reveal: fade up */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-lg sm:text-xl text-muted-foreground"
          >
            {profileData.subtitle}
          </motion.p>

          {/* Typewriter — reveal container, then type when in view */}
          <motion.div
            ref={typewriterRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 min-h-[5rem] w-full max-w-xl mx-auto flex justify-center"
          >
            <Typewriter
              text={profileData.description}
              speed={32}
              start={typewriterInView}
              className="text-base sm:text-lg text-muted-foreground/95 leading-relaxed font-mono"
            />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-200"
            >
              {t('common.view_my_work', 'common')}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-muted/50 transition-all duration-200"
            >
              {t('common.get_in_touch', 'common')}
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
