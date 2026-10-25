'use client';

import React from 'react';
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

  return (
    <article
      className={`overflow-hidden rounded-lg border bg-card transition-[border-color] duration-500 ease-out ${
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
        className="grid transition-[grid-template-rows] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="border-t border-border px-5 pb-5 pt-4 transition-opacity duration-700 ease-out md:px-6 md:pb-6"
            style={{
              opacity: isExpanded ? 1 : 0,
              transitionDelay: isExpanded ? '180ms' : '0ms',
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
    </article>
  );
}
