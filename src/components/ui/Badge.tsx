import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const variants = {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      outline: 'border border-input bg-background text-foreground',
      success: 'bg-green-500/10 text-green-600 border border-green-500/20'
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base'
    };

    return (
      <div
        ref={ref}
        className={clsx(
          'inline-flex items-center rounded-full font-medium transition-colors',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

