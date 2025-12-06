'use client';

import React from 'react';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../cards/ProjectCard';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';

export const ProjectsList: React.FC = () => {
  // Use static text to avoid SSR issues with LanguageProvider
  const title = 'Projects';
  const subtitle = 'Featured Work';
  const description = 'A showcase of my recent projects and technical achievements';

  return (
    <div className="min-h-screen bg-background pt-20">
      <Section variant="default">
        <Container>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            description={description}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

