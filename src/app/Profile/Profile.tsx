'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Card } from '../../components/ui/Card';
import { profileData } from '../../data/profile';
import { motion } from 'framer-motion';

function ClientProfile() {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  } as const;

  const highlightKeywords = (text: string) => {
    const keywords = [
      'Software Engineer', 'UI/UX', 'Usability Engineering', 'React', 'Next.js', 'TypeScript', "Master's", 'Applied Computer Science',
      'Ingénieur logiciel', 'Conception UI/UX', "Ingénierie de l'Utilisabilité", 'React', 'Next.js', 'TypeScript', 'Master', 'Informatique Appliquée'
    ];
    const escaped = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
    const keywordSet = new Set(keywords.map(k => k.toLowerCase()));
    return text.split(regex).map((part, i) => {
      if (keywordSet.has(part.toLowerCase())) {
        return (
          <span key={i} className="text-primary font-semibold">
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };
  
  return (
    <section className="section professional-bg" id="about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1 className="text-4xl md:text-6xl font-bold text-foreground" variants={itemVariants}>
                <span className="block">{profileData.title}</span>
                <span className="text-gradient block">{profileData.subtitle}</span>
              </motion.h1>
              <motion.p className="text-xl text-muted-foreground leading-relaxed" variants={itemVariants}>
                {profileData.description}
              </motion.p>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              className="relative w-80 h-80 mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-primary/20">
                <Image 
                  src={profileData.image}
                  alt={profileData.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card variant="elevated" className="p-8">
              <div className="space-y-5">
                <motion.h2 className="text-2xl font-bold text-foreground" variants={itemVariants}>
                  {t('profile.about_me')}
                </motion.h2>
                <motion.p className="text-muted-foreground leading-relaxed text-lg" variants={itemVariants}>
                  {highlightKeywords(t('profile.about_description'))}
                </motion.p>
                <motion.p className="text-muted-foreground leading-relaxed" variants={itemVariants}>
                  {highlightKeywords(t('profile.experience_description'))}
                </motion.p>
              </div>
            </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default function Profile() {
  return <ClientProfile />;
}
