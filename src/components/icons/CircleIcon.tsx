import type { IconProps } from './types';

/** Generic fallback */
export function CircleIcon({ className = 'h-5 w-5', ...props }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
