import React from 'react';

interface SkillProficiencyProps {
  skill: string;
  level: number; 
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design';
  className?: string;
  delay?: number; 
}

const categoryColors = {
  frontend: { primary: '#3b82f6', secondary: '#06b6d4', bg: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
  backend: { primary: '#10b981', secondary: '#059669', bg: 'bg-gradient-to-r from-green-500 to-emerald-500' }, 
  database: { primary: '#8b5cf6', secondary: '#7c3aed', bg: 'bg-gradient-to-r from-purple-500 to-violet-500' },
  tools: { primary: '#f97316', secondary: '#f59e0b', bg: 'bg-gradient-to-r from-orange-500 to-amber-500' },
  design: { primary: '#ec4899', secondary: '#f43f5e', bg: 'bg-gradient-to-r from-pink-500 to-rose-500' }
};

export const SkillProficiency: React.FC<SkillProficiencyProps> = ({
  skill,
  level,
  category,
  className = '',
  delay = 0
}) => {
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (level / 100) * circumference;
  const colors = categoryColors[category];
  const gradientId = `gradient-${skill.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div 
      className={`flex flex-col items-center p-4 group hover:scale-105 transition-all duration-300 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-24 h-24 mb-3 group-hover:animate-pulse">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
          </defs>
          
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-border"
          />
          
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={`url(#${gradientId})`}
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out group-hover:drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              animationDelay: `${delay}ms`
            }}
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-foreground">
            {level}%
          </span>
        </div>
      </div>

      <h4 className="font-semibold text-sm text-center text-foreground">
        {skill}
      </h4>
    </div>
  );
};

export default SkillProficiency;
