import { Translations } from '../lib/translations';

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

const technologiesMap: Record<string, string[]> = {
  'smal-gmbh': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Contentful', 'GSAP', 'i18n'],
  'future-stories': ['Shopify', 'React', 'E-commerce', 'Performance Optimization', 'UX'],
  'obertys': ['React', 'React Native', 'REST APIs', 'Banking Applications', 'Agile Development'],
};

export function getCareerData(translations: Translations): CareerExperience[] {
  return translations.career.experiences.map((exp) => ({
    ...exp,
    type: exp.type as 'work' | 'internship' | 'freelance',
    technologies: technologiesMap[exp.id] || [],
  }));
}
