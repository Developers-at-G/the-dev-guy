'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const Skills = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    import('../../../public/Animation/coding-animation.json').then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  const allSkills = [
    {
      category: "Frontend",
      skills: [
        { name: 'Next.js', icon: '/Logos/nextdotjs-color.svg' },
        { name: 'React', icon: '/Logos/react-color.svg' },
        { name: 'TypeScript', icon: '/Logos/typescript-color.svg' },
        { name: 'JavaScript', icon: '/Logos/javascript-color.svg' },
      ]
    },
    {
      category: "Tools & Cloud",
      skills: [
        { name: 'AWS', icon: '/Logos/amazonwebservices-color.svg' },
        { name: 'Git', icon: '/Logos/git-color.svg' },
        { name: 'GraphQL', icon: '/Logos/graphql-color.svg' },
      ]
    },
    {
      category: "Design",
      skills: [
        { name: 'Figma', icon: '/Logos/figma-color.svg' },
        { name: 'Material Design', icon: '/Logos/materialdesign-color.svg' },
      ]
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; icon: string } }) => (
    <div className="mb-6 group">
      <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
        <Image
          src={skill.icon}
          width={24}
          height={24}
          alt={skill.name}
          className="w-6 h-6"
        />
        <span className="text-gray-200">{skill.name}</span>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen w-full py-20" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center text-white mb-16">SKILLS</h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            {animationData && (
              <Lottie 
                animationData={animationData}
                loop={true}
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </div>
          
          <div className="order-1 lg:order-2 space-y-12">
            {allSkills.map((category) => (
              <div key={category.category}>
                <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                  {category.category}
                </h3>
                <div>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
