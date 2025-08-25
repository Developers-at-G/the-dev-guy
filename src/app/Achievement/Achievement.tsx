'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

function ClientAchievement() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden" id="achievement">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              {t('achievement.subtitle')}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            {t('achievement.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            {t('achievement.description')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="achievement-card group">
            <div className="bg-gradient-to-br from-white/10 via-background/80 to-accent/10 backdrop-blur-xl rounded-2xl border-2 border-primary/20 shadow-2xl p-8 hover:shadow-primary/40 transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('education.title')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image src="/Images/Bachelor.png" alt={t('education.bachelor_degree')} fill className="object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">2018 - 2022</span>
                      <span className="text-xs text-muted-foreground">{t('education.bachelor_degree')}</span>
                    </div>
                    <div className="text-foreground font-semibold">{t('education.computer_science')}</div>
                    <div className="text-muted-foreground text-sm">{t('education.university')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image src="/Images/Master.png" alt={t('education.master_degree')} fill className="object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">2022 - 2024</span>
                      <span className="text-xs text-muted-foreground">{t('education.master_degree')}</span>
                    </div>
                    <div className="text-foreground font-semibold">{t('education.applied_computer_science')}</div>
                    <div className="text-muted-foreground text-sm">{t('education.university')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="achievement-card group">
            <div className="bg-gradient-to-br from-white/10 via-background/80 to-accent/10 backdrop-blur-xl rounded-2xl border-2 border-primary/20 shadow-2xl p-8 hover:shadow-primary/40 transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('achievement.title')}</h3>
              <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-base text-foreground">Published Research Papers:</span>
                  <a 
                    href="https://dl.acm.org/doi/10.1007/978-3-031-05039-8_33" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors underline"
                  >
                    Research Paper on Computer Science Education — 2022
                  </a>
                  <a 
                    href="https://dl.acm.org/doi/10.1007/978-3-031-35897-5_20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors underline"
                  >
                    Research Paper on Software Engineering — 2023
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Achievement = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientAchievement />;
};

export default Achievement;
