'use client';
import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import BlogHeader from '../../../components/blog/BlogHeader';
import { Container } from '../../../components/ui/Container';

export default function BlogPost() {
  return (
    <BlogLayout backHref="/blog" backLabel="Back to Blog">
      <Container>
        <div className="max-w-4xl mx-auto">
          <BlogHeader
            title="AI Won't Replace Developers — It Will Change How We Build"
            excerpt="There's a lot of noise lately about AI replacing developers. I don't buy it. What AI is doing is speeding up development — sometimes a lot. But speed alone doesn't build good software."
            category="Development"
            date="January 2025"
            readTime="4 min"
            featured={true}
          />

            <article className="prose prose-lg prose-invert max-w-none">
              <div className="bg-gradient-to-br from-white/5 via-background/80 to-accent/5 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-2xl p-8 md:p-12">
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  There&apos;s a lot of noise lately about AI replacing developers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I don&apos;t buy it.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  What AI is doing is speeding up development sometimes a lot. But speed alone doesn&apos;t build good software.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  🤖 What AI Actually Does
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  AI can generate code, suggest solutions, and help with repetitive work. That&apos;s useful. I use it. But it doesn&apos;t actually understand the product, the users, or the long-term consequences of a technical decision.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  In practice, AI often overcomplicates simple problems. It introduces abstractions you don&apos;t need, solves the wrong thing confidently, or misses issues that are obvious once you actually understand how the codebase works. Spotting those problems still requires a developer who knows what they&apos;re doing.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  🔑 The Key Point
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">AI needs developers who understand code, not the other way around.</strong>
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Used well, AI is a productivity boost. Used blindly, it creates fragile systems that are hard to maintain. The difference isn&apos;t the tool it&apos;s the person using it.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  🎯 The Real Skill Going Forward
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I think the real skill going forward isn&apos;t competing with AI, but learning how to control it. Knowing when to accept a suggestion, when to simplify it, and when to throw it away completely.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  AI should speed us up, not replace our thinking.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We still need to understand the code we ship — and take responsibility for it.
                </p>

                <div className="mt-16 pt-8 border-t border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AG</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Abdallah Gueye</p>
                      <p className="text-sm text-muted-foreground">Frontend / Product Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
        </div>
      </Container>
    </BlogLayout>
  );
}

