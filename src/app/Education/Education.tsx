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
    <section className="bg-white w-full h-full" id="education">
      <div className="py-10">
        <div className="text-black text-center font-bold text-6xl">Education</div>
      </div>
      <div className="py-28 flex justify-center items-center gap-10">
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
            className="relative w-max-content h-max-content bg-gray-800 p-8 flex flex-col rounded-xl justify-center items-center gap-5"
          >
            <div className="transition-transform duration-700 ease-out hover:scale-110">
              <Image src={education.imgSrc} alt={education.imgAlt} width={400} height={300} />
            </div>
            <div className="text-white flex flex-col gap-2 items-center justify-center font-bold">
              <div>{education.duration}</div>
              <div>{education.degree}</div>
              <div className="text-white text-bold text-xl uppercase">{education.institution}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
