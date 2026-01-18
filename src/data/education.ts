import { Translations } from '../lib/translations';

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description?: string;
  achievements?: string[];
  image?: string;
}

export function getEducationData(translations: Translations): Education[] {
  const educations = translations.education.educations;
  const imageMap: Record<string, string> = {
    master: '/Images/Master.png',
    bachelor: '/Images/Bachelor.png',
  };
  
  return educations.map((edu) => ({
    ...edu,
    image: imageMap[edu.id] || undefined,
  }));
}
