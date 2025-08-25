'use client';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { EducationCard } from '../../components/EducationCard';
import { educationData } from '../../data/education';

function EducationSection() {
  const { t } = useLanguage();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <Section id="education" variant="muted">
      <Container>
        <SectionHeader
          title={t('education.title')}
          description="Academic background and continuous learning journey"
        />

        <div className="space-y-6">
          {educationData.map((education) => (
            <EducationCard
              key={education.id}
              education={education}
              isExpanded={expandedItems.has(education.id)}
              onToggle={() => toggleExpanded(education.id)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function Education() {
  return <EducationSection />;
}
