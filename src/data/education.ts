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

export const educationData: Education[] = [
  {
    id: 'master',
    institution: 'University of Applied Sciences',
    degree: 'Master of Science',
    field: 'Applied Computer Science - UI/UX Design and Usability Engineering',
    period: '2022 - 2024',
    location: 'Germany',
    image: '/Images/Master.png',
    description: 'Specialized in user interface design, user experience research, and usability engineering.',
    achievements: [
      'Graduated with distinction',
      'Specialized in UI/UX Design and Usability Engineering',
      'Completed thesis on modern web application design patterns',
      'Active participation in design workshops and seminars'
    ]
  },
  {
    id: 'bachelor',
    institution: 'Université Cheikh Anta Diop',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    period: '2018 - 2021',
    location: 'Senegal',
    image: '/Images/Bachelor.png',
    description: 'Foundation in computer science with focus on software development and programming.',
    achievements: [
      'Strong foundation in computer science fundamentals',
      'Focus on software development and programming',
      'Participated in various coding competitions',
      'Completed multiple software development projects'
    ]
  }
];
