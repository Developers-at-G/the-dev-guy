'use client';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { CareerCard } from '../../components/CareerCard';
import { careerData } from '../../data/career';

function CareerSection() {
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
    <Section id="career" variant="default">
      <Container>
        <SectionHeader
          title={t('experience.title')}
          description="My professional journey and key experiences in software development"
        />

        <div className="space-y-6">
          {careerData.map((experience) => (
            <CareerCard
              key={experience.id}
              experience={experience}
              isExpanded={expandedItems.has(experience.id)}
              onToggle={() => toggleExpanded(experience.id)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function Career() {
  return <CareerSection />;
}
