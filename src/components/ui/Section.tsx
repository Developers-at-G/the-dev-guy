'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

/** Matches --duration-slow / --ease-out-smooth in globals.css (Framer needs JS values). */
const motionTransition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'muted';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', children, id, ...props }, ref) => {
    const variants = {
      default: 'py-section md:py-section-lg',
      muted: 'py-section md:py-section-lg bg-muted/40 border-y border-border',
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

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  align = 'left',
  className,
}) => (
  <motion.div
    className={clsx(
      'mb-gap-section md:mb-10',
      align === 'center' && 'text-center',
      className
    )}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={motionTransition}
  >
    {subtitle && (
      <p
        className={clsx(
          'mb-3 text-ds-xs font-medium uppercase tracking-[0.12em] text-muted-foreground',
          align === 'center' && 'mx-auto'
        )}
      >
        {subtitle}
      </p>
    )}
    <h2 className="text-ds-3xl md:text-ds-4xl font-semibold text-foreground tracking-tight">
      {title}
    </h2>
    {description && (
      <p
        className={clsx(
          'mt-3 text-ds-base text-muted-foreground leading-relaxed max-w-2xl',
          align === 'center' && 'mx-auto'
        )}
      >
        {description}
      </p>
    )}
  </motion.div>
);
