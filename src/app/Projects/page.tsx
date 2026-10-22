import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import { ProjectLibrary } from '@/components/sections/ProjectLibrary';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse projects by type: full-stack applications, frontend work, and Next.js / React learning resources.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content">
        <Suspense fallback={<div className="min-h-[50vh] pt-24" />}>
          <ProjectLibrary />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
