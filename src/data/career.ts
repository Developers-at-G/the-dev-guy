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
    position: 'Software Developer',
    period: 'January 2023 - Present',
    location: 'Munich, Germany',
    type: 'work',
    description: 'Developing and maintaining reusable UI components and contributing to shared design systems across projects.',
    achievements: [
      'Developed and maintained reusable UI components with React, Next.js, and TypeScript',
      'Developed reusable components contributing to a shared design system across projects',
      'Worked closely with backend engineers to integrate APIs and improve data flow between frontend and backend',
      'Collaborated on customer-facing features for high-traffic applications with focus on Accessibility and Lighthouse performance',
      'Implemented engaging scroll animations using GSAP to enhance user experience'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'API Integration', 'Design Systems', 'Accessibility', 'GSAP']
  },
  {
    id: 'future-stories',
    company: 'Future Stories',
    position: 'Software Developer (Working Student)',
    period: 'December 2021 - November 2022',
    location: 'Hamburg, Germany',
    type: 'work',
    description: 'Maintained and enhanced Shopify-based e-commerce solutions while building custom applications for improved functionality.',
    achievements: [
      'Maintained and updated the company\'s Shopify-based website using Liquid and jQuery',
      'Built custom Shopify apps using React.js to enhance e-commerce functionality',
      'Contributed to UI improvements and optimized code for performance'
    ],
    technologies: ['Shopify', 'Liquid', 'jQuery', 'React.js', 'E-commerce', 'Performance Optimization']
  },
  {
    id: 'obertys',
    company: 'Obertys',
    position: 'Software Developer (Intern)',
    period: 'January 2020 - June 2020',
    location: 'Dakar, Senegal',
    type: 'internship',
    description: 'Developed banking web applications and contributed to agile development processes with focus on API integration.',
    achievements: [
      'Developed banking web applications using React',
      'Integrated RESTful APIs to enable seamless communication between frontend and backend systems',
      'Participated in agile development sprints and supported testing and documentation efforts'
    ],
    technologies: ['React', 'RESTful APIs', 'Banking Applications', 'Agile Development', 'Testing']
  },
  {
    id: 'abis-teknoloji',
    company: 'ABİS Teknoloji',
    position: 'Full-stack Developer (Intern)',
    period: 'June 2019 - September 2019',
    location: 'Kayseri, Türkiye',
    type: 'internship',
    description: 'Developed and maintained web applications using ASP.NET Core technology stack.',
    achievements: [
      'Developed and maintained web applications with ASP.NET Core',
      'Worked with SQL databases for data management',
      'Collaborated with team using Git for version control'
    ],
    technologies: ['ASP.NET Core', 'C#', 'SQL', 'Git']
  }
];
