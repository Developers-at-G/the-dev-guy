'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';
import type { JourneyItem } from './types';
import { EducationJourneyCard } from './EducationJourneyCard';
import { CareerJourneyCard } from './CareerJourneyCard';

interface JourneyTimelineProps {
  journeyItems: JourneyItem[];
  activeIndex: number;
  expandedIds: Set<string>;
  typeLabels: Record<string, string>;
  timelineRef: React.RefObject<HTMLDivElement>;
  fillLineRef: React.RefObject<HTMLDivElement>;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  dotRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  onClose: () => void;
  onToggleExpanded: (id: string) => void;
}

export function JourneyTimeline({
  journeyItems,
  activeIndex,
  expandedIds,
  typeLabels,
  timelineRef,
  fillLineRef,
  cardRefs,
  dotRefs,
  onClose,
  onToggleExpanded,
}: JourneyTimelineProps) {
  const { t } = useLanguage();
  const activeItem = journeyItems[activeIndex];

  return (
    <>
      <motion.button
        type="button"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="fixed right-4 top-24 z-50 flex items-center gap-2 rounded-lg border border-border bg-card/95 px-3 py-2 text-ds-sm font-medium text-muted-foreground shadow-sm backdrop-blur-md transition-colors hover:border-foreground/30 hover:text-foreground sm:right-6"
        aria-label={t('common.close', 'common')}
      >
        <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span className="hidden sm:inline">{t('common.close', 'common')}</span>
      </motion.button>

      <motion.div
        layout
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="sticky top-20 z-10 mb-6 rounded-lg border border-border bg-card/95 px-5 py-4 shadow-sm backdrop-blur-md md:px-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-foreground" aria-hidden />
            {activeItem && (
              <>
                <div className="min-w-0">
                  <p className="truncate text-ds-sm font-semibold text-foreground">
                    {activeItem.type === 'career'
                      ? activeItem.data.position
                      : activeItem.data.degree}
                  </p>
                  <p className="truncate text-ds-xs text-muted-foreground">
                    {activeItem.type === 'career'
                      ? activeItem.data.company
                      : activeItem.data.institution}
                  </p>
                </div>
                <span className="hidden shrink-0 text-ds-xs text-muted-foreground sm:inline">
                  {activeItem.data.period}
                </span>
              </>
            )}
          </div>
          <p className="hidden text-ds-xs text-muted-foreground sm:block">
            {t('journey.scroll_hint', 'common')}
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={timelineRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative pt-8 md:pt-12"
      >
        <div
          className="absolute bottom-0 left-6 top-0 w-px -translate-x-px bg-border md:left-1/2 md:-translate-x-1/2"
          aria-hidden
        />
        <div
          ref={fillLineRef}
          className="absolute left-6 top-0 w-0.5 origin-top -translate-x-px rounded-full bg-foreground md:left-1/2 md:-translate-x-1/2"
          style={{ height: 0 }}
          aria-hidden
        />

        <div>
          {journeyItems.map((item, index) => {
            const isUpcoming = index > activeIndex;
            const isActive = index === activeIndex;
            const isEducation = item.type === 'education';

            return (
              <div
                key={item.data.id}
                className="relative flex flex-col gap-6 pt-6 pb-6 md:flex-row md:items-stretch md:gap-8 md:pt-10 md:pb-10"
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                {index % 2 === 0 && <div className="hidden md:block md:flex-1" />}

                <motion.div
                  animate={{ opacity: isUpcoming ? 0.45 : 1 }}
                  transition={{ duration: 0.35 }}
                  className={`max-w-xl flex-1 pl-12 md:pl-0 ${index % 2 === 1 ? 'md:order-first' : ''}`}
                >
                  <div className="mb-2 flex items-center gap-2 md:hidden">
                    <span className="text-ds-xs font-semibold tabular-nums text-muted-foreground">
                      {item.sortYear}
                    </span>
                    <span className="text-ds-xs text-muted-foreground/40">·</span>
                    <span className="text-ds-xs font-medium capitalize text-muted-foreground">
                      {isEducation ? 'Education' : item.data.type}
                    </span>
                  </div>

                  {item.type === 'education' ? (
                    <EducationJourneyCard
                      education={item.data}
                      isExpanded={expandedIds.has(item.data.id)}
                      isActive={isActive}
                      onToggle={() => onToggleExpanded(item.data.id)}
                    />
                  ) : (
                    <CareerJourneyCard
                      experience={item.data}
                      typeLabels={typeLabels}
                      isExpanded={expandedIds.has(item.data.id)}
                      isActive={isActive}
                      onToggle={() => onToggleExpanded(item.data.id)}
                    />
                  )}
                </motion.div>

                <div
                  ref={(el) => {
                    dotRefs.current[index] = el;
                  }}
                  className="pointer-events-none absolute left-6 top-[2.6rem] z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 md:left-1/2 md:top-[2.8rem]"
                >
                  <motion.div
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-background bg-foreground shadow-sm"
                  />
                  <span className="hidden select-none text-[10px] font-semibold tracking-widest text-muted-foreground tabular-nums md:block">
                    {item.sortYear}
                  </span>
                </div>

                {index % 2 === 1 && <div className="hidden md:block md:flex-1" />}
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
