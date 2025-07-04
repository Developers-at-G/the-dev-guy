'use client';
import React from 'react';
import { usePopup } from '../context/PopupContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Track shown popups globally for this page load
const shownPopups = new Set<string>();

interface PopupData {
  title: string;
  description: string;
  technologies: string[];
  approach: string;
}

interface WithPopupProps {
  children: React.ReactNode;
  popupData: PopupData;
  side: 'left' | 'right';
  className?: string;
}

const WithPopup: React.FC<WithPopupProps> = ({ 
  children, 
  popupData, 
  side, 
  className = '' 
}) => {
  const { showPopup } = usePopup();
  // Use a unique key for each popup (e.g., by title + side)
  const popupKey = `${popupData.title}-${side}`;
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '-50px 0px',
    triggerOnce: false
  });

  React.useEffect(() => {
    if (isIntersecting && !shownPopups.has(popupKey)) {
      shownPopups.add(popupKey);
      setTimeout(() => {
        showPopup(popupData, side);
      }, 500);
    }
  }, [isIntersecting, showPopup, popupData, side, popupKey]);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
};

export default WithPopup; 