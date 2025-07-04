'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function ClientEducation() {
  const { t } = useLanguage();
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // GSAP animations for cards
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
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
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-32 overflow-hidden" id="education">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              {t('education.subtitle')}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            {t('education.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            {t('education.description')}
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/20 rounded-full"></div>
            
            {/* Education Cards */}
            <div className="space-y-12">
              {/* Bachelor's Degree */}
              <div 
                ref={(el) => {
                  if (el) cardsRef.current[0] = el;
                }}
                className="achievement-card relative pl-20"
              >
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                <div className="bg-gradient-to-br from-white/10 via-background/80 to-accent/10 backdrop-blur-xl rounded-2xl border-2 border-primary/20 shadow-2xl p-8 hover:shadow-primary/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src="/Images/Bachelor.png"
                        alt={t('education.bachelor_degree')}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          2018 - 2022
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">
                          {t('education.bachelor_degree')}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {t('education.computer_science')}
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-3">
                        {t('education.university')}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('education.bachelor_desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Master's Degree */}
              <div 
                ref={(el) => {
                  if (el) cardsRef.current[1] = el;
                }}
                className="achievement-card relative pl-20"
              >
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                <div className="bg-gradient-to-br from-white/10 via-background/80 to-accent/10 backdrop-blur-xl rounded-2xl border-2 border-primary/20 shadow-2xl p-8 hover:shadow-primary/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src="/Images/Master.png"
                        alt={t('education.master_degree')}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          2022 - 2024
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">
                          {t('education.master_degree')}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {t('education.applied_computer_science')}
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-3">
                        {t('education.university')}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('education.master_desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Education = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientEducation />;
};

export default Education;
