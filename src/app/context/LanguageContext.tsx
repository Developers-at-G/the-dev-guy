'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Abdallah Amamou Gueye',
    'hero.subtitle': 'Full-Stack Developer',
    'hero.description': 'I build modern, scalable web applications with a focus on user experience and clean code.',
    'hero.cta': 'View My Work',
    'hero.scroll': 'Scroll to explore',
    'hero.how_i_build': 'How I Build with React & Next.js',
    'hero.engineering_approach': 'My engineering approach, explained for recruiters',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Passionate Full-Stack Developer',
    'about.description': 'I\'m a dedicated full-stack developer with a passion for creating innovative web solutions. I specialize in React, Next.js, and modern web technologies.',
    'about.experience': 'Years of Experience',
    'about.projects': 'Projects Completed',
    'about.skills': 'Technologies Mastered',
    
    // Profile Section
    'profile.software_engineer': 'Software Engineer',
    'profile.react_enthusiast': 'React Enthusiast',
    'profile.nextjs_developer': 'Next.js Developer',
    'profile.building_experiences': 'Building Exceptional Experiences',
    'profile.description': 'I craft digital products with modern technologies. Specialized in React, Next.js, and user-centered design principles.',
    'profile.about_me': 'About Me',
    'profile.about_description': 'I\'m Abdallah Amadou Gueye, a passionate software engineer from Senegal. With a Master\'s degree in Applied Computer Science, I specialize in UI/UX Design and Usability Engineering.',
    'profile.experience_description': 'I\'ve been working with modern web technologies for over 3 years, focusing on creating intuitive, accessible, and performant user experiences. My expertise lies in React, Next.js, and TypeScript.',
    'profile.what_i_do': 'What I Do',
    'profile.fullstack_dev': 'Full-stack web development',
    'profile.uiux_design': 'UI/UX design & prototyping',
    'profile.performance': 'Performance optimization',
    'profile.accessibility': 'Accessibility implementation',
    'profile.current_focus': 'Currently Focused On',
    'profile.focus_description': 'Building scalable web applications with Next.js 15, exploring advanced React patterns, and contributing to open-source projects. Always learning and staying up-to-date with the latest web technologies and design trends.',
    
    // Profile Fun Facts
    'profile.fun_fact_1_title': 'Finds flow in silence and deep focus',
    'profile.fun_fact_1_desc': 'Productivity powered by quiet concentration',
    'profile.fun_fact_2_title': 'Can debug with a cup of coffee',
    'profile.fun_fact_2_desc': 'Fuel for late-night problem solving',
    'profile.fun_fact_3_title': 'Believes in pixel-perfect UIs',
    'profile.fun_fact_3_desc': 'Details matter, always',
    // Projects Featured Section
    'projects.featured_title': 'Featured Projects',
    'projects.featured_subtitle': "Before we dive into my work, here's a quick glimpse of how I bring ideas to life",
    // Education Card Descriptions
    'education.bachelor_desc': 'Comprehensive study of computer science fundamentals, software engineering principles, and practical application development. Focused on modern web technologies, database systems, and software architecture.',
    'education.master_desc': 'Advanced studies in computer science with specialization in UI/UX Design & Usability Engineering. Research focus on accessibility and usability engineering.',
    // Skills Section
    'skills.title': 'Skills',
    'skills.subtitle': 'Technical Expertise',
    'skills.description': 'My technical skills and technologies I work with',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Cloud',
    'skills.design': 'Design',
    'skills.nextjs_desc': 'Full-stack React framework',
    'skills.react_desc': 'UI library for building interfaces',
    'skills.typescript_desc': 'Typed JavaScript',
    'skills.javascript_desc': 'Programming language',
    'skills.aws_desc': 'Cloud computing platform',
    'skills.git_desc': 'Version control system',
    'skills.graphql_desc': 'Query language for APIs',
    'skills.figma_desc': 'Design and prototyping tool',
    'skills.material_desc': 'Design system',
    'skills.nodejs_desc': 'JavaScript runtime',
    'skills.express_desc': 'Web application framework',
    'skills.supabase_desc': 'Open source Firebase alternative',
    'skills.mysql_desc': 'Relational database',
    
    // Experience Section
    'experience.title': 'Work Experience',
    'experience.software_engineer': 'Software Engineer',
    'experience.fullstack_developer': 'Fullstack Developer',
    'experience.frontend_developer': 'Frontend Developer',
    'experience.full_time': 'Full Time',
    'experience.working_student': 'Working Student',
    'experience.internship': 'Internship',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Featured Work',
    'projects.description': 'A showcase of my recent projects and technical achievements',
    'projects.view_project': 'View Project',
    'projects.case_study': 'Case Study',
    'projects.tech_stack': 'Tech Stack',
    'projects.kader_qui_gere_title': 'K-Gère Restaurant Management',
    'projects.kader_qui_gere_desc': 'A comprehensive Progressive Web App (PWA) for African restaurants with multi-restaurant support, real-time order management, and CFA currency handling.',
    'projects.devtrackr_title': 'DevTrackr',
    'projects.devtrackr_desc': 'A comprehensive developer productivity platform with task management, time tracking, and project analytics.',
    'projects.keurgui_title': 'Keur gui restaurant',
    'projects.keurgui_desc': 'Modern restaurant website with interactive menu, online ordering, and weekly specials showcase.',
    'projects.realestate_title': 'Real estate website',
    'projects.realestate_desc': 'Professional real estate platform with property listings and advanced search functionality.',
    'projects.agro_title': 'Agro trade services',
    'projects.agro_desc': 'Agricultural services website with product catalog and business solutions.',
    
    // Education Section
    'education.title': 'Education',
    'education.subtitle': 'Academic Background',
    'education.description': 'My educational journey and academic achievements',
    'education.master_degree': 'Master\'s Degree',
    'education.bachelor_degree': 'Bachelor\'s Degree',
    'education.applied_computer_science': 'Applied Computer Science',
    'education.uiux_design': 'UI/UX Design & Usability Engineering',
    'education.computer_science': 'Computer Science',
    'education.university': 'University',
    'education.graduation_date': 'Graduation Date',
    'education.gpa': 'GPA',
    'education.relevant_courses': 'Relevant Courses',
    'education.thesis': 'Thesis',
    'education.capstone': 'Capstone Project',
    
    // Achievement Section
    'achievement.title': 'Achievements',
    'achievement.subtitle': 'Certifications & Awards',
    'achievement.description': 'Professional certifications and notable achievements',
    'achievement.certifications': 'Certifications',
    'achievement.awards': 'Awards',
    'achievement.projects_completed': 'Projects Completed',
    'achievement.hours_coded': 'Hours Coded',
    'achievement.coffee_consumed': 'Coffee Consumed',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s Work Together',
    'contact.description': 'I\'m always interested in new opportunities and exciting projects.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.send_message': 'Send Message',
    'contact.connect_with_me': 'Connect with me',
    'contact.name': 'Name',
    'contact.message': 'Message',
    'contact.name_placeholder': 'Your name',
    'contact.email_placeholder': 'your.email@example.com',
    'contact.message_placeholder': 'Your message...',
    'contact.success_title': 'Message Sent!',
    'contact.success_message': 'Thank you for reaching out. I\'ll get back to you soon!',
    'contact.error_title': 'Error',
    'contact.error_message': 'Something went wrong. Please try again.',
    'contact.close': 'Close',
    'contact.lets_connect': 'Let\'s Connect',
    'contact.open_message': 'I\'m always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.',
    'contact.email_me': 'Email Me',
    'contact.follow_me': 'Follow Me',
    'contact.linkedin_desc': 'Connect professionally',
    'contact.github_desc': 'Check out my code',
    'contact.ready_to_work': 'Ready to Work Together?',
    'contact.work_together_message': 'Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I\'d love to hear from you.',
    'contact.send_email': 'Send Email',
    'contact.response_time': 'I typically respond within 24 hours',
    
    // Case Study
    'casestudy.back': 'Back to Portfolio',
    'casestudy.case_study': 'Case Study',
    'casestudy.completed_mvp': 'Completed MVP',
    'casestudy.full_stack': 'Full-Stack Development',
    'casestudy.summary': 'Project Summary',
    'casestudy.problem': 'The Problem',
    'casestudy.goals': 'Goals',
    'casestudy.tech_stack': 'Tech Stack',
    'casestudy.implementation': 'Technical Implementation',
    'casestudy.challenges': 'Challenges & Solutions',
    'casestudy.lessons': 'Key Lessons',
    'casestudy.future': 'Future Improvements',
    'casestudy.links': 'Project Links',
    
    // Common
    'common.view_live': 'View Live',
    'common.view_code': 'View Code',
    'common.more': 'More',
    'common.learn_more': 'Learn More',
    'common.close': 'Close',
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.education': 'Éducation',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Bonjour, je suis',
    'hero.title': 'Abdallah Amamou Gueye',
    'hero.subtitle': 'Développeur Full-Stack',
    'hero.description': 'Je construis des applications web modernes et évolutives avec un accent sur l\'expérience utilisateur et le code propre.',
    'hero.cta': 'Voir Mon Travail',
    'hero.scroll': 'Défiler pour explorer',
    'hero.how_i_build': 'Comment Je Construis avec React & Next.js',
    'hero.engineering_approach': 'Mon approche d\'ingénierie, expliquée pour les recruteurs',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.subtitle': 'Développeur Full-Stack Passionné',
    'about.description': 'Je suis un développeur full-stack dévoué avec une passion pour créer des solutions web innovantes. Je me spécialise dans React, Next.js et les technologies web modernes.',
    'about.experience': 'Années d\'Expérience',
    'about.projects': 'Projets Terminés',
    'about.skills': 'Technologies Maîtrisées',
    
    // Profile Section
    'profile.software_engineer': 'Ingénieur Logiciel',
    'profile.react_enthusiast': 'Passionné React',
    'profile.nextjs_developer': 'Développeur Next.js',
    'profile.building_experiences': 'Construire des Expériences Exceptionnelles',
    'profile.description': 'Je crée des produits numériques avec des technologies modernes. Spécialisé dans React, Next.js et les principes de design centré utilisateur.',
    'profile.about_me': 'À Propos de Moi',
    'profile.about_description': 'Je suis Abdallah Amadou Gueye, un ingénieur logiciel passionné du Sénégal. Avec un Master en Informatique Appliquée, je me spécialise dans la Conception UI/UX et l\'Ingénierie de l\'Utilisabilité.',
    'profile.experience_description': 'Je travaille avec les technologies web modernes depuis plus de 3 ans, en me concentrant sur la création d\'expériences utilisateur intuitives, accessibles et performantes. Mon expertise réside dans React, Next.js et TypeScript.',
    'profile.what_i_do': 'Ce Que Je Fais',
    'profile.fullstack_dev': 'Développement web full-stack',
    'profile.uiux_design': 'Conception UI/UX et prototypage',
    'profile.performance': 'Optimisation des performances',
    'profile.accessibility': 'Implémentation de l\'accessibilité',
    'profile.current_focus': 'Actuellement Concentré Sur',
    'profile.focus_description': 'Construire des applications web évolutives avec Next.js 15, explorer les patterns React avancés et contribuer aux projets open-source. Toujours en train d\'apprendre et de rester à jour avec les dernières technologies web et tendances de design.',
    
    // Profile Fun Facts
    'profile.fun_fact_1_title': 'Trouve le flow dans le silence et la concentration profonde',
    'profile.fun_fact_1_desc': 'Productivité alimentée par la concentration silencieuse',
    'profile.fun_fact_2_title': 'Peut déboguer avec une tasse de café',
    'profile.fun_fact_2_desc': 'Carburant pour résoudre les problèmes tard dans la nuit',
    'profile.fun_fact_3_title': 'Croit en des interfaces pixel-perfect',
    'profile.fun_fact_3_desc': 'Les détails comptent, toujours',
    // Projects Featured Section
    'projects.featured_title': 'Projets en vedette',
    'projects.featured_subtitle': "Avant de plonger dans mon travail, voici un aperçu de la façon dont je donne vie aux idées",
    // Education Card Descriptions
    'education.bachelor_desc': "Étude approfondie des fondamentaux de l'informatique, des principes d'ingénierie logicielle et du développement d'applications pratiques. Accent mis sur les technologies web modernes, les bases de données et l'architecture logicielle.",
    'education.master_desc': "Études avancées en informatique avec spécialisation en conception UI/UX & ingénierie de l'utilisabilité. Recherche axée sur l'accessibilité et l'ingénierie de l'utilisabilité.",
    // Skills Section
    'skills.title': 'Compétences',
    'skills.subtitle': 'Expertise Technique',
    'skills.description': 'Mes compétences techniques et les technologies avec lesquelles je travaille',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Outils & Cloud',
    'skills.design': 'Design',
    'skills.nextjs_desc': 'Framework React full-stack',
    'skills.react_desc': 'Bibliothèque UI pour construire des interfaces',
    'skills.typescript_desc': 'JavaScript typé',
    'skills.javascript_desc': 'Langage de programmation',
    'skills.aws_desc': 'Plateforme de cloud computing',
    'skills.git_desc': 'Système de contrôle de version',
    'skills.graphql_desc': 'Langage de requête pour APIs',
    'skills.figma_desc': 'Outil de design et prototypage',
    'skills.material_desc': 'Système de design',
    'skills.nodejs_desc': 'Runtime JavaScript',
    'skills.express_desc': 'Framework d\'application web',
    'skills.supabase_desc': 'Alternative open source à Firebase',
    'skills.mysql_desc': 'Base de données relationnelle',
    
    // Experience Section
    'experience.title': 'Expérience Professionnelle',
    'experience.software_engineer': 'Ingénieur Logiciel',
    'experience.fullstack_developer': 'Développeur Full-Stack',
    'experience.frontend_developer': 'Développeur Frontend',
    'experience.full_time': 'Temps Plein',
    'experience.working_student': 'Étudiant Salarié',
    'experience.internship': 'Stage',
    
    // Projects Section
    'projects.title': 'Projets',
    'projects.subtitle': 'Travaux Sélectionnés',
    'projects.description': 'Un aperçu de mes projets récents et réalisations techniques',
    'projects.view_project': 'Voir le Projet',
    'projects.case_study': 'Étude de Cas',
    'projects.tech_stack': 'Stack Technique',
    'projects.kader_qui_gere_title': 'K-Gère Gestion Restaurant',
    'projects.kader_qui_gere_desc': 'Une application web progressive (PWA) complète pour les restaurants africains avec support multi-restaurants, gestion des commandes en temps réel et gestion de la devise CFA.',
    'projects.devtrackr_title': 'DevTrackr',
    'projects.devtrackr_desc': 'Une plateforme complète de productivité développeur avec gestion des tâches, suivi du temps et analyses de projet.',
    'projects.keurgui_title': 'Restaurant Keur Gui',
    'projects.keurgui_desc': 'Site web de restaurant moderne avec menu interactif, commande en ligne et présentation des spéciaux hebdomadaires.',
    'projects.realestate_title': 'Site web immobilier',
    'projects.realestate_desc': 'Plateforme immobilière professionnelle avec annonces de propriétés et fonctionnalité de recherche avancée.',
    'projects.agro_title': 'Services agro-commerciaux',
    'projects.agro_desc': 'Site web de services agricoles avec catalogue de produits et solutions commerciales.',
    
    // Education Section
    'education.title': 'Éducation',
    'education.subtitle': 'Parcours Académique',
    'education.description': 'Mon parcours éducatif et réalisations académiques',
    'education.master_degree': 'Master',
    'education.bachelor_degree': 'Licence',
    'education.applied_computer_science': 'Informatique Appliquée',
    'education.uiux_design': 'Conception UI/UX & Ingénierie de l\'Utilisabilité',
    'education.computer_science': 'Informatique',
    'education.university': 'Université',
    'education.graduation_date': 'Date de Diplôme',
    'education.gpa': 'Moyenne',
    'education.relevant_courses': 'Cours Pertinents',
    'education.thesis': 'Mémoire',
    'education.capstone': 'Projet de Fin d\'Études',
    
    // Achievement Section
    'achievement.title': 'Réalisations',
    'achievement.subtitle': 'Certifications & Prix',
    'achievement.description': 'Certifications professionnelles et réalisations notables',
    'achievement.certifications': 'Certifications',
    'achievement.awards': 'Prix',
    'achievement.projects_completed': 'Projets Terminés',
    'achievement.hours_coded': 'Heures de Code',
    'achievement.coffee_consumed': 'Café Consommé',
    
    // Contact Section
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Travaillons Ensemble',
    'contact.description': 'Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.send_message': 'Envoyer le Message',
    'contact.connect_with_me': 'Me contacter',
    'contact.name': 'Nom',
    'contact.message': 'Message',
    'contact.name_placeholder': 'Votre nom',
    'contact.email_placeholder': 'votre.email@exemple.com',
    'contact.message_placeholder': 'Votre message...',
    'contact.success_title': 'Message Envoyé !',
    'contact.success_message': 'Merci de m\'avoir contacté. Je vous répondrai bientôt !',
    'contact.error_title': 'Erreur',
    'contact.error_message': 'Quelque chose s\'est mal passé. Veuillez réessayer.',
    'contact.close': 'Fermer',
    'contact.lets_connect': 'Connectons-nous',
    'contact.open_message': 'Je suis toujours ouvert à discuter de nouvelles opportunités, de projets intéressants, ou simplement d\'avoir une conversation sur la technologie et le développement.',
    'contact.email_me': 'M\'envoyer un email',
    'contact.follow_me': 'Me suivre',
    'contact.linkedin_desc': 'Se connecter professionnellement',
    'contact.github_desc': 'Voir mon code',
    'contact.ready_to_work': 'Prêt à travailler ensemble ?',
    'contact.work_together_message': 'Que vous ayez un projet en tête, que vous souhaitiez discuter d\'opportunités, ou simplement dire bonjour, j\'aimerais avoir de vos nouvelles.',
    'contact.send_email': 'Envoyer un email',
    'contact.response_time': 'Je réponds généralement sous 24 heures',
    
    // How I Build Page
    'howibuild.title': 'Comment Je Construis',
    'howibuild.subtitle': 'Mon approche pour construire des applications web modernes, maintenables et évolutives avec React & Next.js.',
    'howibuild.back': 'Retour au Portfolio',
    'howibuild.note': 'Note : Cette page met en évidence les concepts React & Next.js de base que j\'utilise dans ce portfolio. Mon expérience va bien au-delà de ceux-ci—parlons-en si vous voulez en savoir plus !',
    'howibuild.component_title': 'Composant',
    'howibuild.component_desc': 'Un composant est une pièce UI réutilisable et autonome. Dans React, tout est un composant, des boutons aux pages entières. Les composants vous aident à organiser votre code et le rendre modulaire.',
    'howibuild.component_why': 'Montre que j\'écris du code modulaire et maintenable.',
    'howibuild.state_title': 'État',
    'howibuild.state_desc': 'L\'état est des données qui changent au fil du temps dans votre application. Le hook useState de React vous permet d\'ajouter de l\'état à vos composants, permettant l\'interactivité.',
    'howibuild.state_why': 'Je peux construire des UIs interactives et dynamiques.',
    'howibuild.effect_title': 'Effet',
    'howibuild.effect_desc': 'Les effets vous permettent d\'exécuter du code en réponse aux changements dans votre composant (comme récupérer des données ou configurer un minuteur). Le hook useEffect de React est utilisé pour cela.',
    'howibuild.effect_why': 'Je sais comment gérer les effets de bord et la logique asynchrone.',
    'howibuild.context_title': 'Contexte',
    'howibuild.context_desc': 'Le contexte fournit un moyen de passer des données à travers l\'arbre des composants sans avoir à passer manuellement les props à chaque niveau.',
    'howibuild.context_why': 'Je peux construire des solutions de gestion d\'état évolutives.',
    'howibuild.memo_title': 'Memo & Callback',
    'howibuild.memo_desc': 'useMemo et useCallback aident à optimiser les performances en mémorisant les valeurs et fonctions pour éviter les re-rendus inutiles.',
    'howibuild.memo_why': 'J\'écris des applications React performantes.',
    'howibuild.reducer_title': 'Reducer',
    'howibuild.reducer_desc': 'useReducer est utile pour gérer une logique d\'état complexe qui implique plusieurs sous-valeurs ou quand l\'état suivant dépend du précédent.',
    'howibuild.reducer_why': 'Je peux gérer efficacement une logique d\'état complexe.',
    'howibuild.props_title': 'Props',
    'howibuild.props_desc': 'Les props sont la façon dont vous passez des données du composant parent au composant enfant. Elles rendent vos composants flexibles et réutilisables.',
    'howibuild.props_why': 'Je construis des composants flexibles et réutilisables.',
    'howibuild.routing_title': 'Routage Next.js',
    'howibuild.routing_desc': 'Next.js utilise le routage basé sur les fichiers. Chaque fichier dans le répertoire \'app\' ou \'pages\' devient une route. Cela rend la navigation et l\'organisation du code simples.',
    'howibuild.routing_why': 'J\'organise les projets pour l\'évolutivité et la navigation facile.',
    'howibuild.ssr_title': 'SSR & SSG',
    'howibuild.ssr_desc': 'Next.js vous permet de rendre les pages sur le serveur (SSR) ou au moment de la construction (SSG) pour de meilleures performances et SEO.',
    'howibuild.ssr_why': 'Je me soucie des performances et du SEO.',
    'howibuild.why_matters': 'Pourquoi c\'est important :',
    
    // Popup System
    'popup.profile_title': 'Section Profil',
    'popup.profile_desc': 'Une section héro dynamique avec un effet machine à écrire et une présentation professionnelle.',
    'popup.skills_title': 'Section Compétences',
    'popup.skills_desc': 'Présentation interactive des compétences avec barres de progression animées et icônes technologiques.',
    'popup.career_title': 'Section Carrière',
    'popup.career_desc': 'Chronologie d\'expérience professionnelle avec détails de l\'entreprise et descriptions de rôles.',
    'popup.coding_title': 'Démo de Codage',
    'popup.coding_desc': 'Animation de codage interactive montrant le workflow de développement et les compétences techniques.',
    'popup.projects_title': 'Section Projets',
    'popup.projects_desc': 'Présentation du portfolio avec cartes de projet, filtrage et éléments interactifs.',
    'popup.education_title': 'Section Éducation',
    'popup.education_desc': 'Présentation du parcours académique avec détails des diplômes et réalisations.',
    'popup.achievement_title': 'Section Réalisations',
    'popup.achievement_desc': 'Présentation des accomplissements et certifications avec éléments visuels.',
    'popup.contact_title': 'Section Contact',
    'popup.contact_desc': 'Formulaire de contact et informations avec éléments interactifs et validation.',
    'popup.approach': 'Approche',
    
    // Case Study
    'casestudy.back': 'Retour au Portfolio',
    'casestudy.case_study': 'Étude de Cas',
    'casestudy.completed_mvp': 'MVP Terminé',
    'casestudy.full_stack': 'Développement Full-Stack',
    'casestudy.summary': 'Résumé du Projet',
    'casestudy.problem': 'Le Problème',
    'casestudy.goals': 'Objectifs',
    'casestudy.tech_stack': 'Stack Technique',
    'casestudy.implementation': 'Implémentation Technique',
    'casestudy.challenges': 'Défis & Solutions',
    'casestudy.lessons': 'Leçons Clés',
    'casestudy.future': 'Améliorations Futures',
    'casestudy.links': 'Liens du Projet',
    
    // Common
    'common.view_live': 'Voir en Direct',
    'common.view_code': 'Voir le Code',
    'common.more': 'Plus',
    'common.learn_more': 'En Savoir Plus',
    'common.close': 'Fermer',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  // Initialize language on mount
  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    const initialLanguage = savedLanguage || 'en';
    setLanguageState(initialLanguage);
  }, []);

  // Update language and persist to localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Toggle between languages
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 