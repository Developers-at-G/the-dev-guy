'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';
import type { Project, ProjectCategory } from '@/types/project';
import { getProjectSlug } from '@/utils/projects';
import { Badge } from '@/components/ui/Badge';
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
    <Link
      href={href}
      className="group grid gap-5 border-b border-border py-8 transition-colors first:pt-0 last:border-b-0 sm:grid-cols-[minmax(0,240px)_1fr] sm:gap-8 sm:py-10"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted/20 sm:aspect-[4/3]">
        <ProjectMedia
          src={project.image}
          className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="240px"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-center">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{CATEGORY_LABELS[project.category]}</Badge>
          <span className="text-ds-xs text-muted-foreground">{project.role}</span>
          {project.period && (
            <>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <span className="font-mono text-ds-xs text-muted-foreground">{project.period}</span>
            </>
          )}
        </div>

        <h2 className="text-ds-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground sm:text-ds-2xl">
          {project.title}
        </h2>

        <p className="mt-2 max-w-2xl text-ds-sm leading-relaxed text-muted-foreground sm:text-ds-base">
          {project.problem}
        </p>

        {project.impacts && project.impacts.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {project.impacts.slice(0, 2).map((impact) => (
              <li key={impact} className="flex items-start gap-2 text-ds-sm text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                {impact}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech) => (
            <Badge key={tech} variant="outline" size="sm" className="font-mono text-ds-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <p className="mt-5 text-ds-sm font-medium text-foreground underline-offset-4 group-hover:underline">
          {project.guideHref
            ? t('projects.read_architecture_guide', 'common')
            : t('projects.view_project', 'common')}{' '}
          →
        </p>
      </div>
    </Link>
  );
}
