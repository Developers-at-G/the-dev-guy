'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../../app/context/LanguageContext';
import { getProjectsData } from '../../data/projects';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ProjectsSlider } from './ProjectsSlider';

const FEATURED_COUNT = 3;

export const ProjectsSection: React.FC = () => {
  const { t, translations } = useLanguage();
  const projectsData = getProjectsData(translations);
  const featuredProjects = projectsData.slice(0, FEATURED_COUNT);

  return (
    <Section id="projects" variant="default" className="relative overflow-hidden pt-8 md:pt-12 lg:pt-16">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 bg-[length:100%_4px]"
          style={{
            backgroundImage:
              'linear-gradient(transparent 24%, rgba(129,140,248,0.1) 25%, rgba(129,140,248,0.1) 26%, transparent 27%, transparent 74%, rgba(129,140,248,0.1) 75%, rgba(129,140,248,0.1) 76%, transparent 77%, transparent)',
          }}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          title={t('projects.title', 'common')}
          subtitle={t('projects.subtitle', 'common')}
          description={t('projects.description', 'common')}
        />

        {/* Architecture CTA — compact strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-gap-section md:mb-10"
        >
          <Link href="/frontend-architecture" className="block group">
            <Card className="relative overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-background to-primary/5 rounded-2xl">
              <div className="p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      Frontend Architecture
                    </h3>
                    <p className="text-sm text-muted-foreground truncate sm:max-w-md">
                      How I structure and build modern Next.js applications
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all shrink-0">
                  Read guide
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" aria-hidden />
            </Card>
          </Link>
        </motion.div>

        {/* Projects slider — pass totalCount so a "View more" slide is shown when there are more projects */}
        <ProjectsSlider projects={featuredProjects} totalCount={projectsData.length} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-gap-section md:mt-10"
        >
          <Button size="lg" variant="outline" asChild className="group relative overflow-hidden font-mono rounded-xl">
            <Link href="/Projects">
              <span className="relative z-10">{t('projects.view_all_projects', 'common')}</span>
              <svg className="ml-2 w-5 h-5 relative z-10 shrink-0 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};
