'use client';
import React from 'react';
import Image from 'next/image';

import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ResumeDownload } from '../../components/ResumeDownload';
import { profileData } from '../../data/profile';

function ClientProfile() {
  
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

            <div className="flex flex-wrap gap-4">
              <ResumeDownload variant="primary" source="Profile Section" />
              <Button 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {profileData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-primary">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
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

        {/* About Section */}
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">About Me</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {profileData.about.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {profileData.about.experience}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">What I Do</h3>
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
