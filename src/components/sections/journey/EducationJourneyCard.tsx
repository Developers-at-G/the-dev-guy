'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';
import type { Education } from '@/data/education';

interface EducationJourneyCardProps {
  education: Education;
  isActive: boolean;
  isExpanded: boolean;
}

export function EducationJourneyCard({
  education,
  isActive,
  isExpanded,
}: EducationJourneyCardProps) {
  const { t } = useLanguage();

  return (
    <article
      className={`overflow-hidden rounded-lg border bg-card transition-[border-color] duration-500 ease-out ${
        isActive ? 'border-foreground/40' : 'border-border'
      }`}
    >
      <div className="flex items-start gap-4 p-5 md:p-6">
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
            {education.description && (
              <p className="text-ds-sm leading-relaxed text-muted-foreground">
                {education.description}
              </p>
            )}
            {education.achievements && education.achievements.length > 0 && (
              <div className="mt-4 border-t border-border pt-4">
                <p className="mb-3 text-ds-xs font-semibold uppercase tracking-wider text-foreground">
                  {t('education.key_achievements', 'common')}
                </p>
                <ul className="space-y-2">
                  {education.achievements.map((ach, i) => (
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
