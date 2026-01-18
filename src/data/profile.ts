import { Translations } from '../lib/translations';

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  about: {
    bio: string;
    experience: string;
  };
  skills: string[];
  hero: {
    stats: {
      years: string;
      years_label: string;
      projects: string;
      projects_label: string;
      technologies: string;
      technologies_label: string;
    };
    cta: {
      how_i_build: string;
    };
  };
}

export function getProfileData(translations: Translations): ProfileData {
  return {
    name: translations.profile.name,
    title: translations.profile.title,
    subtitle: translations.profile.subtitle,
    description: translations.profile.description,
    image: '/Images/Picture.jpeg',
    about: {
      bio: translations.profile.about.bio,
      experience: translations.profile.about.experience,
    },
    skills: translations.profile.skills,
    hero: translations.profile.hero,
  };
}
