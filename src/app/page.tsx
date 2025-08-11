'use client';
import Career from "./Career/Career";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";
import Achievement from "./Achievement/Achievement";
import Projects from "./Projects/Projects";
import { useLanguage } from "./context/LanguageContext";
import { useEffect, useState } from "react";

function ClientHome() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation/>
      <main className="pt-16">
        <Profile />
        <Skills />
        <Career />
        <Projects />
        <Achievement />
        <Contact />

        {/* How I build CTA */}
        <section className="container mx-auto flex justify-center my-12">
          <a
            href="/how-i-build"
            className="group relative flex flex-col items-center justify-center px-8 py-8 rounded-2xl bg-gradient-to-br from-primary/80 to-accent/80 shadow-2xl border-2 border-primary/30 hover:scale-105 hover:shadow-primary/40 transition-all duration-300 cursor-pointer overflow-hidden"
            style={{ minWidth: 320, maxWidth: 480 }}
            aria-label="See how I build with React & Next.js"
          >
            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="text-3xl mb-2 animate-fade-in-up">🛠️</span>
            <span className="text-2xl font-bold text-white mb-1 animate-fade-in-up">{t('hero.how_i_build')}</span>
            <span className="text-base text-primary-foreground mb-2 animate-fade-in-up">{t('hero.engineering_approach')}</span>
            <span className="inline-block mt-2 px-4 py-2 rounded-lg bg-white/20 text-white font-semibold shadow hover:bg-white/30 transition-all duration-200 animate-fade-in">{t('common.learn_more')} →</span>
          </a>
        </section>
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
