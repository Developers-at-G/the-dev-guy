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
        />

        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.06 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
                  {CATEGORY_ICONS[category.id] ?? <CircleIcon />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-ds-lg font-semibold text-foreground">{category.title}</h3>
                    <span className="rounded-md border border-border bg-muted px-1.5 py-0.5 text-ds-xs text-muted-foreground">
                      {category.skills.length}
                    </span>
                  </div>
                  <p className="mt-0.5 text-ds-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center gap-2.5 rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/25"
                  >
                    {skill.icon && (
                      <div className="relative h-10 w-10 shrink-0">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="text-center text-ds-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-ds-xs text-muted-foreground">{getTier(skill.level)}</span>
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
