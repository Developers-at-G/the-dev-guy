'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../app/context/LanguageContext';
import { projectsData } from '../../data/projects';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const featuredProjects = projectsData.slice(0, 3);
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % featuredProjects.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [featuredProjects.length, isPaused]);

  return (
    <Section id="projects" variant="default" className="relative overflow-hidden">
      {/* Terminal-style background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_24%,rgba(129,140,248,0.1)_25%,rgba(129,140,248,0.1)_26%,transparent_27%,transparent_74%,rgba(129,140,248,0.1)_75%,rgba(129,140,248,0.1)_76%,transparent_77%,transparent)] bg-[length:100%_4px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
          description={t('projects.description')}
        />

        {/* Code Editor Style Container */}
        <div className="relative">
          {/* Tab Bar - Like VS Code */}
          <div className="flex items-end gap-1 mb-0 bg-background/80 backdrop-blur-sm border-b-2 border-border rounded-t-xl px-2 pt-2">
            {featuredProjects.map((project, index) => (
              <motion.button
                key={project.title}
                onClick={() => {
                  setActiveTab(index);
                  setIsPaused(true);
                  // Resume auto-slide after 10 seconds of manual selection
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={`relative px-6 py-3 rounded-t-lg font-mono text-sm font-medium transition-all ${
                  activeTab === index
                    ? 'bg-background text-primary border-t-2 border-l-2 border-r-2 border-primary z-10'
                    : 'bg-background/50 text-muted-foreground hover:text-foreground border-t-2 border-l-2 border-r-2 border-transparent'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xs opacity-60">●</span>
                  <span className="truncate max-w-[150px]">{project.title.split(' - ')[0]}</span>
                </span>
                {activeTab === index && !isPaused && (
                  <motion.div
                    key={activeTab}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-border overflow-hidden"
                  >
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                    />
                  </motion.div>
                )}
              </motion.button>
            ))}
            {/* Terminal icon */}
            <div className="ml-auto px-4 py-3 text-muted-foreground">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Content Area - Like Code Editor */}
          <Card className="border-t-0 rounded-t-none border-2 border-border bg-background overflow-hidden">
            <AnimatePresence mode="wait">
              {featuredProjects.map((project, index) => {
                if (index !== activeTab) return null;
                const isVideo = project.image.endsWith('.mov') || project.image.endsWith('.mp4');
                
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid lg:grid-cols-2 gap-0 min-h-[500px]"
                  >
                    {/* Left: Code/Info Panel */}
                    <div className="p-8 lg:p-12 bg-background border-r border-border flex flex-col justify-between">
                      {/* File path indicator */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mb-4">
                          <span>📁</span>
                          <span>projects/</span>
                          <span className="text-primary">{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                        </div>
                        
                        {/* Project metadata */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-3 flex-wrap mb-4">
                              <Badge variant="outline" className="capitalize text-xs font-mono">
                                {project.role}
                              </Badge>
                              <span className="text-muted-foreground text-sm">•</span>
                              <span className="text-muted-foreground text-sm">{project.team}</span>
                              <span className="text-muted-foreground text-sm">•</span>
                              <span className="text-muted-foreground text-sm font-mono">{project.period}</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <p className="text-muted-foreground leading-relaxed">
                              {project.problem}
                            </p>
                            
                            {/* Impact metrics */}
                            {project.impacts && (
                              <div className="flex flex-wrap gap-2 pt-2">
                                {project.impacts.map((impact) => (
                                  <Badge key={impact} variant="secondary" className="text-xs bg-primary/15 text-primary border-primary/30 font-mono">
                                    → {impact}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Tech stack - Terminal style */}
                      <div className="mt-auto pt-6 border-t border-border">
                        <div className="text-xs text-muted-foreground font-mono mb-3">
                          $ tech-stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Badge variant="outline" className="text-xs font-mono">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link href={`/Projects/${project.title.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                        <motion.div
                          className="mt-6 flex items-center gap-3 text-primary group cursor-pointer"
                          whileHover={{ x: 5 }}
                        >
                          <span className="font-mono text-sm">$ view-project</span>
                          <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </motion.svg>
                        </motion.div>
                      </Link>
                    </div>

                    {/* Right: Preview Panel */}
                    <div className="relative aspect-video lg:aspect-auto lg:h-auto min-h-[300px] lg:min-h-[500px] overflow-hidden bg-muted/10">
                      {isVideo ? (
                        <video
                          src={project.image}
                          className="w-full h-full object-contain lg:object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain lg:object-cover p-4 lg:p-0"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      )}
                      
                      {/* Terminal-style overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                      
                      {/* Status bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border px-4 py-2">
                        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span>● Preview</span>
                            <span>UTF-8</span>
                          </div>
                          <div className="flex items-center gap-4">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                🔗 Live
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                💻 GitHub
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </Card>
        </div>

        {/* View All - Terminal Command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild className="group relative overflow-hidden font-mono">
            <Link href="/Projects">
              <span className="relative z-10">$ view-all-projects</span>
              <motion.svg
                className="ml-2 w-5 h-5 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};
