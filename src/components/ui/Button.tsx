import React from 'react';
import { clsx } from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

const variants = {
  primary:
    'bg-primary text-primary-foreground hover:opacity-90 focus-visible:ring-ring',
  secondary:
    'bg-secondary text-secondary-foreground border border-border hover:bg-accent focus-visible:ring-ring',
  outline:
    'border border-border bg-transparent text-foreground hover:bg-accent focus-visible:ring-ring',
  ghost:
    'bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring',
} as const;

const sizes = {
  sm: 'h-8 px-3 text-ds-xs gap-1.5',
  md: 'h-10 px-4 text-ds-sm gap-2',
  lg: 'h-11 px-5 text-ds-base gap-2',
} as const;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      asChild = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const classes = clsx(
      'inline-flex items-center justify-center rounded-lg font-medium',
      'transition-opacity duration-fast ease-out-smooth',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:pointer-events-none disabled:opacity-40',
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: clsx(child.props.className, classes),
      });
    }

    return (
      <button
        className={classes}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
