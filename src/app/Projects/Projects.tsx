'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl: string;
  githubUrl?: string;
}

const projects: Project[] = [
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
  }
  
];

export default function Projects() {

  return (
    <section className="relative py-32  overflow-hidden">
      <div className="absolute inset-0 coder-background opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        {/* <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting digital experiences that make a difference
          </p>
        </div> */}
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${
                index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`relative ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div 
                    className="relative aspect-video rounded-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105"
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover cursor-pointer"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onClick={() => window.open(project.link, '_blank')}
                      role="link"
                      aria-label={`Visit ${project.title} project`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} relative`}>
                  <div className="space-y-6">
                    <div className="inline-block">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
                        Project {index + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-white text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        View Project
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/github inline-flex items-center gap-2 bg-white text-gray-800 px-8 py-3 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                        >
                          GitHub
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 transform group-hover/github:rotate-12 transition-transform duration-300" 
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 