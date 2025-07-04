'use client';
import React from 'react';
import Link from 'next/link';

export default function Blog() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-16 md:py-24 px-2 sm:px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-background" />
        <div className="container mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-primary/30 text-primary font-semibold shadow hover:bg-primary/10 hover:text-primary-foreground transition-all duration-200 group mb-8"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl md:text-7xl font-extrabold text-foreground mb-4 md:mb-6 tracking-tight">
              Blog
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 md:mb-4 font-medium">
              Thoughts on development, design, and building better software
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing insights from my journey as a software engineer, from technical deep-dives to career lessons learned.
            </p>
          </div>

          {/* Featured Article */}
          <div className="max-w-2xl md:max-w-4xl mx-auto mb-10 md:mb-16">
            <div className="bg-gradient-to-br from-white/10 via-background/80 to-accent/10 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-primary/20 shadow-2xl p-5 sm:p-8 md:p-12 hover:shadow-primary/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Featured Article
                </span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Development</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">June 4, 2024</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors">
                Why Building Real Projects Taught Me More Than Any Tutorial
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                There&apos;s something exciting about starting a new coding tutorial. You follow along, everything works, the UI looks clean — and you feel like you&apos;re learning. But then you try building something from scratch...
              </p>
              
              <p className="text-muted-foreground mb-4 md:mb-8 text-sm sm:text-base">
                Suddenly, nothing is handed to you. You&apos;re the one deciding how things should work, where to fetch data, how to handle empty states, loading states, slow networks, form validation, weird bugs. You realize quickly: tutorials are helpful, but they don&apos;t prepare you for the real mess of real apps.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Abdallah Gueye</p>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                
                <Link
                  href="/blog/why-building-real-projects-taught-me-more-than-any-tutorial"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/40 group/read"
                >
                  Read Article
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 transform group-hover/read:translate-x-1 transition-transform duration-300" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center">
            <div className="inline-block p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
                More Articles Coming Soon
              </h3>
              <p className="text-muted-foreground mb-4 md:mb-6 text-sm sm:text-base">
                I&apos;m working on more insightful articles about web development, design patterns, and career growth.
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs sm:text-sm text-muted-foreground">
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white/10 rounded-full">React & Next.js</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white/10 rounded-full">Web Development</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white/10 rounded-full">Career Growth</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white/10 rounded-full">Design Patterns</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 