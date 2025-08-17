import React from 'react';
import { clsx } from 'clsx';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'featured' | 'muted';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'py-16',
      featured: 'py-20 bg-gradient-to-br from-primary/5 via-accent/3 to-background',
      muted: 'py-16 bg-muted/20'
    };

    return (
      <section
        ref={ref}
        className={clsx(variants[variant], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  className
}) => (
  <div className={clsx('text-center mb-12', className)}>
    {subtitle && (
      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4 inline-block">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
      {title}
    </h2>
    <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
    {description && (
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </div>
);
