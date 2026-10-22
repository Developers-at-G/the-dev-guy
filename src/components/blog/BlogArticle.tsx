'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BlogInteractions } from '@/components/blog/BlogInteractions';
import { BlogPostBody } from '@/components/blog/BlogPostBody';
import { useLanguage } from '@/app/context/LanguageContext';
import type { BlogPostMeta } from '@/data/blog';
import { BLOG_CATEGORIES } from '@/data/blog';

interface BlogArticleProps {
  post: BlogPostMeta;
}

export function BlogArticle({ post }: BlogArticleProps) {
  const { t, translations } = useLanguage();
  const localized = translations.blogPosts[post.translationKey];
  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.id === post.category)?.label ?? post.category;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" className="pt-16 sm:pt-20 pb-16">
        <Container size="md" className="py-10 md:py-14">
          <Button variant="outline" size="sm" asChild className="mb-8">
            <Link href="/blog">{t('blog.back_to_blog', 'common')}</Link>
          </Button>

          <header className="mb-10 border-b border-border pb-8">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-ds-xs text-muted-foreground">
              <Badge variant="secondary">{categoryLabel}</Badge>
              <time dateTime={post.date}>{post.date}</time>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-ds-3xl font-semibold tracking-tight text-foreground md:text-ds-4xl">
              {localized.title}
            </h1>
            <p className="mt-4 max-w-2xl text-ds-base leading-relaxed text-muted-foreground sm:text-ds-lg">
              {localized.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <article>
            <BlogPostBody
              blocks={post.body}
              content={localized.content as Record<string, string>}
            />
          </article>

          <footer className="mt-12 flex items-center gap-4 border-t border-border pt-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary text-ds-sm font-semibold text-foreground">
              AG
            </div>
            <div>
              <p className="font-semibold text-foreground">Abdallah Gueye</p>
              <p className="text-ds-sm text-muted-foreground">
                {t('profile.software_engineer', 'common')}
              </p>
            </div>
          </footer>

          <div className="mt-10">
            <BlogInteractions postSlug={post.slug} />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
