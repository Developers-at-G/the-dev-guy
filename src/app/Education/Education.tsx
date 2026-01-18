'use client';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { EducationCard } from '../../components/EducationCard';
import { getEducationData } from '../../data/education';

function EducationSection() {
  const { t, translations } = useLanguage();
  const educationData = getEducationData(translations);
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
          title={t('education.title', 'common')}
          description={t('education.academic_background', 'common')}
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
