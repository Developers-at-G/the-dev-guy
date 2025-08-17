import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Container } from '../ui/Container';

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  status: string;
  category: string;
  timeline: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  children,
  title,
  subtitle,
  status,
  category,
  timeline,
  technologies,
  liveUrl,
  githubUrl
}) => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-16 border-b border-border">
        <Container>
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Button variant="outline" asChild>
              <Link href="/#projects" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
            </Button>
            
            <div className="flex items-center gap-3">
              {liveUrl && (
                <Button variant="secondary" size="sm" asChild>
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </Button>
              )}
              {githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">{category}</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              {title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Status</h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{status}</span>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
                <span className="text-sm text-muted-foreground">{timeline}</span>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Technologies</h3>
                <div className="flex flex-wrap justify-center gap-1">
                  {technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{technologies.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CaseStudyLayout;
