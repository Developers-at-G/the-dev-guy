import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Project } from '../hooks/useProjects';

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  isExpanded: boolean;

  onToggleExpanded: () => void;
  getProjectTitle: (key: string) => string;
  getProjectDescription: (key: string) => string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isSelected,
  isExpanded,

  onToggleExpanded,
  getProjectTitle,
  getProjectDescription
}) => {
  return (
    <Card className={`p-4 cursor-pointer transition-all ${isSelected ? 'ring-2 ring-primary' : ''}`}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Project Info */}
        <div className="space-y-4">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image 
              src={project.image} 
              alt={getProjectTitle(project.title)} 
              fill 
              className="object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {getProjectTitle(project.title)}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {getProjectDescription(project.description)}
            </p>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Role:</span>
              <div className="font-medium">{project.role}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Team:</span>
              <div className="font-medium">{project.team}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Year:</span>
              <div className="font-medium">{project.period}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Impact:</span>
              <div className="font-medium">{project.impacts?.[0] || 'N/A'}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.link && (
              <Button size="sm" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </Button>
            )}
            {project.caseStudy && (
              <Button size="sm" variant="ghost" asChild>
                <a href={project.caseStudy}>
                  Case Study
                </a>
              </Button>
            )}
          </div>

          <Button 
            size="sm" 
            variant="ghost" 
            onClick={onToggleExpanded}
            className="w-full"
          >
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </Button>

          {isExpanded && (
            <div className="mt-4 p-4 rounded-lg border bg-muted/10 space-y-3">
              <div>
                <h4 className="font-semibold text-sm">Problem</h4>
                <p className="text-sm text-muted-foreground">{project.problem}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Actions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.actions.map((action, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
              {project.impacts && (
                <div>
                  <h4 className="font-semibold text-sm">Impact</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.impacts.map((impact, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
