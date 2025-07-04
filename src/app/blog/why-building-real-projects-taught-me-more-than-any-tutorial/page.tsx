'use client';
import React from 'react';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="container mx-auto relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-primary/30 text-primary font-semibold shadow hover:bg-primary/10 hover:text-primary-foreground transition-all duration-200 group mb-8"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Blog</span>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Featured Article
                </span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Development</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">June 4, 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
                Why Building Real Projects Taught Me More Than Any Tutorial
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                There&apos;s something exciting about starting a new coding tutorial. You follow along, everything works, the UI looks clean — and you feel like you&apos;re learning. But then you try building something from scratch...
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg prose-invert max-w-none">
              <div className="bg-gradient-to-br from-white/5 via-background/80 to-accent/5 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-2xl p-8 md:p-12">
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  There&apos;s something exciting about starting a new coding tutorial. You follow along, everything works, the UI looks clean — and you feel like you&apos;re learning.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  But then you try building something from scratch.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Suddenly, nothing is handed to you. You&apos;re the one deciding how things should work, where to fetch data, how to handle empty states, loading states, slow networks, form validation, weird bugs. You realize quickly: tutorials are helpful, but they don&apos;t prepare you for the real mess of real apps.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  📦 What Tutorials Don&apos;t Teach
                </h2>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">How to handle vague requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">What to do when an API fails</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">What happens when your design breaks on mobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">How to talk through bugs and edge cases with someone else</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">How to keep code clean even as features grow</span>
                  </li>
                </ul>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  All those things? I only started learning them when I stopped watching and started building.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  🧠 Real Projects = Real Thinking
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  When you&apos;re building your own app, you&apos;re not just copying code — you&apos;re making decisions. That&apos;s where the real growth happens. You search, test, refactor, hit bugs, fix them, hit new ones, and repeat.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  You don&apos;t just learn &quot;how to use React&quot; — you learn how to think like a developer.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  🛠 What Work Taught Me
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Working on real apps at my job pushed this even further.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Sometimes I ship something, feel good about it — then get feedback that it doesn&apos;t work quite right. Or that I missed tiny design details I hadn&apos;t even noticed. I go back, fix it, and still get more notes.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  That feedback loop — build, test, break, improve — is where I&apos;ve learned the most. Not just about code, but about quality, precision, and thinking clearly.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Sure, the feedback can be direct. Sometimes it stings. But I&apos;ve learned to treat it like a debugging tool for my own thinking. It keeps me sharp and helps me level up way faster than finishing a course ever did.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  🚀 The Bottom Line
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  If you&apos;re serious about improving as a developer, you have to build.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Not tutorials. Not clone apps with all the answers given. Real projects — where you don&apos;t know everything upfront, and you have to figure things out as you go.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  That&apos;s where the growth is. That&apos;s where the learning sticks.
                </p>

                {/* Author Info */}
                <div className="mt-16 pt-8 border-t border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AG</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Abdallah Gueye</p>
                      <p className="text-sm text-muted-foreground">Software Engineer & Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
} 