'use client';

import { useEffect, useState } from 'react';
import Navigation from './Navigation/Navigation';
import { Hero } from '../components/sections/Hero';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { CareerSection } from '../components/sections/CareerSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { EducationSection } from '../components/sections/EducationSection';
import { ContactSection } from '../components/sections/ContactSection';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content">
        <Hero />
        <ProjectsSection />
        <CareerSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}
