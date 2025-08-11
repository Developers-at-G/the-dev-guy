'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

// Removed unused typewriterPhrases - now using translations

function useTypewriter(phrases: string[], typingSpeed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = phrases[index % phrases.length];
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, typingSpeed / 2);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, phrases, typingSpeed, pause]);

  return displayed;
}

function ClientProfile() {
  const { t } = useLanguage();
  
  // Get translated phrases
  const translatedPhrases = [
    t('profile.software_engineer'),
    t('profile.react_enthusiast'),
    t('profile.nextjs_developer')
  ];
  
  const typewriter = useTypewriter(translatedPhrases);
  // Find the longest phrase for fixed height
  const maxLength = Math.max(...translatedPhrases.map(p => p.length));
  const maxPhrase = translatedPhrases.find(p => p.length === maxLength) || translatedPhrases[0];
  
  return (
    <section className="section professional-bg" id="about">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                <span
                  className="block relative"
                  style={{
                    minHeight: '1.2em',
                    fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                    letterSpacing: '0.01em',
                  }}
                >
                  {/* Invisible max phrase for fixed height */}
                  <span className="invisible select-none" aria-hidden="true">{maxPhrase}</span>
                  {/* Actual typewriter text absolutely positioned */}
                  <span
                    className="absolute left-0 top-0 w-full h-full flex items-center"
                    style={{ pointerEvents: 'none' }}
                  >
                    {typewriter}
                    <span
                      className="inline-block align-baseline bg-primary animate-blink ml-1"
                      style={{
                        width: '0.6ch',
                        height: '1.1em',
                        borderRadius: 2,
                        marginBottom: '0.1em',
                        verticalAlign: 'baseline',
                      }}
                    ></span>
                  </span>
                </span>
                <span className="text-gradient block">{t('profile.building_experiences')}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('profile.description')}
              </p>
            </div>
            
            {/* Remove the call-to-action buttons here */}
            {/* <div className="flex flex-wrap gap-4">
              <Button
                as="a"
                href="#contact"
                className="btn btn-primary"
              >
                Get In Touch
              </Button>
              <Button
                as="a"
                href="#projects"
                className="btn btn-secondary"
              >
                View Projects
              </Button>
            </div> */}

            {/* Fun Facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{t('profile.fun_fact_1_title')}</div>
                <div className="text-sm text-muted-foreground">{t('profile.fun_fact_1_desc')}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{t('profile.fun_fact_2_title')}</div>
                <div className="text-sm text-muted-foreground">{t('profile.fun_fact_2_desc')}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{t('profile.fun_fact_3_title')}</div>
                <div className="text-sm text-muted-foreground">{t('profile.fun_fact_3_desc')}</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-primary/20">
                <Image 
                  src="/Images/Picture.jpeg" 
                  alt="Abdallah Amamou Gueye" 
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
          <div className="card p-8 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {t('profile.about_me')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('profile.about_description')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('profile.experience_description')}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {t('profile.what_i_do')}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{t('profile.fullstack_dev')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{t('profile.uiux_design')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{t('profile.performance')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{t('profile.accessibility')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Focus removed per request */}
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}

const Profile = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientProfile />;
};

export default Profile;
