'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import type { CareerExperience } from '@/data/career';
import { careerTypeStyles } from './types';

interface CareerJourneyCardProps {
  experience: CareerExperience;
  typeLabels: Record<string, string>;
  isActive: boolean;
  isExpanded: boolean;
}

export function CareerJourneyCard({
  experience,
  typeLabels,
  isActive,
  isExpanded,
}: CareerJourneyCardProps) {
  const { t } = useLanguage();
  const style = careerTypeStyles[experience.type] ?? careerTypeStyles.work;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-lg border bg-card transition-colors ${
        isActive ? 'border-foreground/40' : 'border-border'
      }`}
    >
      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between md:p-6">
        <div>
          <h3 className="text-ds-lg font-semibold text-foreground">{experience.position}</h3>
          <p className="mt-0.5 text-ds-sm font-medium text-foreground/80">{experience.company}</p>
          <p className="mt-1 text-ds-xs text-muted-foreground">
            {experience.period} · {experience.location}
          </p>
        </div>
        <Badge variant="outline" className={`shrink-0 text-ds-xs font-medium ${style}`}>
          {typeLabels[experience.type] ?? experience.type}
        </Badge>
      </div>

      <div
        className="grid overflow-hidden border-t border-border transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="min-h-0">
          <div
            className="px-5 pb-5 pt-4 transition-opacity duration-300 md:px-6 md:pb-6"
            style={{
              opacity: isExpanded ? 1 : 0,
              transitionDelay: isExpanded ? '100ms' : '0ms',
            }}
          >
            {experience.description && (
              <p className="text-ds-sm leading-relaxed text-muted-foreground">
                {experience.description}
              </p>
            )}
            {experience.technologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
            {experience.achievements.length > 0 && (
              <div className="mt-4 border-t border-border pt-4">
                <p className="mb-3 text-ds-xs font-semibold uppercase tracking-wider text-foreground">
                  {t('career.key_achievements', 'common')}
                </p>
                <ul className="space-y-2">
                  {experience.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-ds-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
