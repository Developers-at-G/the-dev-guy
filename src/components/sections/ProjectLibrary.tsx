'use client';

import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import {
  countByCategory,
  getProjectLibrary,
  getProjectsByCategory,
} from '@/data/projects';
import { useProjectCategoryFilter } from '@/hooks/useProjectCategoryFilter';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ProjectLibraryFilters } from './ProjectLibraryFilters';
import { ProjectLibraryCard } from './ProjectLibraryCard';

export function ProjectLibrary() {
  const { t, translations } = useLanguage();
  const { filter, setCategory } = useProjectCategoryFilter();

  const library = getProjectLibrary(translations);
  const counts = countByCategory(library);
  const visible = getProjectsByCategory(library, filter);

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20 pb-16">
      <Section>
        <Container>
          <SectionHeader
            title={t('projects.library_title', 'common')}
            subtitle={t('projects.library_subtitle', 'common')}
            description={t('projects.library_description', 'common')}
          />

          <ProjectLibraryFilters
            filter={filter}
            counts={counts}
            onChange={setCategory}
          />

          <p className="mb-2 text-ds-sm text-muted-foreground">
            {visible.length}{' '}
            {visible.length === 1
              ? t('projects.item_singular', 'common')
              : t('projects.item_plural', 'common')}
          </p>

          <div className="mt-2">
            {visible.map((project) => (
              <ProjectLibraryCard key={project.id} project={project} />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">
              {t('projects.empty_filter', 'common')}
            </p>
          )}
        </Container>
      </Section>
    </div>
  );
}
