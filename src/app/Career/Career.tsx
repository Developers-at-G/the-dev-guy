'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function ClientCareer() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleLineRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  // Add tech stack data
  const jobData = [
    {
      date: "JAN 2023 - PRESENT",
        image: { src: "/Images/smal.png", alt: "smal", width: 80, height: 80 },
      job: { 
        title: t('experience.software_engineer'), 
        company: "Smal Gmbh", 
        position: t('experience.full_time'),
        techStack: ["React", "Next JS", "Tailwind", "AWS", "More"]
      }
    },
    {
      date: "NOV 2022 - DEC 2023",
      image: { src: "/Images/future-stories.png", alt: "future-stories", width: 100, height: 100 },
      job: { 
        title: t('experience.fullstack_developer'), 
        company: "Future Stories", 
        position: t('experience.working_student'),
        techStack: ["Shopify Liquid", "React", "JQuery", "Javascript"]
      }
    },
    {
      date: "JAN 2020 - JUN 2020",
      image: { src: "/Images/Obertys.png", alt: "obertys", width: 100, height: 100 },
      job: { 
        title: t('experience.frontend_developer'), 
        company: "Obertys", 
        position: t('experience.internship'),
        techStack: ["Angular", "ASP.NET Core", "SQL", "More"]
      }
    }
  ];

  useEffect(() => {
    const rows = containerRef.current?.querySelectorAll(".career-row");
    const mm = gsap.matchMedia();

    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Add title line animation
    gsap.fromTo(
      titleLineRef.current,
      {
        width: "0%",
        opacity: 0,
      },
      {
        width: "80px",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleLineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Add timeline animation
    gsap.fromTo(
      timelineRef.current,
      {
        height: "0%",
        opacity: 0,
      },
      {
        height: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Desktop animation setup
    mm.add("(min-width: 768px)", () => {
      if (rows) {
        rows.forEach((row) => {
          gsap.fromTo(
            row,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    });

    // Mobile animation setup
    mm.add("(max-width: 767px)", () => {
      if (rows) {
        gsap.fromTo(
          rows,
          {
            opacity: 0,
            y: 50,
            stagger: 0.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [t]); // Add t to dependencies

  return (
    <section className="w-full h-full" id="career">
      <div className="py-16 md:py-20">
        <h2 className="text-foreground text-center font-bold text-4xl md:text-6xl mb-2">{t('experience.title')}</h2>
        <div 
          ref={titleLineRef}
          className="h-1 bg-primary mx-auto rounded-full"
        ></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div ref={containerRef} className="relative">
            {/* Timeline line */}
            <div 
              ref={timelineRef}
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2"
            ></div>
            
            {jobData.map((experience, index) => (
              <div key={index} className={`career-row relative mb-20 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg border-4 border-background"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-background/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-primary/30 shadow-xl hover:shadow-primary/40 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <Image 
                        src={experience.image.src} 
                        alt={experience.image.alt} 
                        width={experience.image.width} 
                        height={experience.image.height}
                        className="w-16 h-16 object-contain"
                      />
                      <div>
                        <h3 className="text-foreground text-2xl font-bold">{experience.job.title}</h3>
                        <p className="text-muted-foreground text-lg">{experience.job.company}</p>
                      </div>
                    </div>
                    <div className="text-muted-foreground text-sm font-medium mb-3">{experience.date}</div>
                    <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {experience.job.position}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.job.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div ref={containerRef} className="space-y-8">
            {jobData.map((experience, index) => (
              <div key={index} className="career-row">
                <div className="bg-background/50 backdrop-blur-lg rounded-2xl p-6 border-2 border-primary/30 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Image 
                      src={experience.image.src} 
                      alt={experience.image.alt} 
                      width={experience.image.width} 
                      height={experience.image.height}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h3 className="text-foreground text-xl font-bold">{experience.job.title}</h3>
                      <p className="text-muted-foreground">{experience.job.company}</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground text-sm font-medium mb-3">{experience.date}</div>
                  <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {experience.job.position}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.job.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Career = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientCareer />;
};

export default Career;
