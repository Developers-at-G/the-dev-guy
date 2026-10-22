export interface CaseStudySection {
  id: string;
  label: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  summary: string;
  status: string;
  timeline: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'keur-gui',
    name: 'Keur Gui',
    summary:
      'Restaurant website with menu, reservations, and a fast marketing experience for a Senegalese restaurant.',
    status: 'Live',
    timeline: '2 months',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Twilio'],
    liveUrl: 'https://keurguirestaurant.com',
    githubUrl: 'https://github.com/abdallah96/keur-gui',
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        body: `## Challenge
Limited online presence, manual reservations, and weak mobile experience.

## Solution
SSG core pages, specials schedule UX, image optimization, and a clear booking path.

## Impact
More menu views after launch, SEO-friendly structure, fast LCP on marketing pages.`,
      },
      {
        id: 'tech',
        label: 'Stack',
        body: `## Stack
- Next.js + TypeScript for the app shell
- Tailwind for a consistent, responsive UI
- Supabase for data and content where needed
- Twilio for messaging workflows`,
      },
    ],
  },
  {
    slug: 'kader-qui-gere',
    name: 'Kader Qui Gère',
    summary:
      'Multi-tenant restaurant management PWA with offline-first ordering and role-aware workflows.',
    status: 'Live',
    timeline: '2025',
    tech: ['Next.js 14', 'Prisma', 'PostgreSQL', 'NextAuth', 'PWA'],
    liveUrl: 'https://kader-qui-gere.vercel.app/auth/signin',
    githubUrl: 'https://github.com/abdallah96/kader-qui-gere',
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        body: `## Challenge
Manual ordering and fragmented workflows slowed service, especially on unstable networks.

## Solution
PWA architecture with offline sync, real-time order flows, and a multi-tenant data model.

## Impact
Faster order flow in daily use and a foundation ready for multiple branches.`,
      },
      {
        id: 'tech',
        label: 'Stack',
        body: `## Stack
- Next.js App Router + TypeScript
- Prisma + PostgreSQL
- NextAuth for auth
- Service worker / PWA for offline resilience`,
      },
    ],
  },
  {
    slug: 'devtrackr',
    name: 'DevTrackr',
    summary:
      'Developer productivity tracking concepts — dashboards, focus metrics, and clean product UI.',
    status: 'Case study',
    timeline: '2024',
    tech: ['React', 'TypeScript', 'Next.js', 'Charts'],
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        body: `## Focus
Explored how developers track deep work: sessions, interruptions, and weekly trends.

## Approach
Dashboard-first UI, clear hierarchy, and charts that stay readable on mobile.`,
      },
      {
        id: 'tech',
        label: 'Stack',
        body: `## Stack
- Next.js + React + TypeScript
- Component-driven layout
- Lightweight chart visualizations`,
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
