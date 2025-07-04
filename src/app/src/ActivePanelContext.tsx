'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ActivePanelContextType {
  activeSection: string | null;
  setActiveSection: (section: string | null | ((current: string | null) => string | null)) => void;
  getSlideDirection: (section: string) => 'left' | 'right';
}

const ActivePanelContext = createContext<ActivePanelContextType | undefined>(undefined);

// Define the order of sections and their slide directions
const sectionOrder = ['skills', 'career', 'projects', 'education', 'achievement', 'contact'];

export const ActivePanelProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const getSlideDirection = (section: string): 'left' | 'right' => {
    const index = sectionOrder.indexOf(section);
    return index % 2 === 0 ? 'right' : 'left';
  };

  const handleSetActiveSection = (section: string | null | ((current: string | null) => string | null)) => {
    if (typeof section === 'function') {
      setActiveSection(section);
    } else {
      // Only update if it's actually changing
      if (section !== activeSection) {
        setActiveSection(section);
      }
    }
  };

  return (
    <ActivePanelContext.Provider value={{ 
      activeSection, 
      setActiveSection: handleSetActiveSection, 
      getSlideDirection 
    }}>
      {children}
    </ActivePanelContext.Provider>
  );
};

export const useActivePanel = () => {
  const context = useContext(ActivePanelContext);
  if (!context) throw new Error('useActivePanel must be used within ActivePanelProvider');
  return context;
}; 