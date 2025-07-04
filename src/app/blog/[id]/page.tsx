'use client';
import React from 'react';
import Link from 'next/link';

export default function BlogPost() {
  // For now, redirect to the main blog page
  // In the future, this could be used for dynamic blog posts
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
        <p className="text-muted-foreground mb-8">This blog post doesn&apos;t exist yet.</p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300"
        >
          Back to Blog
        </Link>
      </div>
    </main>
  );
} 