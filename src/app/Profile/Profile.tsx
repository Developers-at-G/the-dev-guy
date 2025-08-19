'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Card } from '../../components/ui/Card';
import { profileData } from '../../data/profile';

function ClientProfile() {
  const { t } = useLanguage();
  
  return (
    <section className="section professional-bg" id="about">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                <span className="block">{profileData.title}</span>
                <span className="text-gradient block">{profileData.subtitle}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {profileData.description}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-primary/20">
                <Image 
                  src={profileData.image}
                  alt={profileData.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('profile.about_me')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('profile.about_description')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('profile.experience_description')}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{t('profile.what_i_do')}</h3>
                <div className="space-y-3">
                  {profileData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
}

export default function Profile() {
  return <ClientProfile />;
}
