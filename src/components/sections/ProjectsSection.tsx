'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';
import { getProjectsData } from '@/data/projects';
import { getProjectSlug } from '@/utils/projects';
import { trackProjectCardClick } from '@/utils/analytics';
import type { Project, ProjectCategory } from '@/types/project';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectMedia } from '@/components/media/ProjectMedia';

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  fullstack: 'Full-stack',
  frontend: 'Frontend',
  learning: 'Learning',
};

function ProjectMediaCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const href = project.guideHref ?? `/Projects/${getProjectSlug(project.title)}`;
  const topImpact = project.impacts?.[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.2), ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={href}
        onClick={() => trackProjectCardClick(project.title, 'home')}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/35"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted/25">
          <ProjectMedia
            src={project.image}
            className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
          <div className="absolute left-3 top-3">
            <Badge variant="secondary" size="sm">
              {CATEGORY_LABELS[project.category]}
            </Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-ds-xs text-muted-foreground">
            <span>{project.role}</span>
            {project.period && (
              <>
                <span aria-hidden>·</span>
                <span>{project.period}</span>
              </>
            )}
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-ds-sm leading-relaxed text-muted-foreground sm:text-ds-base">
            {project.problem}
          </p>

          {topImpact && (
            <p className="mt-3 border-l-2 border-foreground/25 pl-3 text-ds-sm text-foreground/85">
              {topImpact}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" size="sm" className="font-mono text-ds-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <p className="mt-auto pt-5 text-ds-sm font-medium text-foreground underline-offset-4 group-hover:underline">
            {project.guideHref
              ? t('projects.read_architecture_guide', 'common')
              : t('projects.view_project', 'common')}{' '}
            →
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

export const ProjectsSection: React.FC = () => {
  const { t, translations } = useLanguage();
  const projects = getProjectsData(translations);

  return (
    <Section id="projects">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            className="mb-0"
            title={t('projects.title', 'common')}
            subtitle={t('projects.subtitle', 'common')}
            description={t('projects.description', 'common')}
          />
          <Button variant="outline" size="md" asChild className="shrink-0 self-start">
            <Link href="/Projects">{t('projects.view_all_projects', 'common')}</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectMediaCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
