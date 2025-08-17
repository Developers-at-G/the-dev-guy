'use client';
import React from 'react';
import { Section, SectionHeader } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { Badge } from '../../components/ui/Badge';
import BlogLayout from '../../components/blog/BlogLayout';
import BlogCard from '../../components/blog/BlogCard';

const blogPosts = [
  {
    title: 'Why Building Real Projects Taught Me More Than Any Tutorial',
    excerpt: 'There\'s something exciting about starting a new coding tutorial. You follow along, everything works, the UI looks clean — and you feel like you\'re learning. But then you try building something from scratch...',
    category: 'Development',
    date: 'December 2024',
    href: '/blog/why-building-real-projects-taught-me-more-than-any-tutorial',
    featured: true,
    readTime: '5 min'
  }
];

const upcomingTopics = [
  'React Performance Optimization',
  'Building Scalable Next.js Apps',
  'TypeScript Best Practices',
  'Career Growth for Developers',
  'Design Systems & Component Libraries',
  'Full-Stack Architecture Patterns'
];

export default function Blog() {
  return (
    <BlogLayout backHref="/" backLabel="Back to Portfolio">
      <Section>
        <Container>
          <SectionHeader
            title="Blog"
            subtitle="Insights on development, design, and building better software"
          />

          {/* Featured Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
            <div className="grid gap-6">
              {blogPosts.map((post, index) => (
                <BlogCard 
                  key={index} 
                  post={post} 
                  className={post.featured ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5' : ''}
                />
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-muted/50 to-background rounded-xl border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                More Articles Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm working on more insightful articles about web development, best practices, and career growth. Here's what's coming next:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {upcomingTopics.map((topic, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 bg-background rounded-lg border"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">React & Next.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Career Growth</Badge>
                <Badge variant="outline">Best Practices</Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </BlogLayout>
  );
} 