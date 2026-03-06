'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '../../hooks/useProjects';
import { Badge } from '../ui/Badge';
import { getProjectSlug } from '../../utils/projects';
import { trackProjectCardClick } from '../../utils/analytics';

interface ProjectRowProps {
  project: Project;
  index: number;
  /** 'left' = image on left, 'right' = image on right */
  imageSide: 'left' | 'right';
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, index, imageSide }) => {
  const isVideo =
    project.image.endsWith('.mov') ||
    project.image.endsWith('.mp4') ||
    project.image.endsWith('.webm');
  const slug = getProjectSlug(project.title);

  const handleClick = () => {
    const source = typeof window !== 'undefined' ? window.location.pathname : 'unknown';
    trackProjectCardClick(project.title, source);
  };

  const isLeft = imageSide === 'left';

  const mediaBlock = (
    <div className="relative w-full aspect-video min-h-[260px] sm:min-h-[300px] md:min-h-[340px] overflow-hidden rounded-2xl border border-border/70 bg-muted/30 shadow-lg shadow-black/10 ring-1 ring-border/50">
      {isVideo ? (
        <video
          src={project.image}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      ) : (
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent md:from-transparent md:via-transparent md:group-hover:from-black/30 md:group-hover:via-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col justify-center py-6 sm:py-8 md:py-8 lg:py-10 md:px-6 lg:px-10 rounded-2xl bg-card/50 border border-border/50 md:bg-transparent md:border-transparent">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge variant="outline" size="sm" className="font-mono text-foreground/80 border-border">
          {project.role}
        </Badge>
        <span className="text-muted-foreground" aria-hidden>·</span>
        <span className="text-sm text-foreground/80">{project.team}</span>
        {project.period && (
          <>
            <span className="text-muted-foreground" aria-hidden>·</span>
            <span className="text-sm font-mono text-foreground/80">{project.period}</span>
          </>
        )}
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight">
        {project.title}
      </h2>
      <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 max-w-xl">
        {project.problem}
      </p>
      {project.impacts && project.impacts.length > 0 && (
        <ul className="space-y-2 mb-6 text-sm sm:text-base text-foreground/85">
          {project.impacts.slice(0, 3).map((impact) => (
            <li key={impact} className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>{impact}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 5).map((tech) => (
          <Badge key={tech} variant="secondary" size="sm" className="font-mono text-xs border border-border/50">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 5 && (
          <Badge variant="outline" size="sm">+{project.technologies.length - 5}</Badge>
        )}
      </div>
      <Link
        href={`/Projects/${slug}`}
        onClick={handleClick}
        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg w-fit"
      >
        View project
        <svg className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 md:min-h-[380px] lg:min-h-[420px] items-center">
        {isLeft ? (
          <>
            <div className="relative">{mediaBlock}</div>
            <div>{contentBlock}</div>
          </>
        ) : (
          <>
            <div className="relative md:order-2">{mediaBlock}</div>
            <div className="md:order-1">{contentBlock}</div>
          </>
        )}
      </div>
    </motion.article>
  );
};
