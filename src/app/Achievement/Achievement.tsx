import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationCompleteRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    
    if (!animationCompleteRef.current) {
      const tl = gsap.fromTo(
        container,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            animationCompleteRef.current = true;
          },
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <section className="coder-background w-full h-full" id="achievement">
      <div className="py-10 space-y-2">
        <p className="text-white text-center font-bold text-4xl md:text-6xl">Achievement</p>
        <p className="text-gray-400 text-center text-lg md:text-xl">Notable research papers and publications</p>
      </div>
      <div className="py-10 md:py-28 px-4 md:px-0" ref={containerRef}>
        <Splide
          options={{
            type: "loop",
            gap: "40px",
            drag: "free",
            arrows: false,
            pagination: true,
            perPage: 1,
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: 0.7,
            },
          }}
          extensions={{ AutoScroll }}
          className="max-w-5xl mx-auto"
        >
          <SplideSlide>
            <a href="https://lnkd.in/eD5fkAdq" 
               className="relative block group touch-manipulation will-change-transform rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300" 
               target="_blank"
            >
              <Image
                src="/Images/project.jpeg"
                alt="Project 1"
                width={1920}
                height={1080}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110 scale-100 transform-gpu"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <p className="text-white text-xl md:text-2xl font-bold mb-2">Research Paper Title</p>
                  <p className="text-gray-200 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to read the full paper →</p>
                </div>
              </div>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="https://lnkd.in/gnV8B98u" 
               className="relative block group touch-manipulation will-change-transform rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300" 
               target="_blank"
            >
              <Image
                src="/Images/project2.jpeg"
                alt="Project 2"
                width={1920}
                height={1080}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110 scale-100 transform-gpu"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xl md:text-2xl font-bold mb-2">Research Paper Title</p>
                  <p className="text-gray-200 text-sm md:text-base">Click to read the full paper →</p>
                </div>
              </div>
            </a>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Achievement;
