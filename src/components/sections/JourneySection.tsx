'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { getCareerData } from '@/data/career';
import { getEducationData } from '@/data/education';
import { parseStartYear, type JourneyItem } from './journey/types';
import { JourneyPreview } from './journey/JourneyPreview';
import { JourneyTimeline } from './journey/JourneyTimeline';

export const JourneySection: React.FC = () => {
  const { translations } = useLanguage();
  const careerData = getCareerData(translations);
  const educationData = getEducationData(translations);

  const journeyItems = useMemo<JourneyItem[]>(() => {
    const career = careerData
      .map((data) => ({
        type: 'career' as const,
        data,
        sortYear: parseStartYear(data.period),
      }))
      .sort((a, b) => b.sortYear - a.sortYear);
    const education = educationData
      .map((data) => ({
        type: 'education' as const,
        data,
        sortYear: parseStartYear(data.period),
      }))
      .sort((a, b) => b.sortYear - a.sortYear);
    return [...career, ...education];
  }, [careerData, educationData]);

  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fillLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPanelOpen) {
      setExpandedIds(new Set());
      if (fillLineRef.current) fillLineRef.current.style.height = '0px';
    }
  }, [isPanelOpen]);

  useEffect(() => {
    if (!isPanelOpen) return;
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
        if (id) setExpandedIds((prev) => new Set(prev).add(id));
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
  }, [isPanelOpen, journeyItems]);

  const firstCareer = journeyItems.find((i) => i.type === 'career');
  const currentRole = firstCareer?.type === 'career' ? firstCareer.data : null;
  const masterDegree = educationData.find((e) => e.id === 'master') ?? educationData[0];

  const toggleExpanded = (id: string) =>
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <Section id="career" variant={isPanelOpen ? 'muted' : 'default'} className="relative overflow-hidden">
      <Container className="relative z-10">
        {!isPanelOpen ? (
          <JourneyPreview
            careerData={careerData}
            educationData={educationData}
            currentRole={currentRole}
            masterDegree={masterDegree}
            onOpen={() => setIsPanelOpen(true)}
          />
        ) : (
          <JourneyTimeline
            journeyItems={journeyItems}
            activeIndex={activeIndex}
            expandedIds={expandedIds}
            typeLabels={translations.career.types}
            timelineRef={timelineRef}
            fillLineRef={fillLineRef}
            cardRefs={cardRefs}
            dotRefs={dotRefs}
            onClose={() => setIsPanelOpen(false)}
            onToggleExpanded={toggleExpanded}
          />
        )}
      </Container>
    </Section>
  );
};
