'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const skillsData = [
  {
    category: "frontend",
    skills: [
      { name: 'Next.js', icon: '/Logos/nextdotjs-color.svg', description: 'nextjs_desc' },
      { name: 'React', icon: '/Logos/react-color.svg', description: 'react_desc' },
      { name: 'TypeScript', icon: '/Logos/typescript-color.svg', description: 'typescript_desc' },
      { name: 'JavaScript', icon: '/Logos/javascript-color.svg', description: 'javascript_desc' },
    ]
  },
  {
    category: "tools",
    skills: [
      { name: 'AWS', icon: '/Logos/amazonwebservices-color.svg', description: 'aws_desc' },
      { name: 'Git', icon: '/Logos/git-color.svg', description: 'git_desc' },
      { name: 'GraphQL', icon: '/Logos/graphql-color.svg', description: 'graphql_desc' },
    ]
  },
  {
    category: "design",
    skills: [
      { name: 'Figma', icon: '/Logos/figma-color.svg', description: 'figma_desc' },
      { name: 'Material Design', icon: '/Logos/materialdesign-color.svg', description: 'material_desc' },
    ]
  },
  {
    category: "backend",
    skills: [
      { name: 'Node.js', icon: '/Images/nodeJS.png', description: 'nodejs_desc' },
      { name: 'Express', icon: '/Images/Expressjs.png', description: 'express_desc' },
      { name: 'Supabase', icon: '/Images/supabase.png', description: 'supabase_desc' },
      { name: 'MySQL', icon: '/Images/mysql.png', description: 'mysql_desc' },
    ]
  }
];

// Simplified compact skills grid without interactive cards

function ClientSkills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = React.useState('frontend');

  return (
    <section id="skills" className="py-14">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">{t('skills.title')}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-2 text-sm text-muted-foreground">{t('skills.description')}</p>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-1 justify-center" role="tablist">
          {skillsData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === category.category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background/60 text-muted-foreground border-border hover:bg-primary/10 hover:text-primary'
              }`}
              role="tab"
              aria-selected={activeCategory === category.category}
            >
              {t(`skills.${category.category}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {(skillsData.find((cat) => cat.category === activeCategory)?.skills || [])
            .slice(0, 8)
            .map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 rounded-xl border bg-background/60 p-3">
                <div className="relative w-8 h-8 flex-shrink-0 overflow-hidden rounded">
                  <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
                </div>
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

const Skills = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientSkills />;
};

export default Skills;
