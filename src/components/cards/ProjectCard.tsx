'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '../../hooks/useProjects';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const isVideo = project.image.endsWith('.mov') || project.image.endsWith('.mp4') || project.image.endsWith('.webm');
  
  const slug = project.title.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        variant="elevated"
        className="group overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <Link href={`/Projects/${slug}`} className="block cursor-pointer">
          <div className="relative h-48 md:h-64 overflow-hidden bg-muted">
            {isVideo ? (
              <video
                src={project.image}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.period && (
                  <Badge variant="outline" className="shrink-0">
                    {project.period}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.problem}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {project.role && (
                  <span className="capitalize">{project.role}</span>
                )}
                {project.team && (
                  <span>• {project.team}</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">View Details</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

