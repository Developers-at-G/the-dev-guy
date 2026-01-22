import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navigation from './Navigation/Navigation';
import { Hero } from '../components/sections/Hero';
import { Footer } from '../components/Footer';

// Lazy load below-the-fold sections to reduce initial bundle size
const ProjectsSection = dynamic(() => import('../components/sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const CareerSection = dynamic(() => import('../components/sections/CareerSection').then(m => ({ default: m.CareerSection })));
const SkillsSection = dynamic(() => import('../components/sections/SkillsSection').then(m => ({ default: m.SkillsSection })));
const EducationSection = dynamic(() => import('../components/sections/EducationSection').then(m => ({ default: m.EducationSection })));
const ContactSection = dynamic(() => import('../components/sections/ContactSection').then(m => ({ default: m.ContactSection })));

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
        <CareerSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
