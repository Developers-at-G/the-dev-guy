'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../../app/context/LanguageContext';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../cards/ProjectCard';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <Section id="projects" variant="default">
      <Container>
        <SectionHeader
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
          description={t('projects.description')}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 auto-rows-fr">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/Projects">
              View All Projects
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};

