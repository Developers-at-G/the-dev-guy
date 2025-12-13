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
          title={t('career.title')}
          subtitle={t('career.subtitle')}
          description={t('career.description')}
        />

        <div className="relative">
          {/* Timeline line - only visible on larger screens */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

          <div className="space-y-8 md:space-y-12 md:pl-16">
            {careerData.map((experience, index) => (
              <CareerCard
                key={experience.id}
                experience={experience}
                index={index}
                isExpanded={expandedItems.has(experience.id)}
                onToggle={() => toggleExpanded(experience.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function Career() {
  return <CareerSection />;
}

