import React from 'react';
import { clsx } from 'clsx';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success';
  size?: 'sm' | 'md';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'secondary', size = 'sm', ...props }, ref) => {
    const variants = {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-muted-foreground border border-border',
      outline: 'border border-border bg-transparent text-foreground',
      success: 'bg-secondary text-foreground border border-border',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-ds-xs',
      md: 'px-2.5 py-1 text-ds-sm',
    };

    return (
      <span
        ref={ref}
        className={clsx(
          'inline-flex items-center rounded-md font-medium tracking-wide',
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
