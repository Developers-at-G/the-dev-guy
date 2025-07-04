'use client';
import React from 'react';
import { useActivePanel } from './ActivePanelContext';

interface TechnicalExplanationProps {
  section: string;
  title: string;
  content: React.ReactNode;
}

export const TechnicalExplanation: React.FC<TechnicalExplanationProps> = ({ 
  section, 
  title, 
  content 
}) => {
  const { activeSection, setActiveSection, getSlideDirection } = useActivePanel();
  const isVisible = activeSection === section;
  const direction = getSlideDirection(section);

  // Debug logging
  React.useEffect(() => {
    console.log(`Panel ${section}:`, { isVisible, direction, activeSection });
  }, [isVisible, direction, activeSection, section]);

  const handleClose = () => {
    setActiveSection(null);
  };

  // Calculate transform based on direction and visibility
  const getTransform = () => {
    if (!isVisible) {
      return direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
    }
    return 'translateX(0)';
  };

  return (
    <div
      className={`fixed z-40 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } w-full max-w-md md:max-w-sm ${
        direction === 'right' ? 'right-6 md:right-8' : 'left-6 md:left-8'
      } bottom-6 md:bottom-auto md:top-24`}
      style={{ 
        maxWidth: '22rem',
        transform: getTransform()
      }}
    >
      <div className="bg-gradient-to-br from-primary/20 via-background/80 to-accent/10 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-2xl p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {title}
          </h3>
          <button
            onClick={handleClose}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
            aria-label="Hide technical explanation"
          >
            ✕
          </button>
        </div>
        <div className="text-sm text-muted-foreground leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}; 