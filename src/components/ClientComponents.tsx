'use client';

import dynamic from 'next/dynamic';

export { DeferredChatbot as Chatbot } from './DeferredChatbot';
export { DeferredCursor as CustomCursor } from './DeferredCursor';

export const FloatingContactButton = dynamic(
  () =>
    import('./FloatingContactButton').then((m) => ({
      default: m.FloatingContactButton,
    })),
  { ssr: false }
);
