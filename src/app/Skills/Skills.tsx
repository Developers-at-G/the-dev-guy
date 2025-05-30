import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import animationData from '../coding-animation.json';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const Skills = () => {

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
    },
    {
      category: "Backend",
      skills: [
        { name: 'Node.js', icon: '/Images/nodeJS.png' },
        { name: 'Express', icon: '/Images/Expressjs.png' },
        { name: 'Supabase', icon: '/Images/supabase.png' },
        { name: 'MySQL', icon: '/Images/mysql.png' },
      ]
    }
  ];

  const SkillCard = ({ skill }: { skill: { name: string; icon: string } }) => (
    <div className="transform transition-all duration-300 hover:scale-105">
      <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50">
        <div className="w-12 h-12 mb-3 relative">
          <Image
            src={skill.icon}
            fill
            alt={skill.name}
            className="object-contain"
          />
        </div>
        <span className="text-gray-200 font-medium">{skill.name}</span>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen w-full py-20 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center text-white mb-16 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            SKILLS
          </span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />
            <Lottie 
              animationData={animationData}
              loop={true}
              style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6">
              {allSkills.map((category) => (
                <div key={category.category} className="col-span-2">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
