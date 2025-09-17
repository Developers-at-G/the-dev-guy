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
  getProjectDescription,
}) => {
  const isSpecialProject = project.title === 'devguy-ui-components';
  
  if (isSpecialProject) {
    return (
      <Card className={`p-6 cursor-pointer transition-all duration-300 ${isSelected ? 'ring-2 ring-primary shadow-2xl' : ''} bg-gradient-to-br from-background via-background to-primary/5 border-primary/20`}>
        <div className="space-y-6">
          {/* Special Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Featured Project</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              Component Library
            </div>
          </div>

          {/* Full-width Video */}
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border border-primary/20">
            <video 
              src={project.image}
              className="w-full h-full object-contain bg-black"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-sm font-medium">Live Demo</span>
                </div>
                <div className="px-2 py-1 rounded bg-black/50 text-white text-xs">
                  Interactive Components
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {getProjectTitle(project.title)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional React component library with TypeScript, Storybook documentation, and comprehensive testing. Built for enterprise-level applications.
              </p>
            </div>

            {/* Tech Stack - Enhanced */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105 ${
                      index < 3 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'bg-secondary text-secondary-foreground border border-border'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-xs font-medium text-muted-foreground">Development</span>
                <div className="text-sm font-medium text-foreground">TypeScript-First</div>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium text-muted-foreground">Documentation</span>
                <div className="text-sm font-medium text-foreground">Storybook Ready</div>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium text-muted-foreground">Testing</span>
                <div className="text-sm font-medium text-foreground">Comprehensive</div>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium text-muted-foreground">Coming Next</span>
                <div className="text-sm font-medium text-primary flex items-center gap-1">
                  <span>Command Palette</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.link && (
                <Button size="md" className="flex-1 min-w-0" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">🚀</span>
                    View Components
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button size="md" variant="outline" className="flex-1 min-w-0" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">💻</span>
                    Source Code
                  </a>
                </Button>
              )}
            </div>

            {/* Expandable Details */}
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={onToggleExpanded}
              className="w-full border border-dashed border-border hover:border-primary/50"
            >
              {isExpanded ? '↑ Hide Technical Details' : '↓ Show Technical Details'}
            </Button>
          </div>

          {isExpanded && (
            <div className="mt-6 p-6 rounded-xl border-2 border-dashed border-primary/20 bg-primary/5 space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-primary mb-2">🎯 Challenge</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{getProjectDescription(project.title)}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-primary mb-2">⚡ Technical Implementation</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {project.actions.map((action, index) => (
                    <li key={index} className="flex items-start gap-3 p-2 rounded-lg bg-background/50">
                      <span className="text-primary font-mono text-xs mt-0.5">#{index + 1}</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {project.impacts && (
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-2">🏆 Results & Impact</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.impacts.map((impact, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                        <span className="text-green-500 text-lg">✓</span>
                        <span className="text-sm font-medium text-foreground">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    );
  }

  return (
    <Card className={`p-4 cursor-pointer transition-all ${isSelected ? 'ring-2 ring-primary' : ''}`}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="relative h-48 rounded-lg overflow-hidden">
            {project.image.endsWith('.mov') || project.image.endsWith('.mp4') || project.image.endsWith('.webm') ? (
              <video 
                src={project.image}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image 
                src={project.image} 
                alt={getProjectTitle(project.title)} 
                fill 
                className="object-cover"
              />
            )}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {getProjectTitle(project.title)}
            </h3>
            
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
            {/* {project.caseStudy && (
              <Button size="sm" variant="ghost" asChild>
                <a href={project.caseStudy}>
                  Case Study
                </a>
              </Button>
            )} */}
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
                <p className="text-sm text-muted-foreground">{getProjectDescription(project.title)}</p>
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

export default ProjectCard;
