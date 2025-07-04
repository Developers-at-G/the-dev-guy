'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const typewriterPhrases = [
  "Software Engineer",
  "React Enthusiast",
  "Next.js Developer"
];

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

const Profile = () => {
  const typewriter = useTypewriter(typewriterPhrases);
  // Find the longest phrase for fixed height
  const maxLength = Math.max(...typewriterPhrases.map(p => p.length));
  const maxPhrase = typewriterPhrases.find(p => p.length === maxLength) || typewriterPhrases[0];
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
                <span className="text-gradient block">Building Exceptional Experiences</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I craft digital products with modern technologies. Specialized in React, Next.js, and user-centered design principles.
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
                <div className="text-lg font-bold text-primary">Finds flow in silence and deep focus</div>
                <div className="text-sm text-muted-foreground">Productivity powered by quiet concentration</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">Can debug with a cup of coffee</div>
                <div className="text-sm text-muted-foreground">Fuel for late-night problem solving</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">Believes in pixel-perfect UIs</div>
                <div className="text-sm text-muted-foreground">Details matter, always</div>
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
                  alt="Abdallah Gueye" 
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
                  About Me
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                              I&apos;m <span className="text-primary font-medium">Abdallah Amadou Gueye</span>, a passionate software engineer from Senegal.
            With a Master&apos;s degree in Applied Computer Science, I specialize in UI/UX Design and Usability Engineering.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;ve been working with modern web technologies for over 3 years, focusing on creating intuitive, 
                  accessible, and performant user experiences. My expertise lies in React, Next.js, and TypeScript.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  What I Do
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Full-stack web development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">UI/UX design & prototyping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Performance optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Accessibility implementation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Currently Focused On
            </h3>
            <p className="text-muted-foreground">
              Building scalable web applications with Next.js 15, exploring advanced React patterns, 
              and contributing to open-source projects. Always learning and staying up-to-date with 
              the latest web technologies and design trends.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Profile;
