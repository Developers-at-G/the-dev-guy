'use client';

import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import BlogHeader from '../../../components/blog/BlogHeader';
import { Container } from '../../../components/ui/Container';
import { BlogInteractions } from '../../../components/blog/BlogInteractions';
import { useLanguage } from '../../../app/context/LanguageContext';

export default function BlogPost() {
  const { t, translations } = useLanguage();
  const post = translations.blogPosts.ai_wont_replace;
  
  return (
    <BlogLayout backHref="/blog" backLabel={undefined}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <BlogHeader
            title={
              <>
                {post.title.split(' - ')[0]}
                <br />
                {post.title.split(' - ')[1]}
              </>
            }
            excerpt={post.excerpt}
            category="Development"
            date="January 2026"
            readTime="4 min"
            featured
          />

            <article className="prose prose-lg prose-invert max-w-none">
              <div className="bg-gradient-to-br from-white/5 via-background/80 to-accent/5 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-2xl p-8 md:p-12">
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  {post.content.section_1_title}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {post.content.section_1_paragraph_1}
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {post.content.section_1_paragraph_2}
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  {post.content.section_2_title}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">{post.content.section_2_paragraph_1}</strong>
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {post.content.section_2_paragraph_2}
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  {post.content.section_3_title}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {post.content.section_3_paragraph_1}
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {post.content.section_3_paragraph_2}
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {post.content.section_3_paragraph_3}
                </p>

                <div className="mt-16 pt-8 border-t border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AG</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Abdallah Gueye</p>
                      <p className="text-sm text-muted-foreground">{t('profile.software_engineer', 'common')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Interactions */}
            <BlogInteractions postSlug="ai-wont-replace-developers-it-will-change-how-we-build" />
        </div>
      </Container>
    </BlogLayout>
  );
}
