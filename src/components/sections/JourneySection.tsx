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

    const update = () => {
      // Focus line sits near upper-middle so the title under it owns the year/dot
      const focusY = window.innerHeight * 0.38;
      let activeIdx = 0;

      for (let i = 0; i < cards.length; i++) {
        const el = cards[i];
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        // Title band: card top is at/above focus → this item (or earlier) is current
        if (top <= focusY) activeIdx = i;
      }

      // If nothing has reached the focus line yet, keep first
      const firstTop = cards[0]?.getBoundingClientRect().top ?? 0;
      if (firstTop > focusY) activeIdx = 0;

      const clamped = Math.max(0, Math.min(activeIdx, journeyItems.length - 1));
      setActiveIndex(clamped);

      const id = journeyItems[clamped]?.data.id;
      if (id) {
        setExpandedIds((prev) => {
          if (prev.has(id)) return prev;
          const next = new Set(prev);
          next.add(id);
          return next;
        });
      }

      if (fillLineRef.current) {
        const fromH = getDocDotH(clamped);
        const nextIdx = clamped + 1;
        if (nextIdx >= journeyItems.length) {
          fillLineRef.current.style.height = `${Math.max(0, fromH)}px`;
          return;
        }

        const currentTop = cards[clamped]?.getBoundingClientRect().top ?? 0;
        const nextTop = cards[nextIdx]?.getBoundingClientRect().top ?? 0;
        const toH = getDocDotH(nextIdx);
        const range = Math.max(1, nextTop - currentTop);
        const progress = 1 - Math.max(0, Math.min(1, (nextTop - focusY) / range));
        fillLineRef.current.style.height = `${Math.max(0, fromH + (toH - fromH) * progress)}px`;
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
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
