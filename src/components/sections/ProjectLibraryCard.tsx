'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';
import type { Project, ProjectCategory } from '@/types/project';
import { getProjectSlug } from '@/utils/projects';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectMedia } from '@/components/media/ProjectMedia';

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  fullstack: 'Full-stack',
  frontend: 'Frontend',
  learning: 'Learning',
};

function projectHref(project: Project): string {
  if (project.guideHref) return project.guideHref;
  return `/Projects/${getProjectSlug(project.title)}`;
}

interface ProjectLibraryCardProps {
  project: Project;
}

export function ProjectLibraryCard({ project }: ProjectLibraryCardProps) {
  const { t } = useLanguage();
  const href = projectHref(project);

  return (
    <article className="group grid gap-4 border-b border-border py-8 first:pt-0 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-8">
      <Link
        href={href}
        className="relative block aspect-video overflow-hidden rounded-lg border border-border sm:aspect-[4/3]"
      >
        <ProjectMedia
          src={project.image}
          className="absolute inset-0 h-full w-full"
          sizes="200px"
        />
      </Link>

      <div className="flex min-w-0 flex-col justify-center">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{CATEGORY_LABELS[project.category]}</Badge>
          <span className="text-ds-xs text-muted-foreground">{project.role}</span>
          {project.period && (
            <>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <span className="font-mono text-ds-xs text-muted-foreground">
                {project.period}
              </span>
            </>
          )}
        </div>

        <h2 className="text-ds-xl font-semibold tracking-tight text-foreground sm:text-ds-2xl">
          <Link href={href} className="hover:underline hover:underline-offset-4">
            {project.title}
          </Link>
        </h2>

        <p className="mt-2 max-w-2xl text-ds-sm leading-relaxed text-muted-foreground sm:text-ds-base">
          {project.problem}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="outline" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="outline" size="sm">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href={href}>
              {project.guideHref
                ? t('projects.read_architecture_guide', 'common')
                : t('projects.view_project', 'common')}
            </Link>
          </Button>
          {project.caseStudyHref && (
            <Button variant="ghost" size="sm" asChild>
              <Link href={project.caseStudyHref}>
                {t('projects.case_study', 'common')}
              </Link>
            </Button>
          )}
          {project.link && !project.guideHref && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ds-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {t('projects.view_live_site', 'common')}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
