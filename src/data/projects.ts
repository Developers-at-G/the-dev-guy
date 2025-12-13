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
    githubUrl: 'https://github.com/abdallah96/kader-qui-gere',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2025',
    impacts: ['+55% order speed', 'Offline-first PWA', 'Multi-restaurant ready'],
    problem: 'Manual ordering and fragmented workflows slowed restaurant service.',
    actions: ['Designed PWA architecture with offline sync', 'Implemented real-time order flows', 'Added multi-tenant data model with CFA support']
  },
  {
    title: 'keurgui',
    image: '/Videos/Restaurant.mov',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'React' , 'Twilio', 'Zustand'],
    link: 'https://keurguirestaurant.com',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2025',
    impacts: ['+40% menu views', 'SEO‑friendly', 'Fast LCP'],
    problem: 'Site needed to showcase menu and weekly specials with speed.',
    actions: ['Implemented SSG for core pages', 'Built specials schedule UX', 'Added image optimization and caching']
  },
  {
    title: 'ilmquest',
    image: '/Images/ilmquest.png',
    technologies: ['Next.js', 'React', 'Socket.IO', 'TypeScript', 'Tailwind CSS', 'Real-time WebSockets'],
    link: 'https://ilmquest.vercel.app',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2024',
    impacts: ['Real-time multiplayer gameplay', 'Mobile-first design', 'French localization', 'Room-based game sessions'],
    problem: 'Friends, families, and youth groups needed an engaging way to learn Islamic knowledge together through interactive, real-time quiz competitions.',
    actions: ['Designed join-by-code flow and host/guest lobby system', 'Built level picker (1-25) with clear progression', 'Implemented real-time game state synchronization with Socket.IO', 'Created playful feedback animations for correct/wrong answers', 'Developed live scoreboard with synchronized updates across all clients', 'Designed warm, community-oriented UI with mosque iconography and soft rose palette', 'Fully localized interface in French for target audience']
  },
  {
    title: 'sportbook',
    image: '/Images/sportbook.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Zustand', 'React Hook Form', 'Zod', 'PostgreSQL'],
    link: 'https://soccer-booking-website.vercel.app',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2025 - In Progress',
    impacts: ['Cinematic matchday UI', 'Time-based match scanner', 'Neighborhood field discovery', 'Admin booking management'],
    problem: 'Team captains needed a better way to discover and book football fields for night games in Dakar, with clear availability and facility details.',
    actions: ['Designed "matchday control room" UI inspired by floodlit pitches', 'Built time-based match scanner for live availability', 'Implemented neighborhood-based field discovery', 'Creating admin system for field, slot, and booking management', 'Setting up Supabase with Row Level Security and seeding realistic Dakar data']
  },
  
  {
    title: 'devtrackr',
    image: '/Images/devtrackr-dashboard.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT', 'Headless UI', 'Vercel', 'PWA'],
    link: 'https://devtrackr-one.vercel.app/',
    githubUrl: 'https://github.com/abdallah96/devtrackr',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2025',
    impacts: ['+30% weekly completion', 'Focus mode UX', 'Mobile PWA'],
    problem: 'Developers lacked a simple way to track tasks and time together.',
    actions: ['Shipped unified tasks+time model', 'Built analytics and weekly reports', 'Optimized mobile-first interactions']
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
