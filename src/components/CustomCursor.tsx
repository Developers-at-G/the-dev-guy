'use client';

import { useEffect, useState, useRef } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let outerX = 0;
    let outerY = 0;

    const updateCursor = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
      
      if (textRef.current) {
        textRef.current.style.left = `${e.clientX}px`;
        textRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      outerX += (targetX - outerX) * 0.08;
      outerY += (targetY - outerY) * 0.08;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`;
        cursorRef.current.style.top = `${currentY}px`;
      }
      
      if (outerRef.current) {
        outerRef.current.style.left = `${outerX}px`;
        outerRef.current.style.top = `${outerY}px`;
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor-hover]')
      ) {
        setIsHovering(true);
        const text = target.textContent?.trim() || 
                     target.getAttribute('aria-label') || 
                     target.getAttribute('title') ||
                     (target.closest('a')?.textContent?.trim()) ||
                     (target.closest('button')?.textContent?.trim()) ||
                     'Click';
        setCursorText(text.length > 30 ? text.substring(0, 30) + '...' : text);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorText('');
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursorText('');
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: rippleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('click', handleClick);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples(prev => prev.filter(r => Date.now() - r.timestamp < 600));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={outerRef}
        className={`fixed pointer-events-none z-[9998] transition-opacity duration-500 ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full border-2 border-primary transition-all duration-500 ${
            isHovering ? 'w-16 h-16 border-primary/50' : 'w-10 h-10'
          }`}
        />
      </div>
      
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-primary transition-all duration-300 ease-out ${
            isHovering ? 'w-8 h-8 bg-primary/90' : 'w-3 h-3'
          }`}
        />
      </div>

      {cursorText && (
        <div
          ref={textRef}
          className="fixed pointer-events-none z-[10000] cursor-text-label"
          style={{
            transform: 'translate(-50%, calc(-100% - 30px))',
          }}
        >
          {cursorText}
        </div>
      )}

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9997] cursor-ripple-container"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        >
          <div className="cursor-ripple cursor-ripple-1" />
          <div className="cursor-ripple cursor-ripple-2" />
        </div>
      ))}
    </>
  );
};

