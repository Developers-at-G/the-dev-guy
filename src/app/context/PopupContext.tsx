'use client';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface PopupData {
  title: string;
  description: string;
  technologies: string[];
  approach: string;
}

interface PopupContextType {
  showPopup: (data: PopupData, side: 'left' | 'right') => void;
  hidePopup: () => void;
  currentPopup: PopupData | null;
  isVisible: boolean;
  side: 'left' | 'right';
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPopup, setCurrentPopup] = useState<PopupData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [side, setSide] = useState<'left' | 'right'>('left');

  const showPopup = useCallback((data: PopupData, popupSide: 'left' | 'right') => {
    setCurrentPopup(data);
    setSide(popupSide);
    setIsVisible(true);
  }, []);

  const hidePopup = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentPopup(null);
    }, 500); // Wait for slide out animation
  }, []);

  // Hide popup on scroll
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (isVisible) {
        setIsVisible(false);
        scrollTimeout = setTimeout(() => {
          setCurrentPopup(null);
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isVisible]);

  return (
    <PopupContext.Provider value={{
      showPopup,
      hidePopup,
      currentPopup,
      isVisible,
      side
    }}>
      {children}
    </PopupContext.Provider>
  );
}; 