'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../app/context/LanguageContext';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { getCareerData } from '../../data/career';
import { getEducationData } from '../../data/education';
import type { CareerExperience } from '../../data/career';
import type { Education } from '../../data/education';

export type JourneyItem =
  | { type: 'education'; data: Education; sortYear: number }
  | { type: 'career'; data: CareerExperience; sortYear: number };

function parseStartYear(period: string): number {
  const match = period.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
}

function getInitials(name: string): string {
  return name
    .split(/[\s\-]+/)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const careerTypeStyles: Record<string, string> = {
  work: 'bg-primary/15 text-primary border-primary/30',
  internship: 'bg-accent/15 text-accent border-accent/30',
  freelance: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30',
};

const chipColors = [
  'bg-primary/10 text-primary border-primary/20',
  'bg-accent/10 text-accent border-accent/20',
  'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
];

export const JourneySection: React.FC = () => {
  const { t, translations } = useLanguage();
  const careerData = getCareerData(translations);
  const educationData = getEducationData(translations);

  const journeyItems = useMemo(() => {
    const career = careerData
      .map((data) => ({ type: 'career' as const, data, sortYear: parseStartYear(data.period) }))
      .sort((a, b) => b.sortYear - a.sortYear);
    const education = educationData
      .map((data) => ({ type: 'education' as const, data, sortYear: parseStartYear(data.period) }))
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

    // Returns the document-absolute height of dot[idx] center from the timeline top.
    // This value is constant regardless of scroll position.
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
        : cardTops.some((r) => r > 0) ? 0 : journeyItems.length - 1;
      const clamped = Math.max(0, Math.min(activeIdx, journeyItems.length - 1));
      setActiveIndex(clamped);

      if (expand) {
        const id = journeyItems[clamped]?.data.id;
        if (id) setExpandedIds((prev) => new Set(prev).add(id));
      }

      // Compute fill height: interpolate between dot[clamped] and dot[next]
      // based on how far the next card is from the half-screen trigger.
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
        const currentTop = cardTops[clamped];   // <= halfScreen
        const nextTop = cardTops[nextIdx];       // >= halfScreen (not yet active)
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

  const activeItem = journeyItems[activeIndex];
  const firstCareer = journeyItems.find((i) => i.type === 'career');
  const currentRole = firstCareer?.type === 'career' ? firstCareer.data : null;
  const masterDegree = educationData.find((e) => e.id === 'master') ?? educationData[0];

  const toggleExpanded = (id: string) =>
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });

  return (
    <Section id="career" variant={isPanelOpen ? 'journey' : 'default'} className="relative overflow-hidden">
      {isPanelOpen && <div className="journey-grid" aria-hidden />}
      <Container className="relative z-10">
        {!isPanelOpen ? (
          /* ── Collapsed preview ── */
          <button
            type="button"
            onClick={() => setIsPanelOpen(true)}
            className="w-full text-left rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 p-6 sm:p-8 md:p-10 group animate-border-pulse"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              {t('journey.title', 'common')}
            </h2>
            <p className="mt-2 text-lg text-primary font-medium group-hover:text-primary/90 transition-colors">
              {t('journey.discover', 'common')}
            </p>
            {(currentRole || masterDegree) && (
              <p className="mt-2 text-sm text-muted-foreground/90">
                {currentRole && (
                  <span>
                    {currentRole.position} at {currentRole.company}
                    {masterDegree ? ' · ' : ''}
                  </span>
                )}
                {masterDegree && (
                  <span>{masterDegree.degree}, {masterDegree.field}</span>
                )}
              </p>
            )}

            {/* Preview chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {careerData.map((exp, i) => (
                <span
                  key={exp.id}
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold border ${chipColors[i % chipColors.length]}`}
                >
                  <span className="w-4 h-4 rounded-full bg-current/20 flex items-center justify-center text-[9px] font-bold shrink-0">
                    {getInitials(exp.company)}
                  </span>
                  {exp.company}
                </span>
              ))}
              {educationData.map((edu) => (
                <span
                  key={edu.id}
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold border bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
                >
                  {edu.image ? (
                    <span className="w-4 h-4 rounded-full overflow-hidden bg-muted/30 shrink-0 flex items-center justify-center">
                      <Image src={edu.image} alt="" width={16} height={16} className="object-cover w-full h-full" />
                    </span>
                  ) : (
                    <span className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center text-[9px] font-bold shrink-0">
                      {getInitials(edu.institution)}
                    </span>
                  )}
                  {edu.institution}
                </span>
              ))}
            </div>

            <motion.span
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors"
              initial={false}
              whileHover={{ x: 4 }}
            >
              <span>{t('journey.expand_label', 'common')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </button>
        ) : (
          <>
            {/* Fixed close button */}
            <motion.button
              type="button"
              onClick={() => setIsPanelOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="fixed top-24 right-4 sm:right-6 z-50 flex items-center gap-2 rounded-xl border border-border/80 bg-card/95 backdrop-blur-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 shadow-lg transition-colors"
              aria-label={t('common.close', 'common')}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="hidden sm:inline">{t('common.close', 'common')}</span>
            </motion.button>

            {/* Sticky context panel */}
            <motion.div
              layout
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="sticky top-20 z-10 mb-6 rounded-2xl border border-border/80 bg-card/95 backdrop-blur-md shadow-lg shadow-black/5 px-5 py-4 md:px-6 md:py-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <motion.span
                    animate={{ backgroundColor: activeItem?.type === 'education' ? 'rgb(245 158 11)' : 'rgb(var(--primary, 59 130 246))' }}
                    transition={{ duration: 0.4 }}
                    className="flex-shrink-0 w-2 h-2 rounded-full"
                    aria-hidden
                  />
                  {activeItem && (
                    <>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">
                          {activeItem.type === 'career' ? activeItem.data.position : activeItem.data.degree}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {activeItem.type === 'career' ? activeItem.data.company : activeItem.data.institution}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground/80 flex-shrink-0 hidden sm:inline">
                        {activeItem.data.period}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-xs text-muted-foreground/70 hidden sm:block">
                  {t('journey.scroll_hint', 'common')}
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              ref={timelineRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="relative pt-8 md:pt-12"
            >
              {/* Background track */}
              <div
                className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/40 -translate-x-px md:-translate-x-1/2"
                aria-hidden
              />
              {/* Animated fill — updated directly on every scroll frame */}
              <div
                ref={fillLineRef}
                className="absolute left-6 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/70 to-primary/30 -translate-x-px md:-translate-x-1/2 origin-top rounded-full"
                style={{ height: 0 }}
                aria-hidden
              />

              <div className="space-y-0">
                {journeyItems.map((item, index) => {
                  const isUpcoming = index > activeIndex;
                  const isActive = index === activeIndex;
                  const isEducation = item.type === 'education';
                  return (
                    <div
                      key={item.data.id}
                      className="relative flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8 pt-6 pb-6 md:pt-10 md:pb-10"
                      ref={(el) => { cardRefs.current[index] = el; }}
                    >
                      {index % 2 === 0 && <div className="hidden md:block md:flex-1" />}

                      <motion.div
                        animate={{ opacity: isUpcoming ? 0.45 : 1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className={`flex-1 max-w-xl pl-12 md:pl-0 ${index % 2 === 1 ? 'md:order-first' : ''}`}
                      >
                        {/* Mobile year + type label */}
                        <div className="flex items-center gap-2 mb-2 md:hidden">
                          <span className={`text-xs font-bold tabular-nums ${isEducation ? 'text-amber-500' : 'text-primary'}`}>
                            {item.sortYear}
                          </span>
                          <span className="text-muted-foreground/40 text-xs">·</span>
                          <span className={`text-xs font-medium capitalize ${isEducation ? 'text-amber-500/70' : 'text-primary/70'}`}>
                            {isEducation ? 'Education' : item.data.type}
                          </span>
                        </div>

                        {item.type === 'education' ? (
                          <EducationJourneyCard
                            education={item.data}
                            isExpanded={expandedIds.has(item.data.id)}
                            isActive={isActive}
                            onToggle={() => toggleExpanded(item.data.id)}
                            index={index}
                          />
                        ) : (
                          <CareerJourneyCard
                            experience={item.data}
                            typeLabels={translations.career.types}
                            isExpanded={expandedIds.has(item.data.id)}
                            isActive={isActive}
                            onToggle={() => toggleExpanded(item.data.id)}
                          />
                        )}
                      </motion.div>

                      {/* Dot + year label */}
                      <div
                        ref={(el) => { dotRefs.current[index] = el; }}
                        className="absolute left-6 md:left-1/2 top-[2.6rem] md:top-[2.8rem] z-10 flex flex-col items-center -translate-x-1/2 pointer-events-none gap-1.5"
                      >
                        <motion.div
                          animate={{ scale: isActive ? 1.3 : 1 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className={`w-4 h-4 rounded-full border-4 border-background flex items-center justify-center shadow-lg ${
                            isEducation ? 'bg-amber-500' : 'bg-primary'
                          }`}
                          style={{
                            boxShadow: isActive
                              ? isEducation
                                ? '0 0 0 5px rgba(245,158,11,0.18), 0 2px 8px rgba(0,0,0,0.15)'
                                : '0 0 0 5px color-mix(in srgb, var(--primary) 18%, transparent), 0 2px 8px rgba(0,0,0,0.15)'
                              : undefined,
                          }}
                        >
                          {isEducation ? (
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" aria-hidden />
                          )}
                        </motion.div>
                        <span className="hidden md:block text-[10px] font-semibold text-muted-foreground/60 tracking-widest tabular-nums select-none">
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
        )}
      </Container>
    </Section>
  );
};

function EducationJourneyCard({
  education,
  isExpanded,
  isActive,
  onToggle,
}: {
  education: Education;
  isExpanded: boolean;
  isActive: boolean;
  onToggle: () => void;
  index: number;
}) {
  const { t } = useLanguage();
  const achievementsRef = useRef<HTMLDivElement>(null);
  const achievementsInView = useInView(achievementsRef, { amount: 0.2, once: true });

  return (
    <article
      className={`relative rounded-2xl border backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-500 ${
        isActive
          ? 'border-amber-500/45 shadow-amber-500/10 shadow-xl bg-amber-500/[0.04]'
          : 'border-amber-500/15 bg-amber-500/[0.02] hover:border-amber-500/30 hover:shadow-xl'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-5 md:p-6 flex gap-4 items-center rounded-2xl hover:bg-amber-500/5 transition-colors"
      >
        {education.image && (
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-muted/30 flex-shrink-0">
            <Image src={education.image} alt="" fill className="object-cover" sizes="56px" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-0.5">
            {t('education.title', 'common')}
          </p>
          <h3 className="text-lg font-bold text-foreground">{education.degree}</h3>
          <p className="text-amber-600 dark:text-amber-400 font-medium text-sm mt-0.5">{education.institution}</p>
          <p className="text-xs text-muted-foreground mt-1">{education.period} · {education.location}</p>
        </div>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 text-muted-foreground"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      <div
        className="grid overflow-hidden border-t border-amber-500/10 transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="min-h-0">
          <div
            className="px-5 pb-5 pt-2 md:px-6 md:pb-6 md:pt-2 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ opacity: isExpanded ? 1 : 0, transitionDelay: isExpanded ? '180ms' : '0ms' }}
          >
            {education.description && (
              <p className="text-muted-foreground text-sm leading-relaxed">{education.description}</p>
            )}
            {education.achievements && education.achievements.length > 0 && (
              <div ref={achievementsRef} className="mt-4 pt-4 border-t border-amber-500/10">
                <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-3">
                  {t('education.key_achievements', 'common')}
                </p>
                <motion.ul
                  initial="hidden"
                  animate={achievementsInView ? 'visible' : 'hidden'}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                  }}
                  className="space-y-2"
                >
                  {education.achievements.map((ach, i) => (
                    <motion.li
                      key={i}
                      variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
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

function CareerJourneyCard({
  experience,
  typeLabels,
  isExpanded,
  isActive,
  onToggle,
}: {
  experience: CareerExperience;
  typeLabels: Record<string, string>;
  isExpanded: boolean;
  isActive: boolean;
  onToggle: () => void;
}) {
  const { t } = useLanguage();
  const style = careerTypeStyles[experience.type] ?? careerTypeStyles.work;
  const achievementsRef = useRef<HTMLDivElement>(null);
  const achievementsInView = useInView(achievementsRef, { amount: 0.2, once: true });

  return (
    <article
      className={`relative rounded-2xl border bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-500 ${
        isActive
          ? 'border-primary/40 shadow-primary/10 shadow-xl'
          : 'border-border hover:border-primary/20 hover:shadow-xl'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl hover:bg-muted/10 transition-colors"
      >
        <div>
          <h3 className="text-lg font-bold text-foreground">{experience.position}</h3>
          <p className="text-primary font-semibold text-sm mt-0.5">{experience.company}</p>
          <p className="text-xs text-muted-foreground mt-1">{experience.period} · {experience.location}</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className={`text-xs font-medium shrink-0 ${style}`}>
            {typeLabels[experience.type] ?? experience.type}
          </Badge>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 text-muted-foreground"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.span>
        </div>
      </button>

      <div
        className="grid overflow-hidden border-t border-border/50 transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="min-h-0">
          <div
            className="px-5 pb-5 pt-2 md:px-6 md:pb-6 md:pt-2 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ opacity: isExpanded ? 1 : 0, transitionDelay: isExpanded ? '180ms' : '0ms' }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed">{experience.description}</p>
            {experience.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" size="sm" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
            {experience.achievements.length > 0 && (
              <div ref={achievementsRef} className="mt-4 pt-4 border-t border-border/50">
                <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-3">
                  {t('career.key_achievements', 'common')}
                </p>
                <motion.ul
                  initial="hidden"
                  animate={achievementsInView ? 'visible' : 'hidden'}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                  }}
                  className="space-y-2"
                >
                  {experience.achievements.map((ach, i) => (
                    <motion.li
                      key={i}
                      variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
