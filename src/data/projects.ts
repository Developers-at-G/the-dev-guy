import { Project } from '../hooks/useProjects';
import { Translations } from '../lib/translations';

const staticProjectsData = [
  {
    id: 'naboujastore',
    image: '/Images/Nabouja.jpeg',
    technologies: ['Next.js 15', 'TypeScript', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Vercel Analytics', 'WhatsApp API'],
    link: 'https://www.nabouja-store.com',
    githubUrl: 'https://github.com/abdallah96/naboujastore-website',
    role: 'Full‑stack',
    team: 'Solo',
  },
  {
    id: 'developer-playground',
    image: '/Images/developer-playground.png',
    technologies: ['Next.js 14', 'TypeScript', 'React', 'Tailwind CSS', 'Storybook', 'Vercel Analytics', 'Serverless', 'Edge Middleware'],
    link: 'https://developer-playground-one.vercel.app',
    githubUrl: 'https://github.com/abdallah96/Developer-playground',
    role: 'Full‑stack',
    team: 'Solo',
  },
  {
    id: 'restaurant-management',
    image: '/Images/k-gere.png',
    technologies: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'PWA', 'TailwindCSS'],
    link: 'https://kader-qui-gere.vercel.app/auth/signin',
    githubUrl: 'https://github.com/abdallah96/kader-qui-gere',
    role: 'Full‑stack',
    team: 'Solo',
  },
  {
    id: 'restaurant-website',
    image: '/Videos/Restaurant.mov',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'React', 'Twilio', 'Zustand'],
    link: 'https://keurguirestaurant.com',
    role: 'Full‑stack',
    team: 'Solo',
  },
  {
    id: 'ilmquest',
    image: '/Images/IlmQuest.png',
    technologies: ['Next.js', 'React', 'Socket.IO', 'TypeScript', 'Tailwind CSS', 'Real-time WebSockets'],
    link: 'https://ilmquest.vercel.app',
    role: 'Full‑stack',
    team: 'Solo',
  },
  {
    id: 'devtrackr',
    image: '/Images/devtrackr-dashboard.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT', 'Headless UI', 'Vercel', 'PWA'],
    link: 'https://devtrackr-one.vercel.app/',
    githubUrl: 'https://github.com/abdallah96/devtrackr',
    role: 'Full‑stack',
    team: 'Solo',
  },
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
  
  return staticProjectsData.map((staticData, index) => {
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
  }).filter((p): p is Project => p !== null);
}
