'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(
  () => import('./CustomCursor').then((m) => ({ default: m.CustomCursor })),
  { ssr: false }
);

/** Skip custom cursor on touch, reduced-motion, or until idle. */
export function DeferredCursor() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cancelled = false;
    const enable = () => {
      if (!cancelled) setReady(true);
    };

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(enable, { timeout: 3000 });
      return () => {
        cancelled = true;
        w.cancelIdleCallback?.(id);
      };
    }

    const timer = setTimeout(enable, 2000);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  if (!ready) return null;
  return <CustomCursor />;
}
