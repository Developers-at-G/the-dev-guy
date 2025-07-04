'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleLineRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  // Add tech stack data
  const jobData = [
    {
      date: "JAN 2023 - PRESENT",
        image: { src: "/Images/smal.png", alt: "smal", width: 80, height: 80 },
      job: { 
        title: "Software Engineer", 
        company: "Smal Gmbh", 
        position: "Full Time",
        techStack: ["React", "Next JS", "Tailwind", "AWS", "More"]
      }
    },
    {
      date: "NOV 2022 - DEC 2023",
      image: { src: "/Images/future-stories.png", alt: "future-stories", width: 100, height: 100 },
      job: { 
        title: "Fullstack Developer", 
        company: "Future Stories", 
        position: "Working Student",
        techStack: ["Shopify Liquid", "React", "JQuery", "Javascript"]
      }
    },
    {
      date: "JAN 2020 - JUN 2020",
      image: { src: "/Images/Obertys.png", alt: "obertys", width: 100, height: 100 },
      job: { 
        title: "Frontend Developer", 
        company: "Obertys", 
        position: "Internship",
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
  }, []);

  return (
    <section className="w-full h-full" id="career">
      <div className="py-16 md:py-20">
        <h2 className="text-white text-center font-bold text-4xl md:text-6xl mb-2">Work Experience</h2>
        <div 
          ref={titleLineRef}
          className="h-1 bg-blue-500 mx-auto rounded-full"
        ></div>
      </div>

      <div className="py-10 md:py-28 px-4 md:px-0 flex justify-center items-center" ref={containerRef}>
        {/* Desktop layout */}
        <div className="hidden md:block w-full max-w-6xl relative">
          {/* Main timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500/20">
            <div ref={timelineRef} className="w-full bg-blue-500 rounded-full"></div>
          </div>

          {jobData.map((item, index) => (
            <div 
              key={index} 
              className={`career-row flex items-center gap-8 mb-32 last:mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content side */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 justify-end">
                    <Image 
                      src={item.image.src} 
                      alt={item.image.alt} 
                      width={item.image.width} 
                      height={item.image.height} 
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="text-white text-2xl font-bold">{item.job.title}</h3>
                  </div>
                  <div className="text-gray-300 text-lg">{item.job.company}</div>
                  <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm">
                    {item.job.position}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {item.job.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-sm bg-white/10 text-white/80 px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline marker */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
              </div>

              {/* Date side */}
              <div className="flex-1">
                <div className={`text-white/80 text-lg font-medium ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}>
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="md:hidden w-full max-w-lg space-y-12">
          {jobData.map((experience, index) => (
            <div key={index} className="career-row relative pl-8 border-l-2 border-blue-500/20">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2"></div>
              
              {/* Content */}
              <div className="space-y-4">
                <div className="text-white/80 text-sm font-medium">{experience.date}</div>
                <div className="flex items-center gap-3">
                  <Image 
                    src={experience.image.src} 
                    alt={experience.image.alt} 
                    width={experience.image.width} 
                    height={experience.image.height}
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="text-white text-xl font-bold">{experience.job.title}</h3>
                </div>
                <div className="text-gray-300">{experience.job.company}</div>
                <div className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  {experience.job.position}
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.job.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-sm bg-white/10 text-white/80 px-3 py-1 rounded-full"
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
    </section>
  );
};

export default Career;
