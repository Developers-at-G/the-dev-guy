import { Project } from '../hooks/useProjects';

export const projectsData: Project[] = [
  {
    title: 'Naboujastore - E-Commerce Platform',
    image: '/Images/Nabouja.jpeg',
    technologies: ['Next.js 15', 'TypeScript', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Vercel Analytics', 'WhatsApp API'],
    link: 'https://www.nabouja-store.com',
    githubUrl: 'https://github.com/abdallah96/naboujastore-website',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2025',
    impacts: ['Production-ready e-commerce', 'Vercel Analytics integration', 'Next.js 15 App Router', 'Performance-optimized'],
    problem: 'Traditional Senegalese clothing retailers needed a modern e-commerce platform with WhatsApp integration to serve local market preferences.',
    actions: ['Built production-ready e-commerce with Next.js 15 App Router and React 19', 'Implemented Vercel Analytics for real-time user behavior tracking and conversion funnel analysis', 'Deployed on Vercel with automatic CI/CD and optimized performance metrics', 'Created advanced shopping cart with React Context API and persistent state management', 'Integrated WhatsApp API for order processing with comprehensive event tracking', 'Developed African-inspired design system with Framer Motion animations and Radix UI components']
  },
  {
    title: 'Developer Playground',
    image: '/Images/developer-playground.png',
    technologies: ['Next.js 14', 'TypeScript', 'React', 'Tailwind CSS', 'Storybook', 'Vercel Analytics', 'Serverless', 'Edge Middleware'],
    link: 'https://developer-playground-one.vercel.app',
    githubUrl: 'https://github.com/abdallah96/Developer-playground',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2025',
    impacts: ['Next.js 14 showcase', 'SSR/SSG/ISR strategies', 'Component library system', 'Performance-optimized'],
    problem: 'Developers needed a comprehensive learning resource demonstrating Next.js 14 best practices, rendering strategies, and component architecture.',
    actions: ['Built production-ready Next.js 14 app showcasing SSR, SSG, and ISR rendering strategies', 'Created reusable component library with 7+ customizable UI components and Storybook integration', 'Implemented API routes with middleware, authentication patterns, and protected routes', 'Optimized performance with lazy loading, code splitting, dynamic imports, and React memoization', 'Deployed on Vercel with Analytics integration and automatic CI/CD']
  },
  {
    title: 'Restaurant Management (PWA)',
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
    title: 'Design System & Components Library',
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
    title: 'Restaurant Website',
    image: '/Videos/Restaurant.mov',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'React' , 'Twilio', 'Zustand'],
    link: 'https://keurguirestaurant.com',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2024',
    impacts: ['+40% menu views', 'SEO‑friendly', 'Fast LCP'],
    problem: 'Site needed to showcase menu and weekly specials with speed.',
    actions: ['Implemented SSG for core pages', 'Built specials schedule UX', 'Added image optimization and caching']
  },
  {
    title: 'IlmQuest - Real-Time Multiplayer Quiz Game',
    image: '/Images/IlmQuest.png',
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
    title: 'DevTrackr – Developer Task & Time Tracking App',
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
    title: 'Sportbook – Football Field Booking Platform',
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
    title: 'Real Estate Website',
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
