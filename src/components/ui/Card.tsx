import React from 'react';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'muted';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'outlined', ...props }, ref) => {
    const variants = {
      default: 'bg-card text-card-foreground',
      outlined: 'bg-card text-card-foreground border border-border',
      muted: 'bg-muted text-card-foreground border border-border',
    };

    return (
      <div
        ref={ref}
        className={clsx('rounded-lg', variants[variant], className)}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('flex flex-col gap-1.5 p-5 sm:p-6', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx(
      'text-ds-lg font-semibold leading-none tracking-tight text-foreground',
      className
    )}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('p-5 pt-0 sm:p-6 sm:pt-0', className)} {...props} />
));

CardContent.displayName = 'CardContent';
