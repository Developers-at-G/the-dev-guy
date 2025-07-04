import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button } from '@headlessui/react';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import animationData from '../coding-animation.json';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

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
    <div className="transform transition-all duration-300 hover:scale-105 group">
      <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20">
        <div className="w-16 h-16 mb-4 relative">
          <Image
            src={skill.icon}
            fill
            alt={skill.name}
            className="object-contain"
          />
        </div>
        <span className="text-gray-200 font-medium text-center mb-2">{skill.name}</span>
        <span className="text-gray-400 text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {skill.description}
        </span>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen w-full py-20 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center text-white mb-16 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            SKILLS
          </span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-full blur-3xl" />
            <Lottie 
              animationData={animationData}
              loop={true}
              style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <Tab.Group selectedIndex={selectedCategory} onChange={setSelectedCategory}>
              <Tab.List className="flex space-x-1 rounded-xl bg-slate-800/50 p-1 mb-8">
                {allSkills.map((category) => (
                  <Tab
                    key={category.category}
                    as={Fragment}
                  >
                    {({ selected }) => (
                      <Button
                        className={`
                          w-full rounded-lg py-2.5 text-sm font-medium leading-5
                          ring-white ring-opacity-60 ring-offset-2 ring-offset-emerald-400 focus:outline-none focus:ring-2
                          ${selected
                            ? 'bg-emerald-600 text-white shadow'
                            : 'text-gray-300 hover:bg-slate-700/50 hover:text-white'
                          }
                        `}
                      >
                        {category.category}
                      </Button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {allSkills.map((category, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={`
                      rounded-xl bg-slate-800/30 p-6
                      ring-white ring-opacity-60 ring-offset-2 ring-offset-emerald-400 focus:outline-none focus:ring-2
                    `}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {category.skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
