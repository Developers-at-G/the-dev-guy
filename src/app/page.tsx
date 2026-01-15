import { Metadata } from 'next';
import Navigation from './Navigation/Navigation';
import { Hero } from '../components/sections/Hero';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { CareerSection } from '../components/sections/CareerSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { EducationSection } from '../components/sections/EducationSection';
import { ContactSection } from '../components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Abdallah Amadou Gueye | Frontend / Product Engineer & Full-Stack Developer',
  description: 'Frontend / Product Engineer specializing in React, Next.js, TypeScript, and modern web development. Building scalable applications with a focus on UI/UX and performance.',
  openGraph: {
    title: 'Abdallah Amadou Gueye | Frontend / Product Engineer & Full-Stack Developer',
    description: 'Frontend / Product Engineer specializing in React, Next.js, TypeScript, and modern web development.',
    type: 'website',
    url: 'https://abdallah-the-dev-guy.vercel.app',
  },
};

export default function Home() {
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
