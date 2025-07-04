'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    title: "devtrackr",
    description: "devtrackr_desc",
    image: "/Images/devtrackr-dashboard.png",
    technologies: [
      "React", "Node.js", "PostgreSQL", "Prisma", "JWT", "Headless UI", "Vercel", "PWA"
    ],
    link: "https://devtrackr-ag.vercel.app",
    caseStudy: "/case-studies/devtrackr",
    githubUrl: "https://github.com/abdallah96/devtrackr",
  },
  {
    title: "keurgui",
    description: "keurgui_desc",
    image: "/Images/keurguirestaurant.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React", "AWS"],
    link: "https://keurguirestaurant.com",
    caseStudy: "/case-studies/keur-gui",
  },
  {
    title: "realestate",
    description: "realestate_desc",
    image: "/Images/atlanticimmo.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next JS"],
    link: "https://seradi.vercel.app",
  },
  {
    title: "agro",
    description: "agro_desc",
    image: "/Images/am-agrotradeservices.png",
    technologies: ["React", "Sanity.io", "Tailwind CSS", "Next JS"],
    link: "https://am-agrotradeservices.de",
  },
];

function ClientProjects() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-background" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            {t('projects.description')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative bg-background/50 backdrop-blur-lg rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(`projects.${project.title}_title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/90 text-sm leading-relaxed">{t(`projects.${project.description}`)}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {t(`projects.${project.title}_title`)}
                </h3>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/live inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t('common.view_live')}
                  </Link>

                  {project.caseStudy && (
                    <Link
                      href={project.caseStudy}
                      className="group/case inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg border border-white/20 hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {t('projects.case_study')}
                    </Link>
                  )}

                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/github inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg border border-white/20 hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.337 1.839 1.337.896 1.307 2.353 1.003 2.928.752.092-.564.351-.752.639-.752.351 0 .721.108 1.077.324.356.216.744.648 1.059 1.059.315.411.648.703 1.059 1.059.356.216.721.324 1.077.324.288 0 .547-.188.639-.752.575-.251 2.032-.555 2.928-.752.896-.197 1.755-.853 1.839-1.337.084-.484.083-.645.083-.645 0-.316.194-.688.793-.577 4.769 1.587 8.207 6.085 8.207 11.387 0 6.627-5.373 12-12 12z"/>
                      </svg>
                      {t('common.view_code')}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Projects = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientProjects />;
};

export default Projects; 