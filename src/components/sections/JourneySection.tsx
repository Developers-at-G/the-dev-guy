'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { getCareerData } from '@/data/career';
import { getEducationData } from '@/data/education';
import { parseStartYear, type JourneyItem } from './journey/types';
import { JourneyTimeline } from './journey/JourneyTimeline';

export const JourneySection: React.FC = () => {
  const { t, translations } = useLanguage();
  const careerData = getCareerData(translations);
  const educationData = getEducationData(translations);

  const journeyItems: JourneyItem[] = [
    ...careerData
      .map((data) => ({
        type: 'career' as const,
        data,
        sortYear: parseStartYear(data.period),
      }))
      .sort((a, b) => b.sortYear - a.sortYear),
    ...educationData
      .map((data) => ({
        type: 'education' as const,
        data,
        sortYear: parseStartYear(data.period),
      }))
      .sort((a, b) => b.sortYear - a.sortYear),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fillLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardRefs.current;
    if (cards.length === 0) return;

    const getDocDotH = (idx: number): number => {
      const timeline = timelineRef.current;
      const dot = dotRefs.current[idx];
      if (!timeline || !dot) return 0;
      const tTop = timeline.getBoundingClientRect().top + window.scrollY;
      const dRect = dot.getBoundingClientRect();
      return dRect.top + window.scrollY + dRect.height / 2 - tTop;
    };

    const update = (expand: boolean) => {
      const halfScreen = window.innerHeight / 2;
      const cardTops = cards.map((el) => el?.getBoundingClientRect().top ?? Infinity);

      const inZone = cardTops
        .map((top, i) => ({ top, i }))
        .filter(({ top }) => top <= halfScreen)
        .sort((a, b) => b.top - a.top);

      const activeIdx = inZone.length
        ? inZone[0].i
        : cardTops.some((r) => r > 0)
          ? 0
          : journeyItems.length - 1;
      const clamped = Math.max(0, Math.min(activeIdx, journeyItems.length - 1));
      setActiveIndex(clamped);

      if (expand) {
        const id = journeyItems[clamped]?.data.id;
        if (id) {
          setExpandedIds((prev) => {
            if (prev.has(id)) return prev;
            const next = new Set(prev);
            next.add(id);
            return next;
          });
        }
      }

      if (fillLineRef.current) {
        if (!inZone.length) {
          fillLineRef.current.style.height = '0px';
          return;
        }
        const fromH = getDocDotH(clamped);
        const nextIdx = clamped + 1;
        if (nextIdx >= journeyItems.length) {
          fillLineRef.current.style.height = `${Math.max(0, fromH)}px`;
          return;
        }
        const toH = getDocDotH(nextIdx);
        const currentTop = cardTops[clamped];
        const nextTop = cardTops[nextIdx];
        const range = Math.max(1, nextTop - currentTop);
        const progress = 1 - Math.max(0, Math.min(1, (nextTop - halfScreen) / range));
        fillLineRef.current.style.height = `${Math.max(0, fromH + (toH - fromH) * progress)}px`;
      }
    };

    update(false);
    const onScroll = () => update(true);
    const onResize = () => update(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [journeyItems.length]);

  return (
    <Section id="career" variant="muted">
      <Container>
        <SectionHeader
          title={t('career.title', 'common')}
          subtitle={t('career.subtitle', 'common')}
          description={t('career.description', 'common')}
        />
        <JourneyTimeline
          journeyItems={journeyItems}
          activeIndex={activeIndex}
          expandedIds={expandedIds}
          typeLabels={translations.career.types}
          timelineRef={timelineRef}
          fillLineRef={fillLineRef}
          cardRefs={cardRefs}
          dotRefs={dotRefs}
        />
      </Container>
    </Section>
  );
};
