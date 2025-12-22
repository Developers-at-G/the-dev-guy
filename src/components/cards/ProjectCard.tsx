'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '../../hooks/useProjects';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { trackProjectCardClick } from '../../utils/analytics';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const isVideo = project.image.endsWith('.mov') || project.image.endsWith('.mp4') || project.image.endsWith('.webm');
  
  const slug = project.title.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  const handleCardClick = () => {
    const source = typeof window !== 'undefined' ? window.location.pathname : 'unknown';
    trackProjectCardClick(project.title, source);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        variant="elevated"
        className="group overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-border/50"
      >
        <Link href={`/Projects/${slug}`} className="block cursor-pointer flex flex-col h-full" onClick={handleCardClick}>
          <div className="relative h-48 md:h-64 overflow-hidden bg-muted/50 rounded-t-xl flex-shrink-0">
            {isVideo ? (
              <video
                src={project.image}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                aria-label={`${project.title} demo video`}
                controls={false}
              />
            ) : (
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {project.link && (
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-1.5 shadow-lg border border-border/50">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 space-y-4 flex flex-col h-full">
            <div className="space-y-3 flex-grow">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight flex-1">
                  {project.title}
                </h3>
                {project.period && (
                  <Badge variant="outline" className="shrink-0 text-xs whitespace-nowrap">
                    {project.period}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 min-h-[2rem]">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs font-medium"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs font-medium">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
                {project.role && (
                  <span className="capitalize font-medium">{project.role}</span>
                )}
                {project.team && (
                  <span className="text-muted-foreground/60">• {project.team}</span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-primary opacity-70 group-hover:opacity-100 transition-all">
                <span className="text-xs md:text-sm font-medium">View</span>
                <svg
                  className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
};

