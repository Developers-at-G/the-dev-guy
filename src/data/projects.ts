import type { Project, ProjectCategory } from '@/types/project';
import type { Translations } from '../lib/translations';

interface StaticProject {
  id: string;
  category: ProjectCategory;
  image: string;
  technologies: string[];
  link?: string;
  githubUrl?: string;
  caseStudyHref?: string;
  guideHref?: string;
  role: string;
  team: string;
}

/**
 * Catalog source of truth for recruiters.
 * - fullstack: end-to-end apps (API, auth, DB, realtime)
 * - frontend: UI-focused products
 * - learning: Next.js / React deep-dives and guides
 */
const staticProjectsData: StaticProject[] = [
  {
    id: 'react-observability',
    category: 'learning',
    image: '/Videos/react-observability.mov',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Zustand', 'Tailwind CSS'],
    link: 'https://react-observability.vercel.app',
    role: 'Frontend',
    team: 'Solo',
  },
  {
    id: 'gyst',
    category: 'fullstack',
    image: '/Videos/gyst.mov',
    technologies: [
      'React',
      'TypeScript',
      'Chrome Extension (Manifest V3)',
      'Zustand',
      'TanStack Query',
      'Supabase',
      'PostgreSQL',
      'RLS',
    ],
    link: 'https://gyst-tracking.vercel.app',
    role: 'Full‑stack',
    team: 'Solo',
  },
  {
    id: 'naboujastore',
    category: 'frontend',
    image: '/Images/Nabouja.jpeg',
    technologies: [
      'Next.js 15',
      'TypeScript',
      'React 19',
      'Tailwind CSS',
      'Framer Motion',
      'Radix UI',
      'Vercel Analytics',
      'WhatsApp API',
    ],
    link: 'https://www.nabouja-store.com',
    githubUrl: 'https://github.com/abdallah96/naboujastore-website',
    role: 'Frontend',
    team: 'Solo',
  },
  {
    id: 'ilmquest',
    category: 'fullstack',
    image: '/Images/IlmQuest.png',
    technologies: [
      'Next.js',
      'React',
      'Socket.IO',
      'TypeScript',
      'Tailwind CSS',
      'Real-time WebSockets',
    ],
    link: 'https://ilmquest.vercel.app',
    role: 'Full‑stack',
    team: 'Solo',
  },
  {
    id: 'restaurant-website',
    category: 'fullstack',
    image: '/Videos/Restaurant.mov',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'React',
      'Twilio',
      'Zustand',
    ],
    link: 'https://keurguirestaurant.com',
    caseStudyHref: '/case-studies/keur-gui',
    role: 'Full‑stack',
    team: 'Solo',
  },
];

/** Standalone learning guide — lives in the library, not the featured slider. */
const learningGuides: Project[] = [
  {
    id: 'frontend-architecture',
    category: 'learning',
    title: 'Frontend Architecture',
    image: '/Images/IlmQuest.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Server Components'],
    guideHref: '/frontend-architecture',
    role: 'Guide',
    team: 'Writing',
    period: '2025',
    problem:
      'How I structure Next.js apps: Server Components, component systems, state, and performance.',
    actions: [],
    impacts: ['App Router patterns', 'Component system', 'Performance checklist'],
  },
];

export function getProjectsData(translations: Translations): Project[] {
  const projects = translations.projects.projects;

  const mapped = staticProjectsData.map((staticData, index): Project | null => {
    const translated = projects[index];
    if (!translated) return null;

    return {
      id: staticData.id,
      category: staticData.category,
      title: translated.title,
      image: staticData.image,
      technologies: staticData.technologies,
      link: staticData.link,
      githubUrl: staticData.githubUrl,
      caseStudyHref: staticData.caseStudyHref,
      guideHref: staticData.guideHref,
      role: staticData.role,
      team: staticData.team,
      period: translated.period,
      impacts: translated.impacts,
      problem: translated.problem,
      actions: translated.actions,
    };
  });

  return mapped.filter((p): p is Project => p !== null);
}

/** Full recruiter library: shipped projects + learning guides. */
export function getProjectLibrary(translations: Translations): Project[] {
  const projects = getProjectsData(translations);
  const arch = translations.projects.architecture;

  const guides: Project[] = learningGuides.map((guide) => ({
    ...guide,
    title: arch?.title ?? guide.title,
    problem: arch?.description ?? guide.problem,
  }));

  return [...projects, ...guides];
}

export function getProjectsByCategory(
  projects: Project[],
  category: ProjectCategory | 'all'
): Project[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}

export function countByCategory(projects: Project[]): Record<ProjectCategory | 'all', number> {
  return {
    all: projects.length,
    fullstack: projects.filter((p) => p.category === 'fullstack').length,
    frontend: projects.filter((p) => p.category === 'frontend').length,
    learning: projects.filter((p) => p.category === 'learning').length,
  };
}
