import React from 'react';
import { Badge } from '../ui/Badge';

interface BlogHeaderProps {
  title: string | React.ReactNode;
  excerpt?: string;
  category: string;
  date: string;
  readTime?: string;
  featured?: boolean;
  author?: {
    name?: string;
    title?: string;
    avatar?: string;
  };
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  excerpt,
  category,
  date,
  readTime,
  featured = false,
}) => {
  return (
    <header className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        {featured && (
          <Badge variant="default" className="bg-primary text-primary-foreground">
            Featured Article
          </Badge>
        )}
        <span className="text-sm text-muted-foreground">{category}</span>
        <span className="text-xs text-muted-foreground">•</span>
        <span className="text-sm text-muted-foreground">{date}</span>
        {readTime && (
          <>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{readTime} read</span>
          </>
        )}
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
        {title}
      </h1>
      
      {excerpt && (
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          {excerpt}
        </p>
      )}
    </header>
  );
};

export default BlogHeader;
