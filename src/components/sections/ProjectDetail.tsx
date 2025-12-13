'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '../../hooks/useProjects';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Container } from '../ui/Container';
import { trackProjectView, trackProjectLinkClick } from '../../utils/analytics';

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const isVideo = project.image.endsWith('.mov') || project.image.endsWith('.mp4') || project.image.endsWith('.webm');

  useEffect(() => {
    trackProjectView(project.title, 'project-detail-page');
  }, [project.title]);

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" size="sm" asChild>
            <Link href="/Projects">
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            {project.period && (
              <Badge variant="outline">{project.period}</Badge>
            )}
            {project.role && (
              <Badge variant="secondary">{project.role}</Badge>
            )}
            {project.team && (
              <Badge variant="outline">{project.team}</Badge>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card variant="elevated" className="overflow-hidden">
            <div className="relative h-64 md:h-96 lg:h-[500px] bg-muted">
              {isVideo ? (
                <video
                  src={project.image}
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  aria-label={`${project.title} demo video`}
                  />
              ) : (
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              )}
            </div>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card variant="elevated" className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.problem}
                </p>
              </Card>
            </motion.div>

            {project.impacts && project.impacts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card variant="elevated" className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Results & Impact</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.impacts.map((impact, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20"
                      >
                        <span className="text-primary text-xl">✓</span>
                        <span className="text-foreground font-medium">{impact}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.link && (
                    <Button className="w-full" size="lg" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live ${project.title} project`}
                        onClick={() => trackProjectLinkClick(project.title, 'live', project.link!)}
                      >
                        <svg
                          className="mr-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        View Live Site
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        onClick={() => trackProjectLinkClick(project.title, 'github', project.githubUrl!)}
                      >
                        <svg
                          className="mr-2 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

