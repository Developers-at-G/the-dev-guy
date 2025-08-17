import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';

export const metadata: Metadata = {
  title: "DevTrackr Case Study",
  description: "DevTrackr - a task and journaling app built with React and Node.js",
};

const DevTrackrCaseStudy = () => {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[50vh] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-primary/30 via-accent/20 to-background opacity-90 blur-2xl" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-primary/30 text-primary font-semibold shadow hover:bg-primary/10 hover:text-primary-foreground transition-all duration-200 group"
              aria-label="Back to Portfolio"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
              <span>Back to Portfolio</span>
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="mb-6">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Case Study
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-6 tracking-tight drop-shadow-2xl">
            DevTrackr
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl drop-shadow-lg font-medium mb-8">
            A modern task and journaling app built with full-stack technologies
          </p>
          
          {/* Project Status */}
          <div className="flex items-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Completed MVP</span>
            </div>
            <span className="text-white/40">•</span>
            <span className="text-sm">Full-Stack Development</span>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Project Summary
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                DevTrackr is a modern task and journaling app built with full-stack technologies like React, Node.js, and PostgreSQL. 
                It focuses on providing a clean, fast, and useful productivity experience without the bloat of traditional tools.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The project was born from a personal need for a productivity tool that was neither too complex nor too simple, 
                and served as a hands-on learning experience for full-stack development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-background rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">JWT Authentication with bcrypt</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Task management (CRUD operations)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Journal entry system</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Theme switching</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Responsive, mobile-first UI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Goals Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/3 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem */}
            <div className="bg-background/50 backdrop-blur-xl rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                The Problem
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most productivity tools are either too bloated with unnecessary features or overly simple. 
                I wanted something fast, clean, and useful — and I wanted to build it myself to learn full-stack development hands-on.
              </p>
            </div>

            {/* Goals */}
            <div className="bg-background/50 backdrop-blur-xl rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                Goals
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Learn full-stack app architecture hands-on
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Implement secure authentication (JWT + bcrypt)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Create a smooth and responsive user experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Build something I could use and improve over time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">⚛️</span>
                Frontend
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>React</li>
                <li>Headless UI</li>
                <li>Tailwind CSS</li>
                <li>Context API</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">🖥️</span>
                Backend
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Node.js</li>
                <li>Express</li>
                <li>JWT</li>
                <li>bcrypt</li>
              </ul>
            </div>

            {/* Database & Deployment */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">🗄️</span>
                Database & Deployment
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>PostgreSQL</li>
                <li>Prisma ORM</li>
                <li>Vercel</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/3 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Technical Implementation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• React for the frontend</li>
                <li>• Node.js & Express for the API</li>
                <li>• PostgreSQL database</li>
                <li>• JWT authentication</li>
                <li>• Prisma ORM</li>
              </ul>
            </div>
            <div className="bg-background/50 rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Task management with completion tracking</li>
                <li>• Daily journaling with mood tracking</li>
                <li>• Weekly progress reports</li>
                <li>• Responsive design</li>
                <li>• Secure user authentication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-10 md:py-20 px-2 sm:px-4 bg-gradient-to-br from-primary/5 via-accent/3 to-background">
        <div className="container mx-auto max-w-xl md:max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-6 md:mb-12">
            Challenges & Solutions
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            <div className="bg-background/50 backdrop-blur-xl rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">1. Managing Auth State</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Challenge:</strong> Persisting authentication state across components and page refreshes.<br/>
                <strong>Solution:</strong> Used React Context to manage auth state globally, with localStorage for persistence.
              </p>
            </div>

            <div className="bg-background/50 backdrop-blur-xl rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">2. User Data Isolation</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Challenge:</strong> Ensuring users can only access their own data securely.<br/>
                <strong>Solution:</strong> Implemented secure checks at the API level with JWT token validation and user ID verification.
              </p>
            </div>

            <div className="bg-background/50 backdrop-blur-xl rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">3. Responsive UI</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Challenge:</strong> Creating a seamless experience across mobile and desktop devices.<br/>
                <strong>Solution:</strong> Planned layout early using Tailwind&apos;s utility classes and media queries for mobile-first design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned Section */}
      <section className="py-10 md:py-20 px-2 sm:px-4 bg-gradient-to-br from-primary/5 via-accent/3 to-background">
        <div className="container mx-auto max-w-xl md:max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-6 md:mb-12">
            Lessons Learned
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-background/50 backdrop-blur-xl rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Development Insights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Full-stack development = solving real problems, not just code</li>
                <li>• Clean architecture and naming saves debugging time</li>
                <li>• Authentication flows are tricky, but rewarding to learn</li>
              </ul>
            </div>

            <div className="bg-background/50 backdrop-blur-xl rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">UX Insights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Small UI details (themes, transitions, responsiveness) elevate UX</li>
                <li>• Mobile-first design pays off in user satisfaction</li>
                <li>• Performance optimization is crucial for user retention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Improvements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Future Improvements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl p-6 border border-green-500/20 text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold text-foreground mb-2">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">Shared workspaces and team management features</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-6 border border-blue-500/20 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-foreground mb-2">AI Insights</h3>
              <p className="text-sm text-muted-foreground">AI-generated productivity insights and recommendations</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl p-6 border border-purple-500/20 text-center">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-bold text-foreground mb-2">Calendar Integration</h3>
              <p className="text-sm text-muted-foreground">Sync with Google Calendar and other calendar services</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl p-6 border border-orange-500/20 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-foreground mb-2">Mobile App</h3>
              <p className="text-sm text-muted-foreground">Native mobile version using React Native or Expo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/3 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Project Links
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://your-vercel-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/20"
            >
              <span>🌐</span>
              Live Demo
            </a>
            
            <a
              href="https://github.com/yourname/devtrackr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-background border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-200"
            >
              <span>📁</span>
              Source Code
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DevTrackrCaseStudy; 