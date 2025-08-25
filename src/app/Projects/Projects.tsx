'use client';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProjects } from '../../hooks/useProjects';
import { ProjectCard } from '../../components/ProjectCard';
import { projectsData } from '../../data/projects';

function ProjectsSection() {
  const { t } = useLanguage();
  const {
    sortedProjects,
    toggleProjectExpansion,
    isProjectExpanded
  } = useProjects({ projects: projectsData });

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            {t('projects.title')}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {projectsData.length} projects showcasing modern web development
          </p>
        </div>

        <div className="space-y-8">
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isSelected={false}
              isExpanded={isProjectExpanded(project.title)}
              onToggleExpanded={() => toggleProjectExpansion(project.title)}
              getProjectTitle={(key) => t(`projects.${key}_title`)}
              getProjectDescription={(key) => t(`projects.${key}_desc`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  return <ProjectsSection />;
}
