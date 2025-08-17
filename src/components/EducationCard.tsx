import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Education } from '../data/education';

interface EducationCardProps {
  education: Education;
  isExpanded: boolean;
  onToggle: () => void;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  education,
  isExpanded,
  onToggle
}) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-start gap-4">
          {education.image && (
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted/20 flex-shrink-0">
              <Image
                src={education.image}
                alt={education.institution}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex-1 space-y-2">
            <CardTitle className="text-xl">{education.degree}</CardTitle>
            <div className="space-y-1">
              <p className="font-semibold text-primary">{education.institution}</p>
              <p className="text-muted-foreground">{education.field}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{education.period}</span>
                <span>•</span>
                <span>{education.location}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {education.description && (
          <p className="text-muted-foreground mb-4">
            {education.description}
          </p>
        )}

        {education.achievements && (
          <>
            <button
              onClick={onToggle}
              className="text-primary hover:text-primary/80 text-sm font-medium transition-colors mb-4"
            >
              {isExpanded ? 'Hide' : 'Show'} Key Achievements
            </button>

            {isExpanded && (
              <div className="space-y-2">
                {education.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
