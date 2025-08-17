export interface CareerExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'work' | 'internship' | 'freelance';
}

export const careerData: CareerExperience[] = [
  {
    id: 'current-role',
    company: 'Current Focus',
    position: 'Full-Stack Developer',
    period: '2024 - Present',
    location: 'Remote',
    type: 'work',
    description: 'Developing modern web applications with focus on user experience and performance optimization.',
    achievements: [
      'Built multiple full-stack applications using React and Next.js',
      'Implemented PWA features for offline-first experiences',
      'Optimized application performance achieving 90+ Lighthouse scores',
      'Designed and developed responsive UI components'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS']
  },
  {
    id: 'freelance-work',
    company: 'Freelance Projects',
    position: 'Frontend Developer',
    period: '2022 - 2024',
    location: 'Remote',
    type: 'freelance',
    description: 'Worked on various client projects focusing on modern web development and user interface design.',
    achievements: [
      'Delivered 10+ projects for different clients',
      'Specialized in React and Next.js development',
      'Created responsive designs with modern UI frameworks',
      'Implemented SEO optimizations and performance improvements'
    ],
    technologies: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Figma', 'Git']
  }
];
