import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      <div className="py-10">
        <p className="text-white text-center font-bold text-4xl md:text-6xl">Work Experience</p>
      </div>
      <div className="py-10 md:py-28 px-4 md:px-0 flex justify-center items-center" ref={containerRef}>
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-40 w-full max-w-6xl">
          {/* Original desktop layout columns */}
          <div className="grid grid-rows-3 gap-20">
            {["JAN 2023 - PRESENT", "DEC 2023 - NOV 2022", "JAN 2020 - JUN 2020"].map((date, index) => (
              <div key={index} className="flex items-center justify-center text-white text-base md:text-xl career-row">
                {date}
              </div>
            ))}
          </div>
          
          <div className="grid grid-rows-3 gap-20">
            {[
              { src: "/Images/smal.png", alt: "smal", width: 60, height: 60 },
              { src: "/Images/Obertys.png", alt: "obertys", width: 80, height: 80 },
              { src: "/Images/future-stories.png", alt: "future-stories", width: 80, height: 80 },
            ].map((image, index) => (
              <div key={index} className="career-row flex justify-center">
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="w-auto h-auto" />
              </div>
            ))}
          </div>

          <div className="grid grid-rows-3 gap-20">
            {[
              { title: "Software Engineer", company: "Smal Gmbh" },
              { title: "Frontend Developer", company: "Obertys" },
              { title: "Fullstack Developer", company: "Future Stories" },
            ].map((job, index) => (
              <div key={index} className="w-full bg-white rounded-2xl py-4 px-6 flex flex-col items-center justify-center career-row">
                <span className="text-black text-xl text-center">{job.title}</span>
                <span className="text-black text-base text-center">{job.company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden grid grid-cols-1 gap-8 w-full max-w-6xl">
          {[
            { 
              date: "JAN 2023 - PRESENT",
              image: { src: "/Images/smal.png", alt: "smal", width: 60, height: 60 },
              job: { title: "Software Engineer", company: "Smal Gmbh" }
            },
            {
              date: "DEC 2023 - NOV 2022",
              image: { src: "/Images/Obertys.png", alt: "obertys", width: 80, height: 80 },
              job: { title: "Frontend Developer", company: "Obertys" }
            },
            {
              date: "JAN 2020 - JUN 2020",
              image: { src: "/Images/future-stories.png", alt: "future-stories", width: 80, height: 80 },
              job: { title: "Fullstack Developer", company: "Future Stories" }
            }
          ].map((experience, index) => (
            <div key={index} className="career-row bg-gray-700 rounded-lg p-4 flex flex-col items-center gap-4">
              <div className="text-white text-base md:text-lg text-center">{experience.date}</div>
              <div className="flex justify-center">
                <Image 
                  src={experience.image.src} 
                  alt={experience.image.alt} 
                  width={experience.image.width} 
                  height={experience.image.height}
                  className="w-auto h-auto"
                />
              </div>
              <div className="w-full bg-white rounded-2xl py-3 px-4 flex flex-col items-center justify-center">
                <span className="text-black text-lg text-center">{experience.job.title}</span>
                <span className="text-black text-sm text-center">{experience.job.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
