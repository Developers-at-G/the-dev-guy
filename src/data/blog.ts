export type BlogCategory = 'engineering' | 'career' | 'learning';

export type BlogTranslationKey =
  | 'real_projects_tutorial'
  | 'ai_wont_replace'
  | 'building_a_streaming_chatbot';

/** How to render localized `content` keys into the article body. */
export type BlogContentBlock =
  | { type: 'p'; key: string }
  | { type: 'h2'; key: string }
  | { type: 'ul'; keys: string[] }
  | { type: 'strong-p'; key: string };

export interface BlogPostMeta {
  slug: string;
  translationKey: BlogTranslationKey;
  category: BlogCategory;
  date: string;
  readTime: string;
  tags: string[];
  body: BlogContentBlock[];
}

export const BLOG_CATEGORIES: { id: BlogCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'career', label: 'Career' },
  { id: 'learning', label: 'Learning' },
];

/** Single source of truth for index, routes, and metadata. */
export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'building-a-streaming-chatbot-with-vercel-ai-sdk',
    translationKey: 'building_a_streaming_chatbot',
    category: 'engineering',
    date: '2026-01',
    readTime: '5 min',
    tags: ['Next.js', 'AI SDK', 'Streaming'],
    body: [
      { type: 'p', key: 'intro_1' },
      { type: 'p', key: 'intro_2' },
      { type: 'p', key: 'intro_3' },
      { type: 'h2', key: 'section_1_title' },
      { type: 'p', key: 'section_1_paragraph_1' },
      { type: 'p', key: 'section_1_paragraph_2' },
      { type: 'h2', key: 'section_2_title' },
      { type: 'p', key: 'section_2_paragraph_1' },
      {
        type: 'ul',
        keys: [
          'section_2_item_1',
          'section_2_item_2',
          'section_2_item_3',
          'section_2_item_4',
        ],
      },
      { type: 'p', key: 'section_2_paragraph_2' },
      {
        type: 'ul',
        keys: ['section_2_item_5', 'section_2_item_6', 'section_2_item_7'],
      },
      { type: 'p', key: 'section_2_paragraph_3' },
      { type: 'h2', key: 'section_3_title' },
      { type: 'p', key: 'section_3_paragraph_1' },
      {
        type: 'ul',
        keys: ['section_3_item_1', 'section_3_item_2', 'section_3_item_3'],
      },
      { type: 'p', key: 'section_3_paragraph_2' },
      { type: 'h2', key: 'section_4_title' },
      { type: 'p', key: 'section_4_paragraph_1' },
      { type: 'p', key: 'section_4_paragraph_2' },
    ],
  },
  {
    slug: 'why-building-real-projects-taught-me-more-than-any-tutorial',
    translationKey: 'real_projects_tutorial',
    category: 'career',
    date: '2025',
    readTime: '6 min',
    tags: ['Career', 'Learning'],
    body: [
      { type: 'p', key: 'intro_1' },
      { type: 'p', key: 'intro_2' },
      { type: 'p', key: 'intro_3' },
      { type: 'h2', key: 'section_1_title' },
      {
        type: 'ul',
        keys: [
          'section_1_item_1',
          'section_1_item_2',
          'section_1_item_3',
          'section_1_item_4',
          'section_1_item_5',
        ],
      },
      { type: 'p', key: 'section_1_paragraph_after_list' },
      { type: 'h2', key: 'section_2_title' },
      { type: 'p', key: 'section_2_paragraph' },
      { type: 'p', key: 'section_2_conclusion' },
      { type: 'h2', key: 'section_3_title' },
      { type: 'p', key: 'section_3_paragraph_1' },
      { type: 'p', key: 'section_3_paragraph_2' },
      { type: 'p', key: 'section_3_paragraph_3' },
      { type: 'p', key: 'section_3_paragraph_4' },
      { type: 'h2', key: 'section_4_title' },
      { type: 'p', key: 'section_4_paragraph_1' },
      { type: 'p', key: 'section_4_paragraph_2' },
      { type: 'p', key: 'section_4_paragraph_3' },
    ],
  },
  {
    slug: 'ai-wont-replace-developers-it-will-change-how-we-build',
    translationKey: 'ai_wont_replace',
    category: 'engineering',
    date: '2025',
    readTime: '5 min',
    tags: ['AI', 'Engineering'],
    body: [
      { type: 'h2', key: 'section_1_title' },
      { type: 'p', key: 'section_1_paragraph_1' },
      { type: 'p', key: 'section_1_paragraph_2' },
      { type: 'h2', key: 'section_2_title' },
      { type: 'strong-p', key: 'section_2_paragraph_1' },
      { type: 'p', key: 'section_2_paragraph_2' },
      { type: 'h2', key: 'section_3_title' },
      { type: 'p', key: 'section_3_paragraph_1' },
      { type: 'p', key: 'section_3_paragraph_2' },
      { type: 'p', key: 'section_3_paragraph_3' },
    ],
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(
  category: BlogCategory | 'all'
): BlogPostMeta[] {
  if (category === 'all') return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}

export function countBlogByCategory(): Record<BlogCategory | 'all', number> {
  return {
    all: blogPosts.length,
    engineering: blogPosts.filter((p) => p.category === 'engineering').length,
    career: blogPosts.filter((p) => p.category === 'career').length,
    learning: blogPosts.filter((p) => p.category === 'learning').length,
  };
}
