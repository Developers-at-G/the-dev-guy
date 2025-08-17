'use client';
import React from 'react';

import { Section, SectionHeader } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

import { ResumeDownload } from '../../components/ResumeDownload';

function ContactSection() {

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
        </svg>
      ),
      title: 'Email',
      subtitle: 'Get in touch directly',
      value: 'gueye.amadou1996@gmail.com',
      href: 'mailto:gueye.amadou1996@gmail.com',
      description: 'Best for project inquiries and collaboration'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      subtitle: 'Professional network',
      value: '/in/abdallah-amadou-gueye',
      href: 'https://linkedin.com/in/abdallah-amadou-gueye',
      description: 'Connect for professional opportunities'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      subtitle: 'Code repositories',
      value: '@abdallah96',
      href: 'https://github.com/abdallah96',
      description: 'Explore my open source projects'
    }
  ];

  const quickActions = [
    {
      label: 'Download Resume',
      component: <ResumeDownload variant="primary" size="lg" />,
      description: 'Get my complete professional background'
    },
    {
      label: 'View LinkedIn',
      component: (
        <Button size="lg" variant="outline" asChild>
          <a href="https://linkedin.com/in/abdallah-amadou-gueye" target="_blank" rel="noopener noreferrer">
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
            Connect on LinkedIn
          </a>
        </Button>
      ),
      description: 'Professional networking'
    }
  ];

  return (
    <Section id="contact" variant="featured">
      <Container>
        <SectionHeader
          title="Let's Work Together"
          subtitle="Ready to bring your next project to life? I'm always excited to discuss new opportunities and collaborate on innovative solutions."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <a
                        key={index}
                        href={method.href}
                        className="flex items-start p-4 rounded-lg border border-border hover:bg-accent/50 transition-all duration-200 group hover:shadow-md"
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="mr-4 mt-1 text-primary group-hover:text-primary/80 transition-colors">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {method.title}
                          </div>
                          <div className="text-sm text-muted-foreground mb-1">
                            {method.subtitle}
                          </div>
                          <div className="text-sm font-mono text-primary">
                            {method.value}
                          </div>
                          <div className="text-xs text-muted-foreground mt-2">
                            {method.description}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center lg:text-left">
                <h4 className="font-semibold mb-3 text-foreground">
                  Response Time
                </h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <div key={index} className="text-center p-4 rounded-lg border border-border">
                        <div className="mb-3">
                          {action.component}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {action.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function Contact() {
  return <ContactSection />;
}