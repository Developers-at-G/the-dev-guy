'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationCompleteRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    
    if (!animationCompleteRef.current) {
      const cards = container?.querySelectorAll('.achievement-card');
      
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      animationCompleteRef.current = true;
    }
  }, []);

  return (
    <section className="min-h-screen py-20" id="achievement">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-white font-bold text-4xl md:text-6xl mb-4">
            Achievement
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Research papers and publications
          </p>
        </div>

        <div className="max-w-7xl mx-auto" ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Achievement Card 1 */}
            <div className="achievement-card group">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700/50">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  2024
                </div>
                <div className="relative aspect-[16/9] mb-6">
                  <Image
                    src="/Images/project.jpeg"
                    alt="Project 1"
                    fill
                    className="rounded-xl object-contain"
                    priority
                  />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  D-BRAILLE
                </h3>
                <p className="text-gray-400 mb-6">
                  Brief description of the research paper and its significance in the field.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    Usability Engineering
                  </span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                   Accessibility
                  </span>
                </div>
                <a
                  href="https://lnkd.in/eD5fkAdq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read Paper 
                  <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Achievement Card 2 */}
            <div className="achievement-card group">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700/50">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  2023
                </div>
                <div className="relative aspect-[16/9] mb-6">
                  <Image
                    src="/Images/project2.jpeg"
                    alt="Project 2"
                    fill
                    className="rounded-xl object-contain"
                    priority
                  />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  Application for Low Vision Users
                </h3>
                <p className="text-gray-400 mb-6">
                  Brief description of the research paper and its significance in the field.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    Usability Engineering
                  </span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    Accessibility
                  </span>
                </div>
                <a
                  href="https://lnkd.in/gnV8B98u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read Paper
                  <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
