'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';
import { getProjectsData } from '@/data/projects';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProjectsSlider } from './ProjectsSlider';

const FEATURED_COUNT = 3;

export const ProjectsSection: React.FC = () => {
  const { t, translations } = useLanguage();
  const projectsData = getProjectsData(translations);
  const featuredProjects = projectsData.slice(0, FEATURED_COUNT);

  return (
    <Section id="projects" className="pt-8 md:pt-12 lg:pt-16">
      <Container>
        <SectionHeader
          title={t('projects.title', 'common')}
          subtitle={t('projects.subtitle', 'common')}
          description={t('projects.description', 'common')}
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-gap-section md:mb-10"
        >
          <Link href="/frontend-architecture" className="group block">
            <Card className="transition-colors hover:border-foreground/30">
              <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div className="min-w-0">
                  <p className="text-ds-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Learning
                  </p>
                  <h3 className="mt-1 text-ds-lg font-semibold text-foreground">
                    {t('projects.read_architecture_guide', 'common')}
                  </h3>
                  <p className="mt-0.5 truncate text-ds-sm text-muted-foreground sm:max-w-md">
                    {t('projects.how_i_structure', 'common')}
                  </p>
                </div>
                <span className="shrink-0 text-ds-sm font-medium text-foreground underline-offset-4 group-hover:underline">
                  {t('projects.view_project', 'common')} →
                </span>
              </div>
            </Card>
          </Link>
        </motion.div>

        <ProjectsSlider projects={featuredProjects} totalCount={projectsData.length} />

        <div className="mt-gap-section flex flex-wrap items-center justify-center gap-3 md:mt-10">
          <Button size="lg" variant="primary" asChild>
            <Link href="/Projects">{t('projects.view_all_projects', 'common')}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/Projects?category=fullstack">
              {t('projects.filter_fullstack', 'common')}
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/Projects?category=frontend">
              {t('projects.filter_frontend', 'common')}
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <Link href="/Projects?category=learning">
              {t('projects.filter_learning', 'common')}
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};
