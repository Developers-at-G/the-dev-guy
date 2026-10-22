'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { getSkillsData } from '@/data/skills';
import { useLanguage } from '@/app/context/LanguageContext';
import {
  CircleIcon,
  DatabaseIcon,
  MonitorIcon,
  PenToolIcon,
  ServerIcon,
  WrenchIcon,
} from '@/components/icons';

function getTier(level: number) {
  if (level >= 80) return 'Expert';
  if (level >= 65) return 'Proficient';
  return 'Learning';
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  frontend: <MonitorIcon />,
  backend: <ServerIcon />,
  database: <DatabaseIcon />,
  tools: <WrenchIcon />,
  design: <PenToolIcon />,
};

export const SkillsSection: React.FC = () => {
  const { t, translations } = useLanguage();
  const skillsData = getSkillsData(translations);

  return (
    <Section id="skills" variant="muted">
      <Container>
        <SectionHeader
          title={t('skills.technical_skills', 'common')}
          subtitle={t('skills.subtitle', 'common')}
          description={t('skills.description', 'common')}
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              className="rounded-lg border border-border bg-card p-5 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-foreground">
                  {CATEGORY_ICONS[category.id] ?? <CircleIcon />}
                </span>
                <div className="min-w-0">
                  <h3 className="text-ds-base font-semibold text-foreground sm:text-ds-lg">
                    {category.title}
                  </h3>
                  <p className="text-ds-xs text-muted-foreground sm:text-ds-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    title={[skill.description, skill.experience, getTier(skill.level)]
                      .filter(Boolean)
                      .join(' · ')}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-2.5 py-1.5 transition-colors hover:border-foreground/30"
                  >
                    {skill.icon && (
                      <span className="relative h-4 w-4 shrink-0">
                        <Image
                          src={skill.icon}
                          alt=""
                          fill
                          sizes="16px"
                          className="object-contain"
                        />
                      </span>
                    )}
                    <span className="text-ds-xs font-medium text-foreground sm:text-ds-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
