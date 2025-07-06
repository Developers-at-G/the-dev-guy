import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';

export const metadata: Metadata = {
  title: "K-Gère Case Study - AG's Portfolio",
  description: "A detailed case study of K-Gère, a comprehensive Progressive Web App (PWA) for African restaurants with multi-restaurant support and real-time management.",
};

const KaderQuiGereCaseStudy = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-primary/40 via-accent/30 to-background opacity-90 blur-3xl" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-primary/30 text-primary font-semibold shadow-lg hover:bg-primary/20 hover:text-primary-foreground transition-all duration-300 group"
              aria-label="Back to Portfolio"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
              <span>Back to Portfolio</span>
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="mb-8">
            <span className="text-sm font-semibold text-primary bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30 shadow-lg">
              Case Study
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white text-center mb-8 tracking-tight drop-shadow-2xl animate-fade-in">
            K-Gère
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 text-center max-w-4xl drop-shadow-lg font-medium mb-12 leading-relaxed">
            Modern Restaurant Management System for African Markets
          </p>
          
          {/* Project Status */}
          <div className="flex items-center gap-6 text-white/90 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-base font-semibold">Live Production</span>
            </div>
            <span className="text-white/40 text-xl">•</span>
            <span className="text-base">Full-Stack PWA</span>
            <span className="text-white/40 text-xl">•</span>
            <span className="text-base">Multi-Restaurant Support</span>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-white/70 text-sm">User Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/70 text-sm">Offline Capable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">CFA</div>
              <div className="text-white/70 text-sm">Currency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Project Summary
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                K-Gère is a comprehensive Progressive Web App (PWA) designed specifically for African restaurants, 
                built with modern web technologies to provide a complete point-of-sale and management solution.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The system addresses the unique needs of restaurant operations in French-speaking African countries, 
                with support for CFA currency and multi-restaurant architecture for restaurant chains.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://kader-qui-gere.vercel.app/auth/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  View Live Demo
                </a>
                <a
                  href="https://github.com/abdallah96/kader-qui-gere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background border-2 border-primary/30 text-foreground px-8 py-4 rounded-xl hover:bg-primary/10 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-background rounded-3xl p-10 border border-primary/30 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-8">Key Features</h3>
              <div className="grid gap-6">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Multi-Restaurant Architecture</h4>
                    <p className="text-sm text-muted-foreground">Complete data isolation for restaurant chains</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Role-Based Access Control</h4>
                    <p className="text-sm text-muted-foreground">WAITER, KITCHEN, ADMIN roles with specific permissions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Real-Time Order Management</h4>
                    <p className="text-sm text-muted-foreground">Instant status updates and workflow management</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Advanced Analytics Dashboard</h4>
                    <p className="text-sm text-muted-foreground">Business intelligence with CFA currency support</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">PWA with Offline Capabilities</h4>
                    <p className="text-sm text-muted-foreground">Mobile app-like experience with offline functionality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Goals Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Problem */}
            <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                The Problem
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional restaurant management systems often lack essential features for African markets:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-muted-foreground">Multi-restaurant support for restaurant chains</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-muted-foreground">Local currency support (CFA - West African Franc)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-muted-foreground">Role-based access for different staff members</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-muted-foreground">Mobile-first design for on-the-go operations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-muted-foreground">Offline capabilities for unreliable internet connections</span>
                </li>
              </ul>
            </div>

            {/* Goals */}
            <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                Goals
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Create a comprehensive restaurant management solution</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Support multi-restaurant architecture for chains</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Implement role-based access control</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Build real-time order management system</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Provide advanced analytics and reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Ensure offline functionality for unreliable connections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl p-10 border border-blue-500/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">⚛️</span>
                </div>
                Frontend
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">Next.js 14</span>
                  <span className="text-blue-500 font-semibold">Framework</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">React 18</span>
                  <span className="text-blue-500 font-semibold">Library</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">TypeScript</span>
                  <span className="text-blue-500 font-semibold">Language</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">TailwindCSS</span>
                  <span className="text-blue-500 font-semibold">Styling</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">HeadlessUI</span>
                  <span className="text-blue-500 font-semibold">Components</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">Recharts</span>
                  <span className="text-blue-500 font-semibold">Charts</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-3xl p-10 border border-green-500/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🖥️</span>
                </div>
                Backend
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">Next.js API Routes</span>
                  <span className="text-green-500 font-semibold">Server</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">Prisma ORM</span>
                  <span className="text-green-500 font-semibold">Database</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">NextAuth.js</span>
                  <span className="text-green-500 font-semibold">Auth</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">TypeScript</span>
                  <span className="text-green-500 font-semibold">Language</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">Role-based Access</span>
                  <span className="text-green-500 font-semibold">Security</span>
                </div>
              </div>
            </div>

            {/* Database & Deployment */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-3xl p-10 border border-purple-500/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-4">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🗄️</span>
                </div>
                Infrastructure
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">PostgreSQL</span>
                  <span className="text-purple-500 font-semibold">Database</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">Vercel</span>
                  <span className="text-purple-500 font-semibold">Hosting</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">Neon/Supabase</span>
                  <span className="text-purple-500 font-semibold">DB Hosting</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">PWA</span>
                  <span className="text-purple-500 font-semibold">Progressive Web App</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-muted-foreground">GitHub</span>
                  <span className="text-purple-500 font-semibold">Version Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Technical Implementation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Multi-Restaurant Architecture */}
            <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Multi-Restaurant Architecture</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Complete data isolation between restaurants with all database queries filtered by restaurantId, 
                user authentication tied to specific restaurant, and scalable architecture for restaurant chains.
              </p>
            </div>

            {/* Role-Based Access Control */}
            <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔐</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Role-Based Access Control</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Three distinct user roles with specific permissions: WAITER (order management), KITCHEN (order preparation), 
                and ADMIN (full system access including analytics and user management).
              </p>
            </div>

            {/* Real-Time Order Management */}
            <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📋</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Real-Time Order Management</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive order workflow system with intuitive interface, visual status indicators, 
                instant updates, notes system for kitchen instructions, and table management.
              </p>
            </div>

            {/* Analytics Dashboard */}
            <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Analytics Dashboard</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Real-time business intelligence with revenue tracking in CFA currency, order analytics, 
                top selling items, category performance, and custom date ranges for flexible reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Technical Challenges & Solutions
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-background rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">⚠️</span>
                </div>
                Challenge 1: Multi-Tenant Data Isolation
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-500 mb-3">Problem</h4>
                  <p className="text-muted-foreground">Ensuring data security between different restaurants</p>
                </div>
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                  <h4 className="font-semibold text-green-500 mb-3">Solution</h4>
                  <p className="text-muted-foreground">All database queries filtered by restaurantId, user authentication includes restaurant association, API routes validate restaurant ownership, and database constraints prevent cross-restaurant access.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-background rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">⚠️</span>
                </div>
                Challenge 2: Real-Time Status Updates
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-500 mb-3">Problem</h4>
                  <p className="text-muted-foreground">Orders need instant status updates across devices</p>
                </div>
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                  <h4 className="font-semibold text-green-500 mb-3">Solution</h4>
                  <p className="text-muted-foreground">Optimistic UI updates with local state management, immediate visual feedback for status changes, background API calls for data persistence, and real-time data synchronization.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-background rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">⚠️</span>
                </div>
                Challenge 3: Offline Functionality
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-500 mb-3">Problem</h4>
                  <p className="text-muted-foreground">Restaurants need to operate with unreliable internet</p>
                </div>
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                  <h4 className="font-semibold text-green-500 mb-3">Solution</h4>
                  <p className="text-muted-foreground">Progressive Web App with service workers, local data caching for offline access, synchronization when connection restored, and graceful degradation for poor connectivity.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-background rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">⚠️</span>
                </div>
                Challenge 4: Currency Handling
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-500 mb-3">Problem</h4>
                  <p className="text-muted-foreground">Accurate CFA currency calculations and display</p>
                </div>
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                  <h4 className="font-semibold text-green-500 mb-3">Solution</h4>
                  <p className="text-muted-foreground">Integer storage for precise calculations (avoiding floating point errors), consistent formatting across the application, localized number formatting for French-speaking regions, and proper rounding and display rules.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Business Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Operational Efficiency</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>50% reduction</strong> in order processing time</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Real-time inventory</strong> tracking prevents stockouts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Automated reporting</strong> saves 2-3 hours daily</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Mobile accessibility</strong> improves staff productivity</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Financial Benefits</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Accurate pricing</strong> in CFA currency</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Detailed analytics</strong> for better decision making</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Reduced waste</strong> through stock management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Better cost control</strong> through detailed reporting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Scalability</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Multi-restaurant support</strong> for chain expansion</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Cloud-based deployment</strong> for easy scaling</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Modular architecture</strong> for feature additions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Performance optimization</strong> for high-volume operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Links Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Ready to Explore?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Experience the power of modern restaurant management technology designed specifically for African markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://kader-qui-gere.vercel.app/auth/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl hover:bg-primary/90 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              View Live Demo
            </a>
            <a
              href="https://github.com/abdallah96/kader-qui-gere"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border-2 border-primary/30 text-foreground px-10 py-5 rounded-2xl hover:bg-primary/10 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              View Source Code
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KaderQuiGereCaseStudy; 