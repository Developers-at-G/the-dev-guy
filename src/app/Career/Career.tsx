import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      date: "NOV 2023 - DEC 2022",
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
    <section className="coder-background w-full h-full" id="career">
      <div className="py-16 md:py-20">
        <h2 className="text-white text-center font-bold text-4xl md:text-6xl mb-2">Work Experience</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="py-10 md:py-28 px-4 md:px-0 flex justify-center items-center" ref={containerRef}>
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-20 lg:gap-40 w-full max-w-6xl">
          {/* Date column */}
          <div className="grid grid-rows-3 gap-20">
            {jobData.map((item, index) => (
              <div key={index} className="flex items-center justify-center text-white text-base md:text-lg career-row font-medium tracking-wider">
                {item.date}
              </div>
            ))}
          </div>
          
          {/* Logo column */}
          <div className="grid grid-rows-3 gap-20">
            {jobData.map((item, index) => (
              <div key={index} className="career-row flex justify-center items-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm transition-transform hover:scale-105">
                <Image 
                  src={item.image.src} 
                  alt={item.image.alt} 
                  width={item.image.width} 
                  height={item.image.height} 
                  className="w-[120px] h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Job details column */}
          <div className="grid grid-rows-3 gap-20">
            {jobData.map((item, index) => (
              <div key={index} className="w-full bg-white/90 backdrop-blur-sm rounded-2xl py-6 px-8 flex flex-col items-center justify-center career-row hover:bg-white transition-all duration-300 group">
                <span className="text-black text-2xl font-bold mb-2 text-center">{item.job.title}</span>
                <span className="text-gray-700 text-lg mb-1 group-hover:text-blue-600">{item.job.company}</span>
                <span className="text-gray-600 text-base bg-gray-200 px-3 py-1 rounded-full mb-4">{item.job.position}</span>
                <div className="flex flex-wrap justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.job.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden grid grid-cols-1 gap-8 w-full max-w-6xl">
          {jobData.map((experience, index) => (
            <div key={index} className="career-row bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center gap-6">
              <div className="text-white text-base font-medium tracking-wider">{experience.date}</div>
              <div className="flex justify-center bg-white/10 rounded-xl p-3 w-full">
                <Image 
                  src={experience.image.src} 
                  alt={experience.image.alt} 
                  width={experience.image.width} 
                  height={experience.image.height}
                  className="w-[100px] h-auto object-contain"
                />
              </div>
              <div className="w-full bg-white/90 backdrop-blur-sm rounded-2xl py-4 px-6 flex flex-col items-center justify-center">
                <span className="text-black text-xl font-bold mb-2 text-center">{experience.job.title}</span>
                <span className="text-gray-700 text-base mb-1">{experience.job.company}</span>
                <span className="text-gray-600 text-sm bg-gray-200 px-3 py-1 rounded-full mb-4">{experience.job.position}</span>
                <div className="flex flex-wrap justify-center gap-2">
                  {experience.job.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
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
