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
    id: 'smal-gmbh',
    company: 'Smal GmbH',
    position: 'Frontend Engineer',
    period: 'January 2023 - Present',
    location: 'Munich, Germany',
    type: 'work',
    description: 'Building and maintaining reusable UI components and complex page layouts, leading major framework migrations, and implementing high-performance user experiences.',
    achievements: [
      'Built and maintained reusable UI components and complex page layouts using React, Next.js, Tailwind CSS, and Contentful, used across multiple production features',
      'Contribuded to a major migration from Next.js 12 to Next.js 14, including upgrades to React 19, Node.js 18 LTS, and Tailwind CSS 3, resulting in improved performance and reduced technical debt',
      'Designed and implemented a Product Configurator allowing users to customize, visualize, and price full setups with real-time cart integration',
      'Implemented high-performance animations and scroll-based interactions using GSAP, balancing visual polish with runtime performance',
      'Replaced custom internationalization logic with native Next.js middleware, improving maintainability and consistency across locales',
      'Collaborated closely with designers and stakeholders to deliver polished, production-quality UX'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Contentful', 'GSAP', 'i18n']
  },
  {
    id: 'future-stories',
    company: 'Future Stories',
    position: 'Frontend Developer (Working Student)',
    period: 'December 2021 - November 2022',
    location: 'Hamburg, Germany',
    type: 'work',
    description: 'Maintained and improved a Shopify-based e-commerce platform, focusing on frontend quality, performance, and usability.',
    achievements: [
      'Maintained and improved a Shopify-based e-commerce platform, focusing on frontend quality, performance, and usability',
      'Developed custom Shopify applications using React to extend core e-commerce functionality',
      'Improved code quality and user experience across key customer-facing pages'
    ],
    technologies: ['Shopify', 'React', 'E-commerce', 'Performance Optimization', 'UX']
  },
  {
    id: 'obertys',
    company: 'Obertys',
    position: 'Frontend Developer (Intern)',
    period: 'January 2020 - June 2020',
    location: 'Dakar, Senegal',
    type: 'internship',
    description: 'Developed frontend features for web-based banking applications and contributed to mobile banking solutions.',
    achievements: [
      'Developed frontend features for web-based banking applications using React',
      'Integrated REST APIs to ensure smooth frontend–backend communication',
      'Contributed to a mobile banking application using React Native',
      'Participated in Agile sprints, testing, and technical documentation'
    ],
    technologies: ['React', 'React Native', 'REST APIs', 'Banking Applications', 'Agile Development']
  }
];

