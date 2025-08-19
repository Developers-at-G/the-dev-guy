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
        name: 'Next.js', 
        icon: '/Logos/nextdotjs-color.svg', 
        experience: '2+ years',
        level: 82,
        category: 'frontend'
      },
      { 
        name: 'React', 
        icon: '/Logos/react-color.svg', 
        experience: '2+ years',
        level: 83,
        category: 'frontend'
      },
      { 
        name: 'TypeScript', 
        icon: '/Logos/typescript-color.svg', 
        experience: '1+ year',
        level: 85,
        category: 'frontend'
      },
      { 
        name: 'JavaScript', 
        icon: '/Logos/javascript-color.svg', 
        experience: '3+ years',
        level: 85,
        category: 'frontend'
      },
      { 
        name: 'SCSS', 
        icon: '/Logos/css-color.svg', 
        experience: '3+ years',
        level: 85,
        category: 'frontend'
      },
      { 
        name: 'GSAP', 
        icon: '/Images/code.png', 
        experience: '2+ year',
        level: 80,
        description: 'Professional animation library for the modern web',
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
        experience: '2+ years',
        level: 75,
        category: 'backend'
      },
      { 
        name: 'Express.js', 
        icon: '/Images/Expressjs.png', 
        experience: '2+ years',
        level: 60,
        category: 'backend'
      },
      { 
        name: 'GraphQL', 
        icon: '/Logos/graphql-color.svg', 
        experience: '1+ year',
        level: 65,
        category: 'backend'
      }
    ]
  },
  {
    id: 'database',
    title: 'Database & Storage',
    description: 'Data management and storage solutions',
    skills: [
      { 
        name: 'PostgreSQL', 
        icon: '/Images/postgresql.png', 
        experience: '1+ year',
        level: 58,
        category: 'database'
      },
      { 
        name: 'MySQL', 
        icon: '/Images/mysql.png', 
        experience: '2+ years',
        level: 52,
        category: 'database'
      },
      { 
        name: 'Supabase', 
        icon: '/Images/supabase.png', 
        experience: '1+ year',
        level: 65,
        category: 'database'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    description: 'Development tools and cloud services',
    skills: [
      { 
        name: 'AWS', 
        icon: '/Logos/amazonwebservices-color.svg', 
        experience: '1+ year',
        level: 53,
        category: 'tools'
      },
      { 
        name: 'Git', 
        icon: '/Logos/git-color.svg', 
        experience: '3+ years',
        level: 88,
        category: 'tools'
      },
      { 
        name: 'Contentful', 
        icon: '/Logos/contentful-color.svg', 
        experience: '1+ year',
        level: 70,
        category: 'tools'
      }
    ]
  },
  {
    id: 'design',
    title: 'Design & UX',
    description: 'User interface and experience design',
    skills: [
      { 
        name: 'Figma', 
        icon: '/Logos/figma-color.svg', 
        experience: '2+ years',
        level: 75,
        category: 'design'
      },
      { 
        name: 'Material UI', 
        icon: '/Logos/materialdesign-color.svg', 
        experience: '1+ year',
        level: 70,
        category: 'design'
      },
      { 
        name: 'Tailwind', 
        icon: '/Images/tailwind.png', 
        experience: '2+ years',
        level: 94,
        category: 'design'
      }
    ]
  }
];
