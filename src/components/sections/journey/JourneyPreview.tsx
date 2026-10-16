'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';
import { ChevronDownIcon } from '@/components/icons';
import type { CareerExperience } from '@/data/career';
import type { Education } from '@/data/education';
import { getInitials } from './types';

interface JourneyPreviewProps {
  careerData: CareerExperience[];
  educationData: Education[];
  currentRole: CareerExperience | null;
  masterDegree: Education | undefined;
  onOpen: () => void;
}

export function JourneyPreview({
  careerData,
  educationData,
  currentRole,
  masterDegree,
  onOpen,
}: JourneyPreviewProps) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full rounded-lg border border-border bg-card p-6 text-left transition-colors duration-normal hover:border-foreground/30 sm:p-8 md:p-10"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {t('journey.title', 'common')}
      </h2>
      <p className="mt-2 text-lg font-medium text-foreground/80 group-hover:text-foreground">
        {t('journey.discover', 'common')}
      </p>
      {(currentRole || masterDegree) && (
        <p className="mt-2 text-sm text-muted-foreground">
          {currentRole && (
            <span>
              {currentRole.position} at {currentRole.company}
              {masterDegree ? ' · ' : ''}
            </span>
          )}
          {masterDegree && (
            <span>
              {masterDegree.degree}, {masterDegree.field}
            </span>
          )}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {careerData.map((exp) => (
          <span
            key={exp.id}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2.5 py-1 text-ds-xs font-medium text-muted-foreground"
          >
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted text-[9px] font-bold">
              {getInitials(exp.company)}
            </span>
            {exp.company}
          </span>
        ))}
        {educationData.map((edu) => (
          <span
            key={edu.id}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2.5 py-1 text-ds-xs font-medium text-muted-foreground"
          >
            {edu.image ? (
              <span className="relative h-4 w-4 shrink-0 overflow-hidden rounded-full bg-muted">
                <Image src={edu.image} alt="" width={16} height={16} className="h-full w-full object-cover" />
              </span>
            ) : (
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted text-[9px] font-bold">
                {getInitials(edu.institution)}
              </span>
            )}
            {edu.institution}
          </span>
        ))}
      </div>

      <motion.span
        className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
        initial={false}
        whileHover={{ x: 4 }}
      >
        <span>{t('journey.expand_label', 'common')}</span>
        <ChevronDownIcon />
      </motion.span>
    </button>
  );
}
