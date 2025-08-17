import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Skill } from '../data/skills';

interface SkillCardProps {
  skill: Skill;
  showLevel?: boolean;
}

export const SkillCard: React.FC<SkillCardProps> = ({ 
  skill, 
  showLevel = false 
}) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted/20 flex-shrink-0">
            <Image
              src={skill.icon}
              alt={skill.name}
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {skill.name}
            </h3>
            {skill.experience && (
              <Badge variant="outline" size="sm">
                {skill.experience}
              </Badge>
            )}
          </div>
        </div>

        {skill.description && (
          <p className="text-sm text-muted-foreground mb-4">
            {skill.description}
          </p>
        )}

        {showLevel && skill.level && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Proficiency</span>
              <span className="font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
