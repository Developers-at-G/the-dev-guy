'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { CaseStudy } from '@/data/case-studies';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

function renderBody(body: string) {
  return body.split('\n').map((line, i) => {
    if (line.startsWith('## ')) {
      return (
        <h3 key={i} className="mt-6 text-ds-lg font-semibold text-foreground first:mt-0">
          {line.replace('## ', '')}
        </h3>
      );
    }
    if (line.startsWith('- ')) {
      return (
        <li key={i} className="ml-4 list-disc text-ds-sm text-muted-foreground sm:text-ds-base">
          {line.replace('- ', '')}
        </li>
      );
    }
    if (!line.trim()) return <div key={i} className="h-2" />;
    return (
      <p key={i} className="text-ds-sm leading-relaxed text-muted-foreground sm:text-ds-base">
        {line}
      </p>
    );
  });
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const [activeId, setActiveId] = useState(study.sections[0]?.id ?? '');
  const active = study.sections.find((s) => s.id === activeId) ?? study.sections[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" className="pt-16 sm:pt-20 pb-16">
        <Container className="py-10 md:py-14">
          <Button variant="outline" size="sm" asChild className="mb-8">
            <Link href="/Projects?category=fullstack">Back to projects</Link>
          </Button>

          <header className="mb-8 max-w-3xl border-b border-border pb-8">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{study.status}</Badge>
              <span className="font-mono text-ds-xs text-muted-foreground">{study.timeline}</span>
            </div>
            <h1 className="text-ds-3xl font-semibold tracking-tight text-foreground md:text-ds-4xl">
              {study.name}
            </h1>
            <p className="mt-3 text-ds-base text-muted-foreground sm:text-ds-lg">{study.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {study.tech.map((t) => (
                <Badge key={t} variant="outline" size="sm">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {study.liveUrl && (
                <Button size="sm" asChild>
                  <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live site
                  </a>
                </Button>
              )}
              {study.githubUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a href={study.githubUrl} target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                </Button>
              )}
            </div>
          </header>

          {/* Mobile: horizontal tabs; Desktop: side nav */}
          <div className="grid gap-8 md:grid-cols-[200px_1fr]">
            <nav
              className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0"
              aria-label="Case study sections"
            >
              {study.sections.map((section) => {
                const activeTab = section.id === active.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveId(section.id)}
                    className={`shrink-0 rounded-lg border px-3 py-2 text-left text-ds-sm font-medium transition-colors md:w-full ${
                      activeTab
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </nav>

            <article className="min-w-0 rounded-lg border border-border bg-card p-5 sm:p-8">
              {active && renderBody(active.body)}
            </article>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
