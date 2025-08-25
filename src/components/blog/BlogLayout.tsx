import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

interface BlogLayoutProps {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  backHref = '/',
  backLabel = 'Back to Portfolio'
}) => {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative py-8 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Button variant="outline" asChild>
              <Link href={backHref} className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {backLabel}
              </Link>
            </Button>
          </div>

          {children}
        </div>
      </div>
    </main>
  );
};

export default BlogLayout;
