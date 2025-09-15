'use client';
import Career from "./Career/Career";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";
import Achievement from "./Achievement/Achievement";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import { useLanguage } from "./context/LanguageContext";
import { useEffect, useState } from "react";

function ClientHome() {
  // Removed unused translation variable to satisfy linting
  useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation/>
      <main className="pt-16">
        <Profile />
        <Projects />
        <Skills />
        <Career />
        <Education />
        <Achievement />
        <Contact />
      </main>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientHome />;
}
