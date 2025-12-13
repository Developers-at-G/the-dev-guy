import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/Card';
import { Badge } from './ui/Badge';
import { CareerExperience } from '../data/career';
import { clsx } from 'clsx';

interface CareerCardProps {
  experience: CareerExperience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const typeColors = {
  work: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  internship: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  freelance: 'bg-green-500/10 text-green-600 border-green-500/20'
};

const typeLabels = {
  work: 'Full-time',
  internship: 'Internship',
  freelance: 'Freelance'
};

export const CareerCard: React.FC<CareerCardProps> = ({
  experience,
  index,
  isExpanded,
  onToggle
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative md:pl-8">
      {/* Timeline line connector - show for all except last item */}
      {index < 3 && (
        <div className="absolute left-0 top-20 w-0.5 h-full bg-gradient-to-b from-primary/30 via-primary/20 to-transparent hidden md:block" />
      )}

      <Card
        className={clsx(
          'relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10',
          'border-l-4',
          experience.type === 'work' && 'border-l-blue-500',
          experience.type === 'internship' && 'border-l-purple-500',
          experience.type === 'freelance' && 'border-l-green-500',
          isExpanded && 'shadow-lg shadow-primary/5'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div
          className={clsx(
            'absolute inset-0 opacity-0 transition-opacity duration-500',
            isHovered && 'opacity-100',
            experience.type === 'work' && 'bg-gradient-to-br from-blue-500/5 via-transparent to-transparent',
            experience.type === 'internship' && 'bg-gradient-to-br from-purple-500/5 via-transparent to-transparent',
            experience.type === 'freelance' && 'bg-gradient-to-br from-green-500/5 via-transparent to-transparent'
          )}
        />

        {/* Timeline dot */}
        <div className="absolute left-0 top-6 -translate-x-1/2 hidden md:flex">
          <div
            className={clsx(
              'w-4 h-4 rounded-full border-4 border-background shadow-lg transition-all duration-300',
              isHovered && 'scale-125',
              experience.type === 'work' && 'bg-blue-500',
              experience.type === 'internship' && 'bg-purple-500',
              experience.type === 'freelance' && 'bg-green-500'
            )}
          >
            <div className="w-full h-full rounded-full bg-white/20 animate-pulse" />
          </div>
        </div>

        <CardHeader className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {experience.position}
                  </h3>
                  <p className="text-xl font-semibold text-primary">
                    {experience.company}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={clsx('flex-shrink-0', typeColors[experience.type])}
                >
                  {typeLabels[experience.type]}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{experience.period}</span>
                </div>
                <span className="text-muted-foreground/50">•</span>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs bg-muted/50 hover:bg-muted transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Achievements */}
          {experience.achievements.length > 0 && (
            <div className="pt-2 border-t border-border/50">
              <button
                onClick={onToggle}
                className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors mb-4 group"
              >
                <svg
                  className={clsx(
                    'w-4 h-4 transition-transform duration-300',
                    isExpanded && 'rotate-90'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>{isExpanded ? 'Hide' : 'Show'} Key Achievements ({experience.achievements.length})</span>
              </button>

              {isExpanded && (
                <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  {experience.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 group/item"
                    >
                      <div
                        className={clsx(
                          'w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300',
                          'group-hover/item:scale-150',
                          experience.type === 'work' && 'bg-blue-500',
                          experience.type === 'internship' && 'bg-purple-500',
                          experience.type === 'freelance' && 'bg-green-500'
                        )}
                      />
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

