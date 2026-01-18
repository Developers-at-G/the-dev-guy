import { SkillCategory } from './skills';
import { Translations } from '../lib/translations';

export interface Skill {
  name: string;
  icon: string;
  description?: string;
  experience?: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design';
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

const iconMap: Record<string, Record<string, string>> = {
  React: { icon: '/Logos/react-color.svg' },
  'Next.js': { icon: '/Logos/nextdotjs-color.svg' },
  TypeScript: { icon: '/Logos/typescript-color.svg' },
  JavaScript: { icon: '/Logos/javascript-color.svg' },
  'Tailwind CSS': { icon: '/Images/tailwind.png' },
  HTML: { icon: '/Logos/html5-color.svg' },
  SCSS: { icon: '/Logos/css-color.svg' },
  'Node.js': { icon: '/Images/nodeJS.png' },
  Prisma: { icon: '/Images/code.png' },
  PostgreSQL: { icon: '/Images/postgresql.png' },
  Supabase: { icon: '/Images/supabase.png' },
  Contentful: { icon: '/Logos/contentful-color.svg' },
  Git: { icon: '/Logos/git-color.svg' },
  Vercel: { icon: '/Images/code.png' },
  Storybook: { icon: '/Images/code.png' },
  Vitest: { icon: '/Images/code.png' },
  'React Native': { icon: '/Logos/react-color.svg' },
  Expo: { icon: '/Images/code.png' },
  Figma: { icon: '/Logos/figma-color.svg' },
};

const levelMap: Record<string, Record<string, number>> = {
  React: { level: 85 },
  'Next.js': { level: 85 },
  TypeScript: { level: 88 },
  JavaScript: { level: 90 },
  'Tailwind CSS': { level: 94 },
  HTML: { level: 95 },
  SCSS: { level: 88 },
  'Node.js': { level: 78 },
  Prisma: { level: 60 },
  PostgreSQL: { level: 70 },
  Supabase: { level: 70 },
  Contentful: { level: 80 },
  Git: { level: 90 },
  Vercel: { level: 70 },
  Storybook: { level: 70 },
  Vitest: { level: 60 },
  'React Native': { level: 52 },
  Expo: { level: 50 },
  Figma: { level: 75 },
};

const categoryMap: Record<string, 'frontend' | 'backend' | 'database' | 'tools' | 'design'> = {
  frontend: 'frontend',
  backend: 'backend',
  tools: 'tools',
  design: 'design',
};

export function getSkillsData(translations: Translations): SkillCategory[] {
  return translations.skills.categories.map((category) => ({
    ...category,
    skills: category.skills.map((skill) => ({
      ...skill,
      icon: iconMap[skill.name]?.icon || '/Images/code.png',
      level: levelMap[skill.name]?.level || 50,
      category: categoryMap[category.id] || 'tools',
    })),
  }));
}
