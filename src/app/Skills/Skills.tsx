'use client';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import SkillProficiency from '../../components/SkillProficiency';
import { skillsData } from '../../data/skills';

type ViewMode = 'proficiency' | 'category';

function SkillsSection() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<ViewMode>('proficiency');
  const [activeCategory, setActiveCategory] = useState(skillsData[0]?.id || 'frontend');

  // Get all skills for proficiency view
  const allSkills = skillsData.flatMap(category => category.skills);
  
  // Sort skills by proficiency level for the main view
  const skillsByProficiency = [...allSkills].sort((a, b) => b.level - a.level);
  
  // Get skills for category view
  const activeSkillCategory = skillsData.find(cat => cat.id === activeCategory) || skillsData[0];

  // Get top skills (80%+)
  const expertSkills = skillsByProficiency.filter(skill => skill.level >= 80);
  const proficientSkills = skillsByProficiency.filter(skill => skill.level >= 65 && skill.level < 80);
  const developingSkills = skillsByProficiency.filter(skill => skill.level < 65);

  return (
    <Section id="skills" variant="muted">
      <Container>
        <SectionHeader
          title="Technical Skills"
          subtitle="Proficiency levels based on real-world project experience and continuous learning"
        />

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-border bg-background p-1">
            <Button
              variant={viewMode === 'proficiency' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('proficiency')}
              className="rounded-md"
            >
              Proficiency View
            </Button>
            <Button
              variant={viewMode === 'category' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('category')}
              className="rounded-md"
            >
              Category View
            </Button>
          </div>
        </div>

        {viewMode === 'proficiency' ? (
          /* Proficiency-based view */
          <div className="space-y-12">
            {/* Expert Level Skills */}
            {expertSkills.length > 0 && (
              <div>
                <div className="flex items-center justify-center mb-6">
                  <Badge variant="default" className="text-sm px-4 py-2 bg-primary text-primary-foreground">
                    Expert Level (80%+)
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
                  {expertSkills.map((skill, index) => (
                    <SkillProficiency
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      category={skill.category}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Proficient Level Skills */}
            {proficientSkills.length > 0 && (
              <div>
                <div className="flex items-center justify-center mb-6">
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    Proficient (65-79%)
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
                  {proficientSkills.map((skill, index) => (
                    <SkillProficiency
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      category={skill.category}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Developing Skills */}
            {developingSkills.length > 0 && (
              <div>
                <div className="flex items-center justify-center mb-6">
                  <Badge variant="outline" className="text-sm px-4 py-2">
                    Developing (&lt;65%)
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
                  {developingSkills.map((skill, index) => (
                    <SkillProficiency
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      category={skill.category}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Category-based view */
          <div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {skillsData.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.title}
                </Button>
              ))}
            </div>

            {/* Active Category */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {activeSkillCategory.title}
              </h3>
              <p className="text-muted-foreground">
                {activeSkillCategory.description}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {activeSkillCategory.skills.map((skill, index) => (
                <SkillProficiency
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                  category={skill.category}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Proficiency levels reflect practical experience, project complexity, and continuous learning
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span>80%+ = Expert (Can mentor others, lead complex projects)</span>
            <span>65-79% = Proficient (Comfortable with most features and patterns)</span>
            <span>&lt;65% = Developing (Active learning, growing experience)</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function Skills() {
  return <SkillsSection />;
}
