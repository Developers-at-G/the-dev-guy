'use client';

import React from 'react';
import { getProjectsData } from '../../data/projects';
import { useLanguage } from '../../app/context/LanguageContext';
import { ProjectCard } from '../cards/ProjectCard';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';

export const ProjectsList: React.FC = () => {
  const { t, translations } = useLanguage();
  const projectsData = getProjectsData(translations);
  const title = t('projects.title', 'common');
  const subtitle = t('projects.subtitle', 'common');
  const description = t('projects.description', 'common');

  return (
    <div className="min-h-screen bg-background pt-20">
      <Section variant="default">
        <Container>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            description={description}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

