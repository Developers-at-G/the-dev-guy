import type { IconProps } from './types';

/** Server / backend category */
export function ServerIcon({ className = 'h-5 w-5', ...props }: IconProps) {
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
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
    </svg>
  );
}
