import { Project } from '../hooks/useProjects';

export const projectsData: Project[] = [
  {
    title: 'devguy-ui-components',
    image: '/Videos/devguy:ui.mov',
    technologies: ['React', 'TypeScript', 'Storybook', 'CSS Modules', 'Vitest', 'ESLint', 'Prettier', 'tsup'],
    link: 'https://storybook-static-nine-roan.vercel.app',
    githubUrl: 'https://github.com/abdallah96/react-storybook-components',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2025',
    impacts: ['Reusable component library', 'TypeScript-first approach', 'Storybook documentation', 'Comprehensive testing'],
    problem: 'Developers needed a reliable, well-tested component library to accelerate development workflows.',
    actions: ['Built 7+ reusable React components with TypeScript', 'Implemented Storybook for interactive documentation', 'Set up comprehensive testing with Vitest and React Testing Library', 'Created responsive, accessible components following design system principles']
  },
  {
    title: 'kader_qui_gere',
    image: '/Images/k-gere.png',
    technologies: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'PWA', 'TailwindCSS'],
    link: 'https://kader-qui-gere.vercel.app/auth/signin',
    caseStudy: '/case-studies/kader-qui-gere',
    githubUrl: 'https://github.com/abdallah96/kader-qui-gere',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2025',
    impacts: ['+55% order speed', 'Offline-first PWA', 'Multi-restaurant ready'],
    problem: 'Manual ordering and fragmented workflows slowed restaurant service.',
    actions: ['Designed PWA architecture with offline sync', 'Implemented real-time order flows', 'Added multi-tenant data model with CFA support']
  },
  {
    title: 'devtrackr',
    image: '/Images/devtrackr-dashboard.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT', 'Headless UI', 'Vercel', 'PWA'],
    link: 'https://devtrackr-one.vercel.app/',
    caseStudy: '/case-studies/devtrackr',
    githubUrl: 'https://github.com/abdallah96/devtrackr',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2025',
    impacts: ['+30% weekly completion', 'Focus mode UX', 'Mobile PWA'],
    problem: 'Developers lacked a simple way to track tasks and time together.',
    actions: ['Shipped unified tasks+time model', 'Built analytics and weekly reports', 'Optimized mobile-first interactions']
  },
  {
    title: 'keurgui',
    image: '/Images/keurguirestaurant.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'React', 'AWS'],
    link: 'https://keurguirestaurant.com',
    caseStudy: '/case-studies/keur-gui',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2025',
    impacts: ['+40% menu views', 'SEO‑friendly', 'Fast LCP'],
    problem: 'Site needed to showcase menu and weekly specials with speed.',
    actions: ['Implemented SSG for core pages', 'Built specials schedule UX', 'Added image optimization and caching']
  },
  {
    title: 'realestate',
    image: '/Images/atlanticimmo.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Next JS'],
    link: 'https://seradi.vercel.app',
    role: 'Frontend',
    team: 'Solo',
    period: '2024',
    impacts: ['Faster browsing', 'Clean property filters'],
    problem: 'Users struggled to navigate listings with slow filtering.',
    actions: ['Built performant filter UI', 'Added skeleton loading states', 'Optimized list virtualization']
  }
];
