import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { CareerExperience } from '../data/career';

interface CareerCardProps {
  experience: CareerExperience;
  isExpanded: boolean;
  onToggle: () => void;
}

export const CareerCard: React.FC<CareerCardProps> = ({
  experience,
  isExpanded,
  onToggle
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'default';
      case 'freelance': return 'secondary';
      case 'internship': return 'outline';
      default: return 'default';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CardTitle className="text-xl">{experience.position}</CardTitle>
              <Badge variant={getTypeColor(experience.type)} size="sm">
                {experience.type}
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-primary">{experience.company}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{experience.period}</span>
                <span>•</span>
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Toggle Achievements */}
        <button
          onClick={onToggle}
          className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
        >
          {isExpanded ? 'Hide' : 'Show'} Key Achievements
        </button>

        {/* Achievements */}
        {isExpanded && (
          <div className="mt-4 space-y-2">
            {experience.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
