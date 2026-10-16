import type { CareerExperience } from '@/data/career';
import type { Education } from '@/data/education';

export type JourneyItem =
  | { type: 'education'; data: Education; sortYear: number }
  | { type: 'career'; data: CareerExperience; sortYear: number };

export function parseStartYear(period: string): number {
  const match = period.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
}

export function getInitials(name: string): string {
  return name
    .split(/[\s\-]+/)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export const careerTypeStyles: Record<string, string> = {
  work: 'bg-secondary text-foreground border-border',
  internship: 'bg-muted text-muted-foreground border-border',
  freelance: 'bg-secondary text-muted-foreground border-border',
};
