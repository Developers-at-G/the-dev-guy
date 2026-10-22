import React from 'react';
import type { BlogContentBlock } from '@/data/blog';

interface BlogPostBodyProps {
  blocks: BlogContentBlock[];
  content: Record<string, string>;
}

/** Renders localized content keys according to the post body schema. */
export function BlogPostBody({ blocks, content }: BlogPostBodyProps) {
  return (
    <div className="prose max-w-none">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={index} className="!mt-10 !mb-4 first:!mt-0">
                {stripEmoji(content[block.key] ?? '')}
              </h2>
            );
          case 'p':
            return <p key={index}>{content[block.key]}</p>;
          case 'strong-p':
            return (
              <p key={index}>
                <strong>{content[block.key]}</strong>
              </p>
            );
          case 'ul':
            return (
              <ul key={index}>
                {block.keys.map((key) => (
                  <li key={key}>{content[key]}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

function stripEmoji(text: string): string {
  return text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]\s*/gu, '').trim();
}
