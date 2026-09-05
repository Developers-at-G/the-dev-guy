import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
  featured?: boolean;
  readTime?: string;
}

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {post.featured && (
            <Badge variant="default" className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          <span className="text-sm text-muted-foreground">{post.category}</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{post.date}</span>
          {post.readTime && (
            <>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </>
          )}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">AG</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Abdallah Gueye</p>
              <p className="text-xs text-muted-foreground">Software Engineer</p>
            </div>
          </div>
          
          <Button variant="outline" size="sm" asChild>
            <Link href={post.href} className="flex items-center gap-2">
              Read More
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
