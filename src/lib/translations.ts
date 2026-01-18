import commonEn from '../locales/en/common.json';
import commonFr from '../locales/fr/common.json';
import profileEn from '../locales/en/profile.json';
import profileFr from '../locales/fr/profile.json';
import projectsEn from '../locales/en/projects.json';
import projectsFr from '../locales/fr/projects.json';
import careerEn from '../locales/en/career.json';
import careerFr from '../locales/fr/career.json';
import educationEn from '../locales/en/education.json';
import educationFr from '../locales/fr/education.json';
import skillsEn from '../locales/en/skills.json';
import skillsFr from '../locales/fr/skills.json';
import blogPostsEn from '../locales/en/blog-posts.json';
import blogPostsFr from '../locales/fr/blog-posts.json';
import frontendArchitectureEn from '../locales/en/frontend-architecture.json';
import frontendArchitectureFr from '../locales/fr/frontend-architecture.json';

export type Language = 'en' | 'fr';

export interface Translations {
  common: typeof commonEn;
  profile: typeof profileEn;
  projects: typeof projectsEn;
  career: typeof careerEn;
  education: typeof educationEn;
  skills: typeof skillsEn;
  blogPosts: typeof blogPostsEn;
  frontendArchitecture: typeof frontendArchitectureEn;
}

const translations: Record<Language, Translations> = {
  en: {
    common: commonEn,
    profile: profileEn,
    projects: projectsEn,
    career: careerEn,
    education: educationEn,
    skills: skillsEn,
    blogPosts: blogPostsEn,
    frontendArchitecture: frontendArchitectureEn,
  },
  fr: {
    common: commonFr,
    profile: profileFr,
    projects: projectsFr,
    career: careerFr,
    education: educationFr,
    skills: skillsFr,
    blogPosts: blogPostsFr,
    frontendArchitecture: frontendArchitectureFr,
  },
};

export function getTranslations(language: Language): Translations {
  return translations[language];
}

export function getTranslation(
  language: Language,
  namespace: keyof Translations,
  key: string,
  params?: Record<string, string | number>
): string {
  const translations = getTranslations(language);
  const namespaceTranslations = translations[namespace] as Record<string, any>;
  
  const keys = key.split('.');
  let value: any = namespaceTranslations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  if (typeof value !== 'string') {
    return key;
  }
  
  if (params) {
    return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
      return params[paramKey]?.toString() || match;
    });
  }
  
  return value;
}
