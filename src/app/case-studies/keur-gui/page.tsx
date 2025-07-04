'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../../components/ThemeToggle';
import { useLanguage } from '../../context/LanguageContext';

function ClientKeurGuiCaseStudy() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background opacity-90" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-primary/30 text-primary font-semibold shadow hover:bg-primary/10 hover:text-primary-foreground transition-all duration-200 group"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
              <span>{t('casestudy.back')}</span>
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                {t('casestudy.case_study')}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight">
              Keur Gui Restaurant
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              Modern web application for a Senegalese restaurant featuring interactive menu system, online ordering, and weekly specials showcase.
            </p>
            
            {/* Project Meta */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-background/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Role</span>
                <div className="font-semibold text-foreground">{t('casestudy.full_stack')}</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Status</span>
                <div className="font-semibold text-foreground">{t('casestudy.completed_mvp')}</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Date</span>
                <div className="font-semibold text-foreground">May 31, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <Image
              src="/Images/keurguirestaurant.png"
              alt="Keur Gui Restaurant Website"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Project Summary */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t('casestudy.summary')}</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Developed a modern, responsive web application for Keur Gui Restaurant, a Senegalese restaurant in Dakar. 
                    The application features an interactive menu system, online ordering capabilities, and a comprehensive 
                    weekly menu showcase, all built with modern web technologies and best practices.
                  </p>
                  <p>
                    The project focused on creating a digital presence that would showcase authentic Senegalese cuisine 
                    to a wider audience while providing a seamless ordering experience for customers.
                  </p>
                </div>
              </div>

              {/* Problem Statement */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t('casestudy.problem')}</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>Keur Gui Restaurant needed a digital presence that would:</p>
                  <ul>
                    <li>Showcase their authentic Senegalese cuisine to a wider audience</li>
                    <li>Enable customers to browse their extensive menu with detailed descriptions</li>
                    <li>Provide an online ordering system for pickup and delivery</li>
                    <li>Display their weekly rotating menu in an engaging format</li>
                    <li>Create a professional, culturally authentic brand experience</li>
                  </ul>
                </div>
              </div>

              {/* Goals */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t('casestudy.goals')}</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <ul>
                    <li>Create a modern, responsive website optimized for all devices</li>
                    <li>Implement an interactive menu system with category filtering</li>
                    <li>Build a functional online ordering system</li>
                    <li>Design a weekly menu showcase with daily specials</li>
                    <li>Ensure cultural authenticity while maintaining international accessibility</li>
                    <li>Optimize for performance and SEO</li>
                  </ul>
                </div>
              </div>

              {/* Technical Implementation */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t('casestudy.implementation')}</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Frontend Technologies</h3>
                  <ul>
                    <li><strong>Next.js 15</strong> with App Router for optimal performance and SEO</li>
                    <li><strong>TypeScript</strong> for type safety and better development experience</li>
                    <li><strong>Tailwind CSS</strong> for responsive, modern UI design</li>
                    <li><strong>React Hooks</strong> for state management and component logic</li>
                    <li><strong>Lucide React</strong> for consistent iconography</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">Backend & Database</h3>
                  <ul>
                    <li><strong>Supabase</strong> for database management and serverless functions</li>
                    <li><strong>PostgreSQL</strong> database for order management and menu data</li>
                    <li><strong>Server Actions</strong> for secure order processing</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">Key Features Implemented</h3>
                  <ul>
                    <li><strong>Interactive Menu System:</strong> Categorized menu display with dynamic pricing and rich media integration</li>
                    <li><strong>Weekly Menu Showcase:</strong> Daily specials display with visual hierarchy and responsive design</li>
                    <li><strong>Order Management:</strong> Flexible order options with customer information collection</li>
                    <li><strong>User Experience:</strong> Mobile-first responsive design with loading states and error handling</li>
                  </ul>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t('casestudy.challenges')}</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Complex Menu Structure</h3>
                      <p><strong>Problem:</strong> Menu items had varying pricing structures (fixed prices vs. size-based options)</p>
                      <p><strong>Solution:</strong> Implemented flexible data structure with conditional rendering and modal dialogs for size selection</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Cultural Authenticity</h3>
                      <p><strong>Problem:</strong> Maintaining authentic Senegalese cultural elements while ensuring international accessibility</p>
                      <p><strong>Solution:</strong> Preserved original dish names with descriptive translations, used culturally appropriate imagery and color schemes</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Order Management Complexity</h3>
                      <p><strong>Problem:</strong> Handling various order types (pickup/delivery) with different requirements</p>
                      <p><strong>Solution:</strong> Implemented conditional form validation and flexible database schema</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lessons Learned */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t('casestudy.lessons')}</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <ul>
                    <li><strong>Cultural Sensitivity:</strong> Importance of preserving cultural authenticity in international projects</li>
                    <li><strong>Flexible Architecture:</strong> Benefits of building scalable systems from the start</li>
                    <li><strong>User Testing:</strong> Value of iterative design based on real user feedback</li>
                    <li><strong>Performance Optimization:</strong> Critical importance of mobile-first responsive design</li>
                  </ul>
                </div>
              </div>

              {/* Future Improvements */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t('casestudy.future')}</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <ul>
                    <li>Payment Gateway Integration (Stripe or local payment processor)</li>
                    <li>Real-time Order Tracking with live status updates</li>
                    <li>Customer Reviews System for user-generated content and ratings</li>
                    <li>Loyalty Program with customer rewards and discount system</li>
                    <li>Analytics Dashboard for business intelligence and order analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('casestudy.tech_stack')}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Supabase', 'PostgreSQL', 'Server Actions'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('casestudy.links')}</h3>
                <div className="space-y-3">
                  <a
                    href="https://keurguirestaurant.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center hover:bg-primary/90 transition-colors"
                  >
                    {t('common.view_live')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function KeurGuiCaseStudy() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientKeurGuiCaseStudy />;
} 