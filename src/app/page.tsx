import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navigation from './Navigation/Navigation';
import { Hero } from '../components/sections/Hero';
import { Footer } from '../components/Footer';

const SectionSkeleton = () => (
  <div className="py-20 px-4">
    <div className="max-w-4xl mx-auto space-y-4 animate-pulse">
      <div className="h-8 w-48 bg-muted rounded-lg" />
      <div className="h-4 w-72 bg-muted/60 rounded" />
      <div className="h-48 w-full bg-muted/40 rounded-2xl mt-8" />
    </div>
  </div>
);

// Lazy load below-the-fold sections to reduce initial bundle size
const ProjectsSection = dynamic(() => import('../components/sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })), { loading: () => <SectionSkeleton /> });
const JourneySection  = dynamic(() => import('../components/sections/JourneySection').then(m => ({ default: m.JourneySection })),  { loading: () => <SectionSkeleton /> });
const SkillsSection   = dynamic(() => import('../components/sections/SkillsSection').then(m => ({ default: m.SkillsSection })),   { loading: () => <SectionSkeleton /> });
const ContactSection  = dynamic(() => import('../components/sections/ContactSection').then(m => ({ default: m.ContactSection })), { loading: () => <SectionSkeleton /> });

export const metadata: Metadata = {
  title: 'Abdallah Amadou Gueye | Frontend / Product Engineer',
  description: 'Professional portfolio of Abdallah Amadou Gueye - Frontend / Product Engineer specializing in React, Next.js, TypeScript, and modern web development. Building scalable applications with a focus on UI/UX and performance. ATS-friendly resume and professional experience.',
  openGraph: {
    title: 'Abdallah Amadou Gueye | Frontend / Product Engineer',
    description: 'Professional portfolio - Frontend / Product Engineer specializing in React, Next.js, TypeScript, and modern web development.',
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
        <JourneySection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
