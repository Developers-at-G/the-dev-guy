'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useLanguage } from '../../app/context/LanguageContext';
import { Project } from '../../hooks/useProjects';
import { Badge } from '../ui/Badge';
import { getProjectSlug } from '../../utils/projects';
import { trackProjectCardClick } from '../../utils/analytics';

const slideTransition = { type: 'spring', stiffness: 320, damping: 36 };

interface ProjectsSliderProps {
  projects: Project[];
  /** Total number of projects (including non-featured). If > projects.length, a "View more" slide is added. */
  totalCount?: number;
}

export const ProjectsSlider: React.FC<ProjectsSliderProps> = ({ projects, totalCount }) => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const showViewMoreSlide = typeof totalCount === 'number' && totalCount > projects.length;
  const total = showViewMoreSlide ? projects.length + 1 : projects.length;

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(Math.max(0, Math.min(next, total - 1)));
  }, [index, total]);

  const onDragEnd = useCallback((_: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold && index < total - 1) goTo(index + 1);
    if (info.offset.x > threshold && index > 0) goTo(index - 1);
  }, [index, total, goTo]);

  if (projects.length === 0) return null;

  const isViewMoreSlide = showViewMoreSlide && index === projects.length;
  const project = !isViewMoreSlide ? projects[index] : null;
  const slug = project ? getProjectSlug(project.title) : '';
  const isVideo = project ? /\.(mov|mp4|webm)$/i.test(project.image) : false;

  const handleClick = () => {
    if (!project) return;
    const source = typeof window !== 'undefined' ? window.location.pathname : 'unknown';
    trackProjectCardClick(project.title, source);
  };

  return (
    <div className="relative w-full">
      <motion.div
        className="overflow-hidden rounded-2xl"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={onDragEnd}
        style={{ touchAction: 'pan-y' }}
      >
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction === 1 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -80 : 80 }}
            transition={slideTransition}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[420px] lg:min-h-[480px]"
          >
            {isViewMoreSlide ? (
              <>
                <div className="relative w-full aspect-video lg:aspect-[4/3] min-h-[260px] rounded-2xl overflow-hidden border border-dashed border-border/70 bg-muted/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4" aria-hidden>
                      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium text-foreground/90">{t('projects.view_more_slide', 'common')}</p>
                    <p className="text-sm text-muted-foreground mt-1">{totalCount} {t('projects.projects_count', 'common')}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-4 lg:py-8 items-center lg:items-start text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {t('projects.view_more_slide', 'common')}
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 max-w-xl">
                    {t('projects.view_more_slide_paragraph', 'common')}
                  </p>
                  <Link
                    href="/Projects"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all w-fit rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {t('projects.view_all_projects', 'common')}
                    <svg className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="relative w-full aspect-video lg:aspect-[4/3] min-h-[260px] rounded-2xl overflow-hidden border border-border/70 bg-muted/30 shadow-xl ring-1 ring-border/50">
                  {isVideo ? (
                    <video
                      src={project!.image}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-hidden
                    />
                  ) : (
                    <Image
                      src={project!.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent pointer-events-none" aria-hidden />
                </div>

                <div className="flex flex-col justify-center py-4 lg:py-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="outline" size="sm" className="font-mono text-foreground/80 border-border">
                      {project!.role}
                    </Badge>
                    <span className="text-muted-foreground" aria-hidden>·</span>
                    <span className="text-sm text-foreground/80">{project!.team}</span>
                    {project!.period && (
                      <>
                        <span className="text-muted-foreground" aria-hidden>·</span>
                        <span className="text-sm font-mono text-foreground/80">{project!.period}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight tracking-tight">
                    {project!.title}
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 max-w-xl">
                    {project!.problem}
                  </p>
                  {project!.impacts && project!.impacts.length > 0 && (
                    <ul className="space-y-2 mb-6 text-sm sm:text-base text-foreground/85">
                      {project!.impacts.slice(0, 3).map((impact) => (
                        <li key={impact} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5 shrink-0">→</span>
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project!.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm" className="font-mono text-xs border border-border/50">
                        {tech}
                      </Badge>
                    ))}
                    {project!.technologies.length > 5 && (
                      <Badge variant="outline" size="sm">+{project!.technologies.length - 5}</Badge>
                    )}
                  </div>
                  <Link
                    href={`/Projects/${slug}`}
                    onClick={handleClick}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all w-fit rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    View project
                    <svg className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8 gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous project"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/80 text-foreground hover:bg-muted/50 hover:border-primary/40 disabled:opacity-40 disabled:pointer-events-none transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === total - 1}
            aria-label="Next project"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/80 text-foreground hover:bg-muted/50 hover:border-primary/40 disabled:opacity-40 disabled:pointer-events-none transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={i < projects.length ? `Go to project ${i + 1}` : 'View more projects'}
              className="h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{
                width: i === index ? 24 : 8,
                backgroundColor: i === index ? 'var(--primary)' : 'var(--muted)',
              }}
            />
          ))}
        </div>

        <span className="text-sm text-muted-foreground tabular-nums">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
};
