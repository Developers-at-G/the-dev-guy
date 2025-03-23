'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50, // Start below the viewport
        },
        {
          opacity: 1,
          y: 0, // Move to the original position
          duration: 1, // Animation duration
          ease: "power2.out", // Smooth easing
          scrollTrigger: {
            trigger: card, // The element to observe
            start: "top 80%", // Trigger when the top of the card reaches 80% of the viewport
            // toggleActions: "play none none reverse", // Play on scroll, reverse on scroll back
          },
        }
      );
    });

    return () => {
      // Clean up GSAP ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen py-20" id="education">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Education Journey
          </h2>
          <div className="w-24 h-1.5 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-400/20"></div>

          {[
            {
              imgSrc: "/Images/Master.png",
              imgAlt: "master-degree",
              duration: "2021 - 2023",
              degree: "Master in Applied Computer Science",
              institution: "SRH Heidelberg University",
              align: "right"
            },
            {
              imgSrc: "/Images/Bachelor.png",
              imgAlt: "bachelor-degree",
              duration: "2016 - 2020",
              degree: "Bachelor in Computer Engineering",
              institution: "Hasan Kalyoncu University",
              align: "left"
            },
          ].map((education, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`flex items-center gap-8 mb-20 ${
                education.align === "left" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-black"></div>

              {/* Content */}
              <div className={`w-1/2 ${education.align === "left" ? "text-right" : "text-left"}`}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 
                  text-sm font-medium border border-emerald-400/20 mb-4">
                  {education.duration}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {education.degree}
                </h3>
                <p className="text-lg text-emerald-400">
                  {education.institution}
                </p>
              </div>

              {/* Image */}
              <div className={`w-1/2 group`}>
                <div className="relative overflow-hidden rounded-2xl border border-neutral-800 
                  hover:border-emerald-400/30 transition-all duration-300">
                  <Image 
                    src={education.imgSrc} 
                    alt={education.imgAlt} 
                    width={600} 
                    height={400}
                    className="w-full h-auto transform transition-transform duration-500 
                      group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
