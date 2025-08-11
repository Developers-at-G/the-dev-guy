'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

function ClientCareer() {
  const { t } = useLanguage();

  const jobData = [
    {
      date: 'JAN 2023 - PRESENT',
      image: { src: '/Images/smal.png', alt: 'smal', width: 80, height: 80 },
      job: {
        title: t('experience.software_engineer'),
        company: 'Smal Gmbh',
        position: t('experience.full_time'),
        techStack: ['React', 'Next JS', 'Tailwind', 'AWS', 'More'],
      },
    },
    {
      date: 'NOV 2022 - DEC 2023',
      image: { src: '/Images/future-stories.png', alt: 'future-stories', width: 100, height: 100 },
      job: {
        title: t('experience.fullstack_developer'),
        company: 'Future Stories',
        position: t('experience.working_student'),
        techStack: ['Shopify Liquid', 'React', 'JQuery', 'Javascript'],
      },
    },
    {
      date: 'JAN 2020 - JUN 2020',
      image: { src: '/Images/Obertys.png', alt: 'obertys', width: 100, height: 100 },
      job: {
        title: t('experience.frontend_developer'),
        company: 'Obertys',
        position: t('experience.internship'),
        techStack: ['Angular', 'ASP.NET Core', 'SQL', 'More'],
      },
    },
  ];

  const rolesCount = jobData.length;
  const firstYear = Math.min(
    ...jobData
      .map((j) => j.date.match(/(\d{4})/g))
      .filter(Boolean)
      .flat()
      .map((y) => Number(y))
  );
  const hasPresent = jobData.some((j) => j.date.toUpperCase().includes('PRESENT'));
  const lastYear = hasPresent
    ? 'Present'
    : Math.max(
        ...jobData
          .map((j) => j.date.match(/(\d{4})/g))
          .filter(Boolean)
          .flat()
          .map((y) => Number(y))
      ).toString();

  return (
    <section id="career" className="w-full py-14">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">{t('experience.title')}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-2 text-sm text-muted-foreground">
            {rolesCount} roles • {firstYear} - {lastYear}
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20" />
          <ul className="space-y-4">
            {jobData.map((experience, index) => {
              const shownTech = experience.job.techStack.slice(0, 3);
              const remaining = experience.job.techStack.length - shownTech.length;
              return (
                <li key={index} className="relative pl-12">
                  <span className="absolute left-3 top-6 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background border border-primary/40" />
                  <div className="rounded-xl border bg-background/60 backdrop-blur-sm p-4">
                    <div className="flex items-start gap-3">
                      <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden rounded-md ring-1 ring-primary/20">
                        <Image src={experience.image.src} alt={experience.image.alt} fill className="object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="text-base md:text-lg font-semibold truncate">
                              {experience.job.title} <span className="text-muted-foreground">@ {experience.job.company}</span>
                            </h3>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{experience.date}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/20">
                            {experience.job.position}
                          </span>
                          {shownTech.map((tech) => (
                            <span key={tech} className="px-2 py-0.5 rounded-full text-[11px] bg-accent/10 text-accent border border-accent/20">
                              {tech}
                            </span>
                          ))}
                          {remaining > 0 && (
                            <span className="px-2 py-0.5 rounded-full text-[11px] bg-white/5 text-foreground border border-white/10">
                              +{remaining}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Career() {
  return <ClientCareer />;
}
