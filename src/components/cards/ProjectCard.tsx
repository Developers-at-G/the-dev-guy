'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '../../hooks/useProjects';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { trackProjectCardClick } from '../../utils/analytics';
import { getProjectSlug } from '../../utils/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const isVideo =
    project.image.endsWith('.mov') ||
    project.image.endsWith('.mp4') ||
    project.image.endsWith('.webm');
  const slug = getProjectSlug(project.title);

  const handleCardClick = () => {
    const source = typeof window !== 'undefined' ? window.location.pathname : 'unknown';
    trackProjectCardClick(project.title, source);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <Card
        variant="elevated"
        className="group overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 border border-border/60 hover:border-primary/20"
      >
        <Link
          href={`/Projects/${slug}`}
          className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
          onClick={handleCardClick}
        >
          {/* Media */}
          <div className="relative aspect-[16/10] sm:aspect-video overflow-hidden bg-muted/40 flex-shrink-0">
            {isVideo ? (
              <video
                src={project.image}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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
                alt={`${project.title} — project screenshot`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {project.link && (
              <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-border/50">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 flex flex-col flex-1 min-h-0">
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                {project.period && (
                  <Badge variant="outline" size="sm" className="shrink-0 w-fit text-muted-foreground font-normal">
                    {project.period}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/50">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" size="sm" className="text-xs font-medium">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" size="sm" className="text-xs">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/40">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {project.role && <span className="font-medium text-foreground/80">{project.role}</span>}
                {project.team && <span aria-hidden>·</span>}
                {project.team && <span>{project.team}</span>}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                View project
                <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </Card>
    </motion.article>
  );
};

