'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, SectionHeader } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { getSkillsData } from '../../data/skills';
import { useLanguage } from '../context/LanguageContext';

function getTier(level: number) {
  if (level >= 80) return { label: 'Expert',     strip: 'bg-emerald-500', glow: 'hover:shadow-emerald-500/15', dot: 'bg-emerald-500' };
  if (level >= 65) return { label: 'Proficient', strip: 'bg-sky-500',     glow: 'hover:shadow-sky-500/15',     dot: 'bg-sky-500'     };
  return              { label: 'Learning',   strip: 'bg-violet-500',  glow: 'hover:shadow-violet-500/15',  dot: 'bg-violet-500'  };
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  frontend: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  backend: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <circle cx="6" cy="6" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="6" cy="18" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  database: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  tools: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  design: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
};

function SkillsSection() {
  const { t, translations } = useLanguage();
  const skillsData = getSkillsData(translations);

  return (
    <Section id="skills" variant="muted" className="relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          title={t('skills.technical_skills', 'common')}
          subtitle={t('skills.subtitle', 'common')}
        />

        <div className="space-y-14">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.08 }}
            >
              {/* Category heading */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {CATEGORY_ICONS[category.id] ?? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-bold text-foreground leading-none">{category.title}</h3>
                      <span className="text-[11px] font-medium text-muted-foreground bg-muted border border-border/50 px-2 py-0.5 rounded-full leading-none">
                        {category.skills.length}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>
                <div className="h-px bg-border/40 mt-4" />
              </div>

              {/* Skill cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const tier = getTier(skill.level);
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ y: -4 }}
                      className={`group relative flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-border hover:shadow-lg ${tier.glow} cursor-default overflow-hidden`}
                    >
                      {/* Tier accent strip at top */}
                      <div className={`absolute top-0 left-0 right-0 h-0.5 ${tier.strip}`} />

                      {/* Icon */}
                      {skill.icon && (
                        <div className="relative w-11 h-11 mt-1 flex-shrink-0">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            fill
                            sizes="44px"
                            className="object-contain"
                          />
                        </div>
                      )}

                      {/* Name */}
                      <span className="text-sm font-semibold text-foreground text-center leading-snug">
                        {skill.name}
                      </span>

                      {/* Tier dot */}
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tier.dot}`} />

                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 whitespace-nowrap">
                        <div className="bg-foreground text-background text-[11px] font-medium px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tier.dot}`} />
                          <span className="opacity-70">{tier.label}</span>
                          {skill.experience && (
                            <>
                              <span className="opacity-40">·</span>
                              <span>{skill.experience}</span>
                            </>
                          )}
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2">
                          <div className="border-4 border-transparent border-t-foreground" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-6 px-5 py-3 rounded-full border border-border/50 bg-card/60 text-xs text-muted-foreground">
            {[
              { label: 'Expert',     cls: 'bg-emerald-500' },
              { label: 'Proficient', cls: 'bg-sky-500'     },
              { label: 'Learning',   cls: 'bg-violet-500'  },
            ].map(({ label, cls }) => (
              <div key={label} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cls}`} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function Skills() {
  return <SkillsSection />;
}
