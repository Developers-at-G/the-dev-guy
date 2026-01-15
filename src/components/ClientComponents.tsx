'use client';

import dynamic from 'next/dynamic';

// Lazy load client-only components
export const CustomCursor = dynamic(
  () => import('./CustomCursor').then(m => ({ default: m.CustomCursor })),
  { ssr: false }
);

export const Chatbot = dynamic(
  () => import('./Chatbot/Chatbot').then(m => ({ default: m.Chatbot })),
  { ssr: false }
);
