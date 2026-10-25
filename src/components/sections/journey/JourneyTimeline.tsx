'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
}: JourneyTimelineProps) {
  return (
    <motion.div
      ref={timelineRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="relative pt-2"
    >
      <div
        className="absolute bottom-0 left-6 top-0 w-px -translate-x-px bg-border md:left-1/2 md:-translate-x-1/2"
        aria-hidden
      />
      <div
        ref={fillLineRef}
        className="absolute left-6 top-0 w-0.5 origin-top -translate-x-px rounded-full bg-foreground transition-[height] duration-200 ease-out md:left-1/2 md:-translate-x-1/2"
        style={{ height: 0 }}
        aria-hidden
      />

      <div>
        {journeyItems.map((item, index) => {
          const isActive = index === activeIndex;
          const isExpanded = expandedIds.has(item.data.id);
          const isEducation = item.type === 'education';

          return (
            <div
              key={item.data.id}
              className="relative flex flex-col gap-6 pb-8 pt-6 md:flex-row md:items-stretch md:gap-8 md:pb-12 md:pt-10"
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              {index % 2 === 0 && <div className="hidden md:block md:flex-1" />}

              <div
                className={`max-w-xl flex-1 pl-12 md:pl-0 ${index % 2 === 1 ? 'md:order-first' : ''}`}
              >
                <div className="mb-2 flex items-center gap-2 md:hidden">
                  <span
                    className={`text-ds-xs font-semibold tabular-nums transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
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
                    isActive={isActive}
                    isExpanded={isExpanded}
                  />
                ) : (
                  <CareerJourneyCard
                    experience={item.data}
                    typeLabels={typeLabels}
                    isActive={isActive}
                    isExpanded={isExpanded}
                  />
                )}
              </div>

              <div
                ref={(el) => {
                  dotRefs.current[index] = el;
                }}
                className="pointer-events-none absolute left-6 top-[2.6rem] z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 md:left-1/2 md:top-[2.8rem]"
              >
                <motion.div
                  animate={{ scale: isActive ? 1.3 : 1 }}
                  transition={{ duration: 0.25 }}
                  className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-background shadow-sm ${
                    isActive ? 'bg-foreground' : 'bg-muted-foreground/50'
                  }`}
                />
                <span
                  className={`hidden select-none text-[10px] font-semibold tracking-widest tabular-nums transition-colors md:block ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {item.sortYear}
                </span>
              </div>

              {index % 2 === 1 && <div className="hidden md:block md:flex-1" />}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
