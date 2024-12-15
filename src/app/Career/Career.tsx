import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rows = containerRef.current?.querySelectorAll(".career-row");

    if (rows) {
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          {
            opacity: 0,
            y: 50, // Start position (below the view)
          },
          {
            opacity: 1,
            y: 0, // End position (at its original location)
            duration: 1, // Animation duration
            ease: "power2.out", // Easing function for smooth effect
            scrollTrigger: {
              trigger: row, // The element that triggers the animation
              start: "top 80%", // Animation starts when top of the row hits 80% of the viewport height
              toggleActions: "play none none reverse", // Play on entering, reverse on leaving
            },
          }
        );
      });
    }

    return () => {
      // Cleanup ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-gray-800 w-full h-full" id="career">
      <div className="py-10">
        <p className="text-black text-center font-bold text-6xl text-white">Work Experience</p>
      </div>
      <div className="py-28 flex justify-center items-center" ref={containerRef}>
        <div className="grid grid-cols-3 gap-40">
          {/* Row 1: Dates */}
          <div className="grid grid-rows-3 gap-20">
            {["JAN 2023 - PRESENT", "DEC 2023 - NOV 2022", "JAN 2020 - JUN 2020"].map((date, index) => (
              <div key={index} className="flex items-center justify-center text-white career-row">
                {date}
              </div>
            ))}
          </div>

          {/* Row 2: Images */}
          <div className="grid grid-rows-3 gap-20">
            {[
              { src: "/Images/smal.png", alt: "smal", width: 80, height: 80 },
              { src: "/Images/Obertys.png", alt: "obertys", width: 100, height: 100 },
              { src: "/Images/future-stories.png", alt: "future-stories", width: 100, height: 100 },
            ].map((image, index) => (
              <div key={index} className="career-row">
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
              </div>
            ))}
          </div>

          {/* Row 3: Job Details */}
          <div className="grid grid-rows-3 gap-20">
            {[
              { title: "Software Engineer", company: "Smal Gmbh" },
              { title: "Frontend Developer", company: "Future Stories" },
              { title: "Fullstack Developer", company: "Obertys" },
            ].map((job, index) => (
              <div
                key={index}
                className="w-full h-full bg-white rounded-2xl py-4 px-6 flex flex-col items-center justify-center career-row"
              >
                <span className="text-black text-xl">{job.title}</span>
                <span className="text-black text-base">{job.company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
