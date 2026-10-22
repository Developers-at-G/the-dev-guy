'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/app/context/LanguageContext';
import {
  BLOG_CATEGORIES,
  countBlogByCategory,
  getBlogPostsByCategory,
  type BlogCategory,
} from '@/data/blog';

export default function BlogPage() {
  const { t, translations } = useLanguage();
  const [filter, setFilter] = useState<BlogCategory | 'all'>('all');
  const posts = getBlogPostsByCategory(filter);
  const counts = countBlogByCategory();
  const localized = translations.blogPosts;

  const labels: Record<BlogCategory | 'all', string> = {
    all: t('blog.filter_all', 'common'),
    engineering: t('blog.filter_engineering', 'common'),
    career: t('blog.filter_career', 'common'),
    learning: t('blog.filter_learning', 'common'),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" className="pt-16 sm:pt-20">
        <Section>
          <Container>
            <div className="mb-8">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">{t('blog.back_to_portfolio', 'common')}</Link>
              </Button>
            </div>

            <SectionHeader
              title={t('blog.title', 'common')}
              subtitle={t('blog.subtitle', 'common')}
              description={t('blog.description', 'common')}
            />

            <div
              className="mb-8 flex flex-wrap gap-2 border-b border-border pb-4"
              role="tablist"
              aria-label={t('blog.filter_label', 'common')}
            >
              {BLOG_CATEGORIES.map((cat) => {
                const active = filter === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(cat.id)}
                    className={`rounded-lg border px-3 py-1.5 text-ds-sm font-medium transition-colors ${
                      active
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                    }`}
                  >
                    {labels[cat.id]}
                    <span className="ml-1.5 tabular-nums opacity-60">
                      {counts[cat.id]}
                    </span>
                  </button>
                );
              })}
            </div>

            <ul className="divide-y divide-border border-y border-border">
              {posts.map((post) => {
                const content = localized[post.translationKey];
                return (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group -mx-4 block rounded-lg px-4 py-8 transition-colors hover:bg-accent/40 sm:-mx-6 sm:px-6"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-ds-xs text-muted-foreground">
                        <Badge variant="secondary" size="sm">
                          {labels[post.category]}
                        </Badge>
                        <time dateTime={post.date}>{post.date}</time>
                        <span aria-hidden>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="mt-2 text-ds-xl font-semibold tracking-tight text-foreground group-hover:underline group-hover:underline-offset-4 sm:text-ds-2xl">
                        {content.title}
                      </h2>
                      <p className="mt-2 max-w-2xl text-ds-sm leading-relaxed text-muted-foreground sm:text-ds-base">
                        {content.excerpt}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {posts.length === 0 && (
              <p className="py-12 text-center text-muted-foreground">
                {t('blog.empty_filter', 'common')}
              </p>
            )}
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
