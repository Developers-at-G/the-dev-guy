'use client';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import animationData from '../coding-animation.json';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const allSkills = [
  {
    category: "Frontend",
    skills: [
      { name: 'Next.js', icon: '/Logos/nextdotjs-color.svg', description: 'Full-stack React framework' },
      { name: 'React', icon: '/Logos/react-color.svg', description: 'UI library for building interfaces' },
      { name: 'TypeScript', icon: '/Logos/typescript-color.svg', description: 'Typed JavaScript' },
      { name: 'JavaScript', icon: '/Logos/javascript-color.svg', description: 'Programming language' },
    ]
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: 'AWS', icon: '/Logos/amazonwebservices-color.svg', description: 'Cloud computing platform' },
      { name: 'Git', icon: '/Logos/git-color.svg', description: 'Version control system' },
      { name: 'GraphQL', icon: '/Logos/graphql-color.svg', description: 'Query language for APIs' },
    ]
  },
  {
    category: "Design",
    skills: [
      { name: 'Figma', icon: '/Logos/figma-color.svg', description: 'Design and prototyping tool' },
      { name: 'Material Design', icon: '/Logos/materialdesign-color.svg', description: 'Design system' },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: 'Node.js', icon: '/Images/nodeJS.png', description: 'JavaScript runtime' },
      { name: 'Express', icon: '/Images/Expressjs.png', description: 'Web application framework' },
      { name: 'Supabase', icon: '/Images/supabase.png', description: 'Open source Firebase alternative' },
      { name: 'MySQL', icon: '/Images/mysql.png', description: 'Relational database' },
    ]
  }
];

const SkillCard = ({ skill }: { skill: { name: string; icon: string; description: string } }) => (
  <div className="transition-all duration-300 group">
    <div className="relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/20 backdrop-blur-lg border-2 border-primary/30 shadow-xl hover:shadow-primary/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0" />
      <div className="w-16 h-16 mb-4 relative z-10">
        <Image
          src={skill.icon}
          fill
          alt={skill.name}
          className="object-contain"
        />
      </div>
      <span className="text-white font-semibold text-center mb-2 block z-10 drop-shadow-lg">{skill.name}</span>
      <span className="text-primary-foreground text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 block z-10 drop-shadow">
        {skill.description}
      </span>
    </div>
  </div>
);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  return (
    <section className="section bg-background" id="skills">
      <div className="container mx-auto px-4 py-32">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            My technical skills and technologies I work with
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skills Content */}
          <div className="order-2 lg:order-1">
            <Tab.Group selectedIndex={selectedCategory} onChange={setSelectedCategory}>
              <Tab.List className="flex space-x-1 rounded-xl bg-white/10 backdrop-blur-sm p-1 border border-white/20">
                {allSkills.map((category) => (
                  <Tab
                    key={category.category}
                    as={Fragment}
                  >
                    {({ selected }) => (
                      <button
                        className={`
                          w-full rounded-lg py-2.5 text-sm font-medium leading-5
                          ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2
                          ${selected
                            ? 'bg-white/20 text-primary shadow'
                            : 'text-muted-foreground hover:bg-white/[0.12] hover:text-primary'
                          }
                        `}
                      >
                        {category.category}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {allSkills.map((category, idx) => (
                  <Tab.Panel
                    key={idx}
                    id={`skills-panel-${idx}`}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                  >
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Animation */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-background rounded-2xl p-8 border border-border shadow-lg">
                <Lottie 
                  animationData={animationData}
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
};

export default Skills;
