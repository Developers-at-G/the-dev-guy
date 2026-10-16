'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';
import { ChevronDownIcon } from '@/components/icons';
import type { Education } from '@/data/education';

interface EducationJourneyCardProps {
  education: Education;
  isExpanded: boolean;
  isActive: boolean;
  onToggle: () => void;
}

export function EducationJourneyCard({
  education,
  isExpanded,
  isActive,
  onToggle,
}: EducationJourneyCardProps) {
  const { t } = useLanguage();
  const achievementsRef = useRef<HTMLDivElement>(null);
  const achievementsInView = useInView(achievementsRef, { amount: 0.2, once: true });

  return (
    <article
      className={`relative overflow-hidden rounded-lg border bg-card shadow-sm transition-colors ${
        isActive ? 'border-foreground/40' : 'border-border hover:border-foreground/25'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 rounded-lg p-5 text-left transition-colors hover:bg-accent md:p-6"
      >
        {education.image && (
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-muted sm:h-14 sm:w-14">
            <Image src={education.image} alt="" fill className="object-cover" sizes="56px" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="mb-0.5 text-ds-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t('education.title', 'common')}
          </p>
          <h3 className="text-ds-lg font-semibold text-foreground">{education.degree}</h3>
          <p className="mt-0.5 text-ds-sm font-medium text-muted-foreground">
            {education.institution}
          </p>
          <p className="mt-1 text-ds-xs text-muted-foreground">
            {education.period} · {education.location}
          </p>
        </div>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.35 }}
          className="shrink-0 text-muted-foreground"
        >
          <ChevronDownIcon />
        </motion.span>
      </button>

      <div
        className="grid overflow-hidden border-t border-border transition-[grid-template-rows] duration-500"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="min-h-0">
          <div
            className="px-5 pb-5 pt-2 transition-opacity duration-300 md:px-6 md:pb-6"
            style={{
              opacity: isExpanded ? 1 : 0,
              transitionDelay: isExpanded ? '120ms' : '0ms',
            }}
          >
            {education.description && (
              <p className="text-ds-sm leading-relaxed text-muted-foreground">
                {education.description}
              </p>
            )}
            {education.achievements && education.achievements.length > 0 && (
              <div ref={achievementsRef} className="mt-4 border-t border-border pt-4">
                <p className="mb-3 text-ds-xs font-semibold uppercase tracking-wider text-foreground">
                  {t('education.key_achievements', 'common')}
                </p>
                <motion.ul
                  initial="hidden"
                  animate={achievementsInView ? 'visible' : 'hidden'}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                  }}
                  className="space-y-2"
                >
                  {education.achievements.map((ach, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="flex items-start gap-2 text-ds-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                      {ach}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
