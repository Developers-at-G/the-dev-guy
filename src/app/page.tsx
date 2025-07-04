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

export default function Home() {
  const { currentPopup, isVisible, side, hidePopup } = usePopup();

  return (
    <div className="min-h-screen bg-background">
      <Navigation/>
      <main className="pt-16">
        <WithPopup
          popupData={{
            title: "Profile Section",
            description: "A dynamic hero section featuring a typewriter effect and professional presentation.",
            technologies: ["React", "TypeScript", "CSS", "Next.js"],
            approach: "Uses custom hooks for typewriter animation, responsive design with Tailwind CSS, and optimized image loading with Next.js Image component."
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
            <span className="text-2xl font-bold text-white mb-1 animate-fade-in-up">How I Build with React & Next.js</span>
            <span className="text-base text-primary-foreground mb-2 animate-fade-in-up">My engineering approach, explained for recruiters</span>
            <span className="inline-block mt-2 px-4 py-2 rounded-lg bg-white/20 text-white font-semibold shadow hover:bg-white/30 transition-all duration-200 animate-fade-in">Learn More →</span>
          </a>
        </section>

        <WithPopup
          popupData={{
            title: "Skills Section",
            description: "Interactive skills showcase with animated progress bars and technology icons.",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "SVG"],
            approach: "Uses CSS animations, responsive grid layouts, and interactive hover effects to showcase technical skills with visual appeal."
          }}
          side="right"
        >
          <Skills/>
        </WithPopup>

        <WithPopup
          popupData={{
            title: "Career Section",
            description: "Professional experience timeline with company details and role descriptions.",
            technologies: ["React", "CSS Grid", "Responsive Design"],
            approach: "Implements a timeline layout with responsive design, smooth animations, and professional styling to present work experience."
          }}
          side="left"
        >
          <Career/>
        </WithPopup>

        <WithPopup
          popupData={{
            title: "Coding Demo",
            description: "Interactive coding animation showcasing development workflow and technical skills.",
            technologies: ["React", "CSS Animations", "TypeScript"],
            approach: "Features animated code typing, syntax highlighting, and interactive elements to demonstrate coding expertise visually."
          }}
          side="right"
        >
          <CodingDemo/> 
        </WithPopup>

        <WithPopup
          popupData={{
            title: "Projects Section",
            description: "Portfolio showcase with project cards, filtering, and interactive elements.",
            technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
            approach: "Uses component-based architecture, state management for filtering, and responsive design to showcase projects effectively."
          }}
          side="left"
        >
          <Projects/>
        </WithPopup>

        <WithPopup
          popupData={{
            title: "Education Section",
            description: "Academic background presentation with degree details and achievements.",
            technologies: ["React", "CSS", "Responsive Design"],
            approach: "Clean, professional layout with card-based design and responsive grid to present educational background."
          }}
          side="right"
        >
          <Education/>
        </WithPopup>

        <WithPopup
          popupData={{
            title: "Achievement Section",
            description: "Accomplishments and certifications showcase with visual elements.",
            technologies: ["React", "CSS", "Icons"],
            approach: "Uses visual hierarchy, icons, and clean typography to highlight achievements and certifications."
          }}
          side="left"
        >
          <Achievement/> 
        </WithPopup>

        <WithPopup
          popupData={{
            title: "Contact Section",
            description: "Contact form and information with interactive elements and validation.",
            technologies: ["React", "Form Handling", "Email Integration"],
            approach: "Implements form validation, responsive design, and integration with contact services for user interaction."
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
