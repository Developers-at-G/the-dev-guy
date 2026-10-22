import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts, getBlogPost } from '@/data/blog';
import { BlogArticle } from '@/components/blog/BlogArticle';
import { getTranslations } from '@/lib/translations';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Post not found' };

  const en = getTranslations('en').blogPosts[post.translationKey];
  return {
    title: en.title,
    description: en.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogArticle post={post} />;
}
