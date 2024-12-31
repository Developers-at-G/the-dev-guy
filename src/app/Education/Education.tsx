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
    <section className="bg-white w-full h-full coder-background" id="education">
      <div className="py-5 sm:py-10">
        <div className="text-white text-center font-bold text-3xl sm:text-6xl">Education</div>
      </div>
      <div className="py-10 sm:py-28 flex flex-col sm:flex-row justify-center items-center gap-10 px-4 sm:px-0">
        {[
          {
            imgSrc: "/Images/Master.png",
            imgAlt: "master-degree",
            duration: "2021 - 2023",
            degree: "Master in Applied Computer Science",
            institution: "SRH Heidelberg University",
          },
          {
            imgSrc: "/Images/Bachelor.png",
            imgAlt: "bachelor-degree",
            duration: "2016 - 2020",
            degree: "Bachelor in Computer Engineering",
            institution: "Hasan Kalyoncu University",
          },
        ].map((education, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="relative w-full sm:w-max-content h-max-content backdrop-blur-md bg-black/30 border border-gray-500/30 
            shadow-[0_0_15px_rgba(0,0,0,0.2)] p-4 sm:p-8 flex flex-col rounded-xl justify-center items-center gap-5 
            hover:bg-black/40 hover:border-gray-400/40 transition-all duration-300"
          >
            <div className="transition-transform duration-700 ease-out hover:scale-110">
              <Image 
                src={education.imgSrc} 
                alt={education.imgAlt} 
                width={400} 
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="text-white flex flex-col gap-3 items-center justify-center">
              <div className="text-gray-300 font-medium">{education.duration}</div>
              <div className="text-center font-bold text-lg sm:text-xl">{education.degree}</div>
              <div className="text-emerald-400 font-bold text-lg sm:text-xl uppercase text-center">{education.institution}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
