'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl: string;
  githubUrl?: string;
  gallery?: string[]; // Added for DevTrackr
}

const projects: Project[] = [
  {
    id: 4,
    title: "DevTrackr",
    description: "A modern productivity app for tracking tasks and journaling. Features secure JWT auth, real-time data, PWA support, and a beautiful responsive UI. Built with React, Node.js, PostgreSQL, Prisma, and Headless UI.",
    technologies: [
      "React", "Node.js", "PostgreSQL", "Prisma", "JWT", "Headless UI", "Vercel", "PWA"
    ],
    link: "https://devtrackr-ag.vercel.app",
    imageUrl: "/Images/devtrackr-dashboard.png",
    githubUrl: "https://github.com/abdallah96/devtrackr"
  },
  {
    id: 1,
    title: "Keur gui restaurant",
    description: "This is a restaurant website that I have built using Next.js, TypeScript, Tailwind CSS. I use supabase for the database, and have a dashboard for the admin to manage the restaurant. I also use AWS to host the website.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React", "AWS"],
    link: "https://keurguirestaurant.com",
    imageUrl: "/Images/keurguirestaurant.png"
  },
  {
    id: 2,
    title: "Real estate website",
    description: "A front end website built with Next JS, using React, Tailwind CSS, and Framer Motion for my scroll animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next JS"],
    link: "https://seradi.vercel.app",
    imageUrl: "/Images/atlanticimmo.png"
  },
  {
    id: 3,
    title: "Agro trade services",
    description: " This is a website doing trade and logistics. I use React to build this website and as a CMS I use Sanity.io",
    technologies: ["React", "Sanity.io", "Tailwind CSS", "Next JS"],
    link: "https://am-agrotradeservices.de",
      imageUrl: "/Images/am-agrotradeservices.png"
  },
];

export default function Projects() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            A showcase of my recent work and technical projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-background/80 to-accent/10 backdrop-blur-xl border-2 border-primary/20 shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-2 ${
                index % 2 === 0 ? 'lg:translate-y-8' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/live inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/40"
                  >
                    Live Demo
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 transform group-hover/live:translate-x-1 transition-transform duration-300" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </Link>
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/github inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-foreground px-6 py-3 rounded-xl border border-white/20 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 font-semibold"
                    >
                      GitHub
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 transform group-hover/github:rotate-12 transition-transform duration-300" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
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