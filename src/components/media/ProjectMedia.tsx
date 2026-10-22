'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

interface ProjectMediaProps {
  src: string;
  alt?: string;
  className?: string;
  /** Autoplay only when visible (default). Pass false to never autoplay. */
  playWhenVisible?: boolean;
  priority?: boolean;
  sizes?: string;
}

function isVideo(src: string) {
  return src.endsWith('.mov') || src.endsWith('.mp4') || src.endsWith('.webm');
}

/**
 * Image or video for project catalogs.
 * Videos play only when in view (and pause when leaving) to avoid loading
 * multiple .mov files at once on /Projects.
 */
export function ProjectMedia({
  src,
  alt = '',
  className,
  playWhenVisible = true,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!isVideo(src) || !playWhenVisible) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '80px', threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src, playWhenVisible]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo(src)) return;
    if (inView && playWhenVisible) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, playWhenVisible, src]);

  if (!isVideo(src)) {
    return (
      <div ref={containerRef} className={clsx('relative overflow-hidden', className)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={clsx('relative overflow-hidden bg-muted', className)}>
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
    </div>
  );
}
