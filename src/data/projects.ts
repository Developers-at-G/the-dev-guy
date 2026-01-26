import { Project } from '../hooks/useProjects';
import { Translations } from '../lib/translations';

const staticProjectsData = [
  // 1. Flagship: Complex architecture, enterprise features, Chrome Extension + Web Dashboard
  {
    id: 'gyst',
    image: '/Videos/gyst.mov',
    technologies: ['React', 'TypeScript', 'Chrome Extension (Manifest V3)', 'Zustand', 'TanStack Query', 'Supabase', 'PostgreSQL', 'RLS'],
    link: 'https://gyst-tracking.vercel.app',
    role: 'Full‑stack',
    team: 'Solo',
  },
  // 2. Multi-tenant, PWA, offline-first, real business use case
  {
    id: 'restaurant-management',
    image: '/Images/k-gere.png',
    technologies: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'PWA', 'TailwindCSS'],
    link: 'https://kader-qui-gere.vercel.app/auth/signin',
    githubUrl: 'https://github.com/abdallah96/kader-qui-gere',
    role: 'Full‑stack',
    team: 'Solo',
  },
  // 3. Real client, production e-commerce, latest stack
  {
    id: 'naboujastore',
    image: '/Images/Nabouja.jpeg',
    technologies: ['Next.js 15', 'TypeScript', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Vercel Analytics', 'WhatsApp API'],
    link: 'https://www.nabouja-store.com',
    githubUrl: 'https://github.com/abdallah96/naboujastore-website',
    role: 'Full‑stack',
    team: 'Solo',
  },
  // 4. Real-time multiplayer, WebSockets, technical depth
  {
    id: 'ilmquest',
    image: '/Images/IlmQuest.png',
    technologies: ['Next.js', 'React', 'Socket.IO', 'TypeScript', 'Tailwind CSS', 'Real-time WebSockets'],
    link: 'https://ilmquest.vercel.app',
    role: 'Full‑stack',
    team: 'Solo',
  },
  // 5. Documentation, teaching, Next.js patterns showcase
  {
    id: 'developer-playground',
    image: '/Images/developer-playground.png',
    technologies: ['Next.js 14', 'TypeScript', 'React', 'Tailwind CSS', 'Storybook', 'Vercel Analytics', 'Serverless', 'Edge Middleware'],
    link: 'https://developer-playground-one.vercel.app',
    githubUrl: 'https://github.com/abdallah96/Developer-playground',
    role: 'Full‑stack',
    team: 'Solo',
  },
  // 6. Smaller production site, real business
  {
    id: 'restaurant-website',
    image: '/Videos/Restaurant.mov',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'React', 'Twilio', 'Zustand'],
    link: 'https://keurguirestaurant.com',
    role: 'Full‑stack',
    team: 'Solo',
  },
  // 7. Dev tool, full-stack with auth
  {
    id: 'devtrackr',
    image: '/Images/devtrackr-dashboard.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT', 'Headless UI', 'Vercel', 'PWA'],
    link: 'https://devtrackr-one.vercel.app/',
    githubUrl: 'https://github.com/abdallah96/devtrackr',
    role: 'Full‑stack',
    team: 'Solo',
  },
  // 8. Frontend/marketing site
  {
    id: 'real-estate',
    image: '/Images/atlanticimmo.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Next JS'],
    link: 'https://seradi.vercel.app',
    role: 'Frontend',
    team: 'Solo',
  },
];

export function getProjectsData(translations: Translations): Project[] {
  const projects = translations.projects.projects;
  
  const mappedProjects = staticProjectsData.map((staticData, index): Project | null => {
    const translatedProject = projects[index];
    if (!translatedProject) return null;
    
    return {
      title: translatedProject.title,
      image: staticData.image,
      technologies: staticData.technologies,
      link: staticData.link,
      githubUrl: staticData.githubUrl,
      role: translatedProject.role,
      team: translatedProject.team,
      period: translatedProject.period,
      impacts: translatedProject.impacts,
      problem: translatedProject.problem,
      actions: translatedProject.actions,
    };
  });
  
  return mappedProjects.filter((p): p is Project => p !== null);
}
