'use client';

import React from 'react';
import { getProjectsData } from '../../data/projects';
import { useLanguage } from '../../app/context/LanguageContext';
import { ProjectRow } from '../cards/ProjectRow';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';

export const ProjectsList: React.FC = () => {
  const { t, translations } = useLanguage();
  const projectsData = getProjectsData(translations);
  const title = t('projects.title', 'common');
  const subtitle = t('projects.subtitle', 'common');
  const description = t('projects.description', 'common');

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20 pb-16">
      <Section variant="default" className="py-12 sm:py-16 md:py-20">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={title}
            subtitle={subtitle}
            description={description}
            className="mb-12 sm:mb-16 md:mb-20"
          />

          <div className="space-y-16 sm:space-y-20 md:space-y-28" role="list">
            {projectsData.map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={index}
                imageSide={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

