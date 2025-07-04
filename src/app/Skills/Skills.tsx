'use client';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useLanguage } from '../context/LanguageContext';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-64 h-64 bg-muted rounded-lg animate-pulse" />
});

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

// Define Skill type
interface Skill {
  name: string;
  icon: string;
  description: string;
}

const SkillCard = ({ skill, description }: { skill: Skill; description: string }) => {
  const [showDesc, setShowDesc] = React.useState(false);
  return (
    <button
      type="button"
      tabIndex={0}
      className="group relative w-full focus:outline-none"
      onMouseEnter={() => setShowDesc(true)}
      onMouseLeave={() => setShowDesc(false)}
      onFocus={() => setShowDesc(true)}
      onBlur={() => setShowDesc(false)}
      onClick={() => setShowDesc((v) => !v)}
      aria-label={skill.name}
    >
      <div className="flex flex-col items-center justify-center p-5 md:p-6 rounded-3xl bg-background/70 backdrop-blur-xl border border-primary/10 shadow-lg hover:shadow-primary/30 hover:-translate-y-1 hover:scale-105 focus:scale-105 transition-all duration-300 min-h-[140px] md:min-h-[170px]">
        <div className="relative w-16 h-16 mb-3 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all">
          <Image
            src={skill.icon}
            alt={skill.name}
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
        <span className="text-foreground font-bold text-center mb-1 block z-10 text-base md:text-lg">
          {skill.name}
        </span>
        <span
          className={`text-muted-foreground text-xs md:text-sm text-center mt-1 block z-10 drop-shadow transition-all duration-300 ${showDesc ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0`}
        >
          {description}
        </span>
      </div>
    </button>
  );
};

function ClientSkills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = React.useState('frontend');
  const tabListRef = React.useRef<HTMLDivElement>(null);

  return (
    <section className="section bg-background relative" id="skills">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-background pointer-events-none" />
      <div className="container mx-auto relative z-10 px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-3 md:mb-6 tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            {t('skills.description')}
          </p>
        </div>
        {/* Category Tabs */}
        <div
          ref={tabListRef}
          className="flex gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2 justify-center scrollbar-hide"
          role="tablist"
        >
          {skillsData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap border-2 focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                activeCategory === category.category
                  ? 'bg-primary text-primary-foreground border-primary shadow'
                  : 'bg-background/60 text-muted-foreground border-primary/10 hover:bg-primary/10 hover:text-primary'
              }`}
              role="tab"
              aria-selected={activeCategory === category.category}
              tabIndex={0}
            >
              {t(`skills.${category.category}`)}
            </button>
          ))}
        </div>
        {/* Skills Grid & Animation */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 md:gap-16 items-center">
          {/* Skills Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {skillsData
                .find(cat => cat.category === activeCategory)
                ?.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    description={t(`skills.${skill.description}`)}
                  />
                ))}
            </div>
          </div>
          {/* Animation */}
          <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
            <div className="relative w-full max-w-xs md:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-background rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <Lottie
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  animationData={require('../coding-animation.json')}
                  loop={true}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
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
