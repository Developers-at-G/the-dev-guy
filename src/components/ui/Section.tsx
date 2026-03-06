'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'featured' | 'muted' | 'journey';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', children, id, ...props }, ref) => {
    const variants = {
      default: 'py-section md:py-section-lg',
      featured: 'py-section md:py-section-lg bg-gradient-to-br from-primary/5 via-accent/3 to-background',
      muted: 'py-section md:py-section-lg bg-muted/20',
      journey: 'py-section md:py-section-lg journey-bg'
    };

    return (
      <section
        ref={ref}
        id={id}
        className={clsx(variants[variant], id && 'scroll-mt-24', className)}
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
  <motion.div
    className={clsx('text-center mb-gap-section md:mb-10', className)}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    {subtitle && (
      <span className="text-ds-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4 inline-block">
        {subtitle}
      </span>
    )}
    <h2 className="text-ds-3xl md:text-ds-5xl font-extrabold text-foreground tracking-tight leading-tight">
      {title}
    </h2>
    <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
    {description && (
      <p className="mt-4 text-ds-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);
