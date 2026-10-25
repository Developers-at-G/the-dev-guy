'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../../app/context/LanguageContext';
import { getProfileData } from '../../data/profile';
import { Container } from '../ui/Container';

function WelcomeTypewriter({ text, speed = 72 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i += 1;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <p className="max-w-2xl text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-snug">
      {displayed}
      <span
        className={`ml-0.5 inline-block h-[0.9em] w-0.5 align-[-0.1em] bg-foreground ${
          done ? 'animate-pulse' : ''
        }`}
        aria-hidden
      />
    </p>
  );
}

export const Hero: React.FC = () => {
  const { t, translations } = useLanguage();
  const profileData = getProfileData(translations);
  const welcome = t('profile.welcome', 'common');

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background scroll-mt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 45% at 50% -10%, var(--muted), transparent)',
        }}
      />

      <Container className="relative z-10 flex min-h-[42vh] items-end pb-10 pt-28 sm:min-h-[48vh] sm:pb-14 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <WelcomeTypewriter text={welcome} />
        </motion.div>
      </Container>

      <Container className="relative z-10 pb-20 sm:pb-28">
        <div className="grid items-center gap-10 border-t border-border pt-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-lg border border-border bg-muted/30 sm:max-w-[300px] lg:mx-0 lg:max-w-none"
          >
            <Image
              src={profileData.image}
              alt={profileData.name}
              fill
              sizes="(max-width: 1024px) 300px, 420px"
              className="object-cover object-top"
              priority
            />
            <motion.div
              className="pointer-events-none absolute inset-0 bg-background"
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              style={{ originY: 0 }}
              aria-hidden
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {profileData.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
              {profileData.subtitle}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground/95 sm:text-lg">
              {profileData.about.bio}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profileData.about.experience}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {profileData.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-ds-xs text-foreground/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
