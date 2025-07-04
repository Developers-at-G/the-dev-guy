'use client';
import React from 'react';
import Image from 'next/image';

const Achievement = () => {

  return (
    <section className="relative py-32 overflow-hidden" id="achievement">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Research & Publications
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Academic research papers and publications in accessibility and usability engineering
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Research Paper 1 */}
          <div className="achievement-card group">
            <div className="bg-gradient-to-br from-white/10 via-background/80 to-accent/10 backdrop-blur-xl rounded-2xl border-2 border-primary/20 shadow-2xl p-8 hover:shadow-primary/40 transition-all duration-300 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/Images/Profile.jpg"
                    alt="Research Paper"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                      Research Paper
                    </span>
                    <span className="text-xs text-muted-foreground">2023</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Accessibility in Web Development
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Comprehensive study on implementing accessibility features in modern web applications, 
                    focusing on WCAG guidelines and user experience for people with disabilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">Accessibility</span>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">WCAG</span>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">UX Research</span>
              </div>
            </div>
          </div>

          {/* Research Paper 2 */}
          <div className="achievement-card group">
            <div className="bg-gradient-to-br from-white/10 via-background/80 to-accent/10 backdrop-blur-xl rounded-2xl border-2 border-primary/20 shadow-2xl p-8 hover:shadow-primary/40 transition-all duration-300 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/Images/Profile.jpg"
                    alt="Research Paper"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                      Research Paper
                    </span>
                    <span className="text-xs text-muted-foreground">2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Usability Engineering in Modern Web Apps
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Analysis of usability engineering principles applied to contemporary web applications, 
                    examining user interface design patterns and interaction methodologies.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">Usability</span>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">UI/UX</span>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">Design Patterns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
