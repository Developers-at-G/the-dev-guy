'use client';
import React, { useEffect, useState } from 'react';

interface ComponentPopupProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: string[];
  approach: string;
  side: 'left' | 'right';
  delay?: number;
}

const ComponentPopup: React.FC<ComponentPopupProps> = ({
  isVisible,
  onClose,
  title,
  description,
  technologies,
  approach,
  side,
  delay = 3000
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 500); // Wait for slide out animation
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, onClose]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVisible) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isVisible, onClose]);

  if (!isVisible && !isAnimating) return null;

  const slideInClass = side === 'left' 
    ? 'animate-slide-in-left' 
    : 'animate-slide-in-right';
  
  const slideOutClass = side === 'left' 
    ? 'animate-slide-out-left' 
    : 'animate-slide-out-right';

  return (
    <div 
      className={`fixed top-1/2 transform -translate-y-1/2 z-50 ${
        side === 'left' ? 'left-4 xl:left-8' : 'right-4 xl:right-8'
      } ${isVisible ? slideInClass : slideOutClass} hidden lg:block`}
      role="dialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      <div className="bg-background/95 backdrop-blur-xl border-2 border-primary rounded-2xl shadow-2xl p-6 max-w-sm w-80 hover:shadow-primary/20 transition-shadow duration-300 text-foreground">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 id="popup-title" className="text-lg font-bold text-primary">{title}</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close popup"
          >
            ✕
          </button>
        </div>

        {/* Description */}
        <p id="popup-description" className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Approach:</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {approach}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-4 w-full bg-muted rounded-full h-1">
          <div 
            className="bg-primary h-1 rounded-full transition-all duration-300 ease-out"
            style={{
              width: isVisible ? '100%' : '0%',
              transitionDelay: isVisible ? '0ms' : '300ms'
            }}
          />
        </div>
        
        {/* Side indicator */}
        <div className={`absolute top-1/2 transform -translate-y-1/2 w-2 h-8 bg-primary/30 rounded-full ${
          side === 'left' ? '-left-1' : '-right-1'
        }`} />
      </div>
    </div>
  );
};

export default ComponentPopup; 