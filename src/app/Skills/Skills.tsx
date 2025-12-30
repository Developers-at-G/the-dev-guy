'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Section, SectionHeader } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { skillsData } from '../../data/skills';

type ViewMode = 'interactive' | 'grid';

function SkillsSection() {
  const [viewMode, setViewMode] = useState<ViewMode>('interactive');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const allSkills = skillsData.flatMap(category => category.skills);
  const selectedSkillData = allSkills.find(s => s.name === selectedSkill);

  return (
    <Section id="skills" variant="muted" className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          title="Technical Skills"
          subtitle="Interactive skill visualization"
          description="Hover or click to explore my technical expertise across different domains"
        />

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-border bg-background/50 backdrop-blur-sm p-1">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'interactive'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Interactive View
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Grid View
            </button>
          </div>
        </div>

        {viewMode === 'interactive' ? (
          <div className="space-y-12">
            {/* Category Cards with Skills */}
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="relative"
              >
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                  {/* Category Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>

                  {/* Skills Grid with Interactive Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const isSelected = selectedSkill === skill.name;
                      
                      return (
                        <motion.button
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: skillIndex * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.1, zIndex: 10 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                          className={`relative group p-4 rounded-xl border-2 transition-all duration-300 ${
                            isSelected
                              ? 'border-primary bg-primary/10 shadow-lg scale-105'
                              : 'border-border/50 bg-background/50 hover:border-primary/50 hover:bg-background/80'
                          }`}
                        >
                          {/* Skill Icon */}
                          <div className="relative w-12 h-12 mx-auto mb-3">
                            {skill.icon && (
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                fill
                                className="object-contain filter group-hover:brightness-110 transition-all"
                              />
                            )}
                          </div>

                          {/* Skill Name */}
                          <div className="text-center">
                            <p className="text-sm font-semibold text-foreground mb-1">
                              {skill.name}
                            </p>
                            
                            {/* Proficiency Bar */}
                            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                className={`h-full rounded-full ${
                                  skill.level >= 80
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                                    : skill.level >= 65
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                                }`}
                              />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{skill.level}%</p>
                          </div>

                          {/* Hover Tooltip */}
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                            <div className="bg-foreground text-background px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg">
                              {skill.experience || `${skill.level}% proficiency`}
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                <div className="border-4 border-transparent border-t-foreground" />
              </div>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Selected Skill Detail Panel */}
            <AnimatePresence>
              {selectedSkillData && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
                >
                  <div className="bg-background border-2 border-primary rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {selectedSkillData.icon && (
                          <div className="relative w-16 h-16">
                            <Image
                              src={selectedSkillData.icon}
                              alt={selectedSkillData.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <h4 className="text-2xl font-bold text-foreground">{selectedSkillData.name}</h4>
                          <p className="text-muted-foreground">{selectedSkillData.experience}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedSkill(null)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    {selectedSkillData.description && (
                      <p className="text-muted-foreground mb-4">{selectedSkillData.description}</p>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Proficiency:</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedSkillData.level}%` }}
                          transition={{ duration: 0.5 }}
                          className={`h-full rounded-full ${
                            selectedSkillData.level >= 80
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                              : selectedSkillData.level >= 65
                              ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                              : 'bg-gradient-to-r from-purple-500 to-pink-500'
                          }`}
                        />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{selectedSkillData.level}%</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* Grid View */
          <div className="space-y-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 hover:bg-background/80 transition-all text-center"
                    >
                      {skill.icon && (
                        <div className="relative w-12 h-12 mx-auto mb-3">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <p className="text-sm font-semibold text-foreground mb-2">{skill.name}</p>
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-full rounded-full ${
                            skill.level >= 80
                              ? 'bg-green-500'
                              : skill.level >= 65
                              ? 'bg-blue-500'
                              : 'bg-purple-500'
                          }`}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{skill.level}%</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Legend */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
              <span>Expert (80%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
              <span>Proficient (65-79%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <span>Developing (&lt;65%)</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function Skills() {
  return <SkillsSection />;
}
