'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Chatbot = dynamic(
  () => import('./Chatbot/Chatbot').then((m) => ({ default: m.Chatbot })),
  { ssr: false }
);

/**
 * Loads the chatbot after the browser is idle (or after a short timeout),
 * so it does not compete with first paint / hydration.
 */
export function DeferredChatbot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const enable = () => {
      if (!cancelled) setReady(true);
    };

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(enable, { timeout: 2500 });
      return () => {
        cancelled = true;
        w.cancelIdleCallback?.(id);
      };
    }

    const timer = setTimeout(enable, 1500);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  if (!ready) return null;
  return <Chatbot />;
}
