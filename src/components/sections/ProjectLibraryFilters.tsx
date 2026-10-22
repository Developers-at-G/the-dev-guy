'use client';

import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { PROJECT_CATEGORIES } from '@/types/project';
import type { ProjectFilter } from '@/hooks/useProjectCategoryFilter';

interface ProjectLibraryFiltersProps {
  filter: ProjectFilter;
  counts: Record<ProjectFilter, number>;
  onChange: (id: ProjectFilter) => void;
}

export function ProjectLibraryFilters({
  filter,
  counts,
  onChange,
}: ProjectLibraryFiltersProps) {
  const { t } = useLanguage();

  const labels: Record<ProjectFilter, string> = {
    all: t('projects.filter_all', 'common'),
    fullstack: t('projects.filter_fullstack', 'common'),
    frontend: t('projects.filter_frontend', 'common'),
    learning: t('projects.filter_learning', 'common'),
  };

  return (
    <div
      className="mb-8 flex flex-wrap gap-2 border-b border-border pb-4"
      role="tablist"
      aria-label={t('projects.filter_label', 'common')}
    >
      {PROJECT_CATEGORIES.map((cat) => {
        const active = filter === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(cat.id)}
            className={`rounded-lg border px-3 py-1.5 text-ds-sm font-medium transition-colors ${
              active
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground'
            }`}
          >
            {labels[cat.id]}
            <span className="ml-1.5 tabular-nums opacity-60">{counts[cat.id]}</span>
          </button>
        );
      })}
    </div>
  );
}
