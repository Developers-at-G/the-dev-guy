'use client';
import Career from "./Career/Career";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";
import Achievement from "./Achievement/Achievement";
import Projects from "./Projects/Projects";
import CodingDemo from "./Projects/CodingDemo";
import ComponentPopup from "./components/ComponentPopup";
import WithPopup from "./components/WithPopup";
import { usePopup } from "./context/PopupContext";
import { useLanguage } from "./context/LanguageContext";
import { useEffect, useState } from "react";

function ClientHome() {
  const { currentPopup, isVisible, side, hidePopup } = usePopup();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation/>
      <main className="pt-16">
        <WithPopup
          popupData={{
            title: t('popup.profile_title'),
            description: t('popup.profile_desc'),
            technologies: ["React", "TypeScript", "CSS", "Next.js"],
            approach: t('popup.approach')
          }}
          side="left"
        >
          <Profile/>
        </WithPopup>

        {/* CTA to How I Build page */}
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

        <WithPopup
          popupData={{
            title: t('popup.skills_title'),
            description: t('popup.skills_desc'),
            technologies: ["React", "Tailwind CSS", "Framer Motion", "SVG"],
            approach: t('popup.approach')
          }}
          side="right"
        >
          <Skills/>
        </WithPopup>

        <WithPopup
          popupData={{
            title: t('popup.career_title'),
            description: t('popup.career_desc'),
            technologies: ["React", "CSS Grid", "Responsive Design"],
            approach: t('popup.approach')
          }}
          side="left"
        >
          <Career/>
        </WithPopup>

        <WithPopup
          popupData={{
            title: t('popup.coding_title'),
            description: t('popup.coding_desc'),
            technologies: ["React", "CSS Animations", "TypeScript"],
            approach: t('popup.approach')
          }}
          side="right"
        >
          <CodingDemo/> 
        </WithPopup>

        <WithPopup
          popupData={{
            title: t('popup.projects_title'),
            description: t('popup.projects_desc'),
            technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
            approach: t('popup.approach')
          }}
          side="left"
        >
          <Projects/>
        </WithPopup>

        <WithPopup
          popupData={{
            title: t('popup.education_title'),
            description: t('popup.education_desc'),
            technologies: ["React", "CSS", "Responsive Design"],
            approach: t('popup.approach')
          }}
          side="right"
        >
          <Education/>
        </WithPopup>

        <WithPopup
          popupData={{
            title: t('popup.achievement_title'),
            description: t('popup.achievement_desc'),
            technologies: ["React", "CSS", "Icons"],
            approach: t('popup.approach')
          }}
          side="left"
        >
          <Achievement/> 
        </WithPopup>

        <WithPopup
          popupData={{
            title: t('popup.contact_title'),
            description: t('popup.contact_desc'),
            technologies: ["React", "Form Handling", "Email Integration"],
            approach: t('popup.approach')
          }}
          side="right"
        >
          <Contact/>
        </WithPopup>
      </main>

      {/* Popup Component */}
      {currentPopup && (
        <ComponentPopup
          isVisible={isVisible}
          onClose={hidePopup}
          title={currentPopup.title}
          description={currentPopup.description}
          technologies={currentPopup.technologies}
          approach={currentPopup.approach}
          side={side}
          delay={4000}
        />
      )}
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientHome />;
}
