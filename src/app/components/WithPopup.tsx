'use client';
import React, { useEffect, useRef } from 'react';
import { usePopup } from '../context/PopupContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
  const hasEverShown = useRef(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '-50px 0px',
    triggerOnce: false
  });

  useEffect(() => {
    if (isIntersecting && !hasEverShown.current) {
      hasEverShown.current = true;
      setTimeout(() => {
        showPopup(popupData, side);
      }, 500);
    }
  }, [isIntersecting, showPopup, popupData, side]);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
};

export default WithPopup; 