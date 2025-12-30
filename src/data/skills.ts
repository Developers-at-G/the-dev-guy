export interface Skill {
  name: string;
  icon: string;
  description?: string;
  experience?: string;
  level: number; // 0-100 proficiency
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design';
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern UI frameworks and libraries',
    skills: [
      { 
        name: 'React', 
        icon: '/Logos/react-color.svg', 
        experience: '4+ years',
        level: 85,
        category: 'frontend'
      },
      { 
        name: 'Next.js', 
        icon: '/Logos/nextdotjs-color.svg', 
        experience: '3+ years',
        level: 85,
        category: 'frontend'
      },
      { 
        name: 'TypeScript', 
        icon: '/Logos/typescript-color.svg', 
        experience: '4+ years',
        level: 88,
        category: 'frontend'
      },
      { 
        name: 'JavaScript', 
        icon: '/Logos/javascript-color.svg', 
        experience: '4+ years',
        level: 90,
        category: 'frontend'
      },
      { 
        name: 'Tailwind CSS', 
        icon: '/Images/tailwind.png', 
        experience: '4+ years',
        level: 94,
        category: 'frontend'
      },
      { 
        name: 'HTML', 
        icon: '/Logos/html5-color.svg', 
        experience: '7+ years',
        level: 95,
        category: 'frontend'
      },
      { 
        name: 'SCSS', 
        icon: '/Logos/css-color.svg', 
        experience: '6+ years',
        level: 88,
        category: 'frontend'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Server-side technologies and APIs',
    skills: [
      { 
        name: 'Node.js', 
        icon: '/Images/nodeJS.png', 
        experience: '3+ years',
        level: 78,
        category: 'backend'
      },
      { 
        name: 'Prisma', 
        icon: '/Images/code.png', 
        experience: '1+ years',
        level: 60,
        description: 'Next-generation ORM for Node.js and TypeScript',
        category: 'backend'
      },
      { 
        name: 'PostgreSQL', 
        icon: '/Images/postgresql.png', 
        experience: '2+ years',
        level: 70,
        category: 'backend'
      },
      { 
        name: 'Supabase', 
        icon: '/Images/supabase.png', 
        experience: '2+ years',
        level: 70,
        category: 'backend'
      },
      { 
        name: 'Contentful', 
        icon: '/Logos/contentful-color.svg', 
        experience: '4+ years',
        level: 80,
        category: 'backend'
      }
    ]
  },
  {
    id: 'tools',
    title: 'DevOps & Platforms',
    description: 'Development tools and deployment platforms',
    skills: [
      { 
        name: 'Git', 
        icon: '/Logos/git-color.svg', 
        experience: '7+ years',
        level: 90,
        category: 'tools'
      },
      { 
        name: 'Vercel', 
        icon: '/Images/code.png', 
        experience: '2+ years',
        level: 70,
        description: 'Cloud platform for frontend deployment',
        category: 'tools'
      },
      { 
        name: 'Storybook', 
        icon: '/Images/code.png', 
        experience: '1+ years',
        level: 70,
        description: 'Component development and documentation tool',
        category: 'tools'
      },
      { 
        name: 'Vitest', 
        icon: '/Images/code.png', 
        experience: '1+ year',
        level: 60,
        description: 'Blazing fast unit test framework',
        category: 'tools'
      }
    ]
  },
  {
    id: 'design',
    title: 'Mobile & Design',
    description: 'Mobile development and design tools',
    skills: [
      { 
        name: 'React Native', 
        icon: '/Logos/react-color.svg', 
        experience: '1+ years',
        level: 52,
        description: 'Cross-platform mobile development',
        category: 'design'
      },
      { 
        name: 'Expo', 
        icon: '/Images/code.png', 
        experience: '1+ years',
        level: 50,
        description: 'React Native development platform',
        category: 'design'
      },
      { 
        name: 'Figma', 
        icon: '/Logos/figma-color.svg', 
        experience: '4+ years',
        level: 75,
        category: 'design'
      }
    ]
  }
];
