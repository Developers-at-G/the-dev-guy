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

  useEffect(() => {
    const container = containerRef.current;
    
    gsap.fromTo(
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
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-gray-800 w-full h-full" id="achievement">
      <div className="py-10">
        <p className="text-white text-center font-bold text-4xl md:text-6xl">Achievement</p>
      </div>
      <div className="py-10 md:py-28 px-4 md:px-0" ref={containerRef}>
        <Splide
          options={{
            type: "loop",
            gap: "30px",
            drag: "free",
            arrows: false,
            pagination: true,
            perPage: 1.5,
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: 0.3,
            },
          }}
          extensions={{ AutoScroll }}
          className="max-w-4xl mx-auto"
        >
          <SplideSlide>
            <a href="https://lnkd.in/eD5fkAdq" className="relative block group touch-manipulation will-change-transform" target="_blank">
              <Image
                src="/Images/project.jpeg"
                alt="Project 1"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-105 scale-100 transform-gpu"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                <p className="text-white text-lg md:text-2xl font-bold px-4 text-center">Go to paper</p>
              </div>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="https://lnkd.in/gnV8B98u" className="relative block group touch-manipulation will-change-transform" target="_blank">
              <Image
                src="/Images/project2.jpeg"
                alt="Project 2"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-105 scale-100 transform-gpu"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                <p className="text-white text-lg md:text-2xl font-bold px-4 text-center">Go to paper</p>
              </div>
            </a>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Achievement;
