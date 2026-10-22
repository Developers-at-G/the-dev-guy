export type ProjectCategory = 'fullstack' | 'frontend' | 'learning';

export const PROJECT_CATEGORIES: {
  id: ProjectCategory | 'all';
  label: string;
}[] = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'learning', label: 'Learning' },
];

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  image: string;
  technologies: string[];
  link?: string;
  githubUrl?: string;
  caseStudyHref?: string;
  /** Internal path for guides (e.g. /frontend-architecture) */
  guideHref?: string;
  role: string;
  team: string;
  period: string;
  impacts?: string[];
  problem: string;
  actions: string[];
}
