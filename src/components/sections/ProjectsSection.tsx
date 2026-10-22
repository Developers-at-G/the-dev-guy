'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';
import { getProjectsData } from '@/data/projects';
import { getProjectSlug } from '@/utils/projects';
import { trackProjectCardClick } from '@/utils/analytics';
import type { Project } from '@/types/project';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectMedia } from '@/components/media/ProjectMedia';

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const href = project.guideHref ?? `/Projects/${getProjectSlug(project.title)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={href}
        onClick={() => trackProjectCardClick(project.title, 'home')}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/35"
      >
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-border bg-muted/30">
          <ProjectMedia
            src={project.image}
            className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/70 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            <Badge variant="secondary" size="sm">
              {project.role}
            </Badge>
            {project.period && (
              <Badge variant="outline" size="sm" className="font-mono">
                {project.period}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-ds-xl font-semibold tracking-tight text-foreground sm:text-ds-2xl">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-ds-sm leading-relaxed text-muted-foreground sm:text-ds-base">
            {project.problem}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" size="sm" className="font-mono text-ds-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="mt-5 text-ds-sm font-medium text-foreground underline-offset-4 group-hover:underline">
            {t('projects.view_project', 'common')} →
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

export const ProjectsSection: React.FC = () => {
  const { t, translations } = useLanguage();
  const projectsData = getProjectsData(translations);

  return (
    <Section id="projects">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="min-w-0 flex-1">
            <SectionHeader
              className="mb-0"
              title={t('projects.title', 'common')}
              subtitle={t('projects.subtitle', 'common')}
              description={t('projects.description', 'common')}
            />
          </div>
          <Button variant="outline" size="md" asChild className="shrink-0 self-start sm:mb-1 sm:self-end">
            <Link href="/Projects">{t('projects.view_all_projects', 'common')}</Link>
          </Button>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {projectsData.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
