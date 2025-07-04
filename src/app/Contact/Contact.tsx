'use client';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function ClientContact() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-background" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-6">
                  {t('contact.lets_connect')}
                </h4>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('contact.open_message')}
                </p>
                
                {/* Email Contact */}
                <div className="mb-8">
                  <h5 className="text-lg font-semibold text-foreground mb-4">{t('contact.email_me')}</h5>
                  <a
                    href="mailto:gueye.amadou1996@gmail.com"
                    className="inline-flex items-center gap-3 text-lg text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    gueye.amadou1996@gmail.com
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <h5 className="text-lg font-semibold text-foreground mb-4">{t('contact.follow_me')}</h5>
                  <div className="space-y-4">
                    <a
                      href="https://linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-sm text-muted-foreground">{t('contact.linkedin_desc')}</div>
                      </div>
                    </a>
                    
                    <a
                      href="https://github.com/your-username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.337 1.839 1.337.896 1.307 2.353 1.003 2.928.752.092-.564.351-.752.639-.752.351 0 .721.108 1.077.324.356.216.744.648 1.059 1.059.315.411.648.703 1.059 1.059.356.216.721.324 1.077.324.288 0 .547-.188.639-.752.575-.251 2.032-.555 2.928-.752.896-.197 1.755-.853 1.839-1.337.084-.484.083-.645.083-.645 0-.316.194-.688.793-.577 4.769 1.587 8.207 6.085 8.207 11.387 0 6.627-5.373 12-12 12z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">GitHub</div>
                        <div className="text-sm text-muted-foreground">{t('contact.github_desc')}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t('contact.ready_to_work')}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {t('contact.work_together_message')}
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:gueye.amadou1996@gmail.com"
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {t('contact.send_email')}
                  </a>
                  
                  <p className="text-sm text-muted-foreground">
                    {t('contact.response_time')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Contact = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientContact />;
};

export default Contact;
