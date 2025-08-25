import React from 'react';
import { Badge } from '../ui/Badge';

interface BlogHeaderProps {
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  readTime?: string;
  featured?: boolean;
  author?: {
    name: string;
    title: string;
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
  author = {
    name: 'Abdallah Gueye',
    title: 'Software Engineer'
  }
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

      <div className="flex items-center gap-4 pt-6 border-t border-border">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">AG</span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.title}</p>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
