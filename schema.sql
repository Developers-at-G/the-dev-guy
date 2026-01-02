-- Database schema for blog interactions
-- Run this in your Vercel Postgres database

-- Table for likes/dislikes
CREATE TABLE IF NOT EXISTS blog_reactions (
  id SERIAL PRIMARY KEY,
  post_slug VARCHAR(255) NOT NULL,
  user_identifier VARCHAR(255) NOT NULL,
  reaction VARCHAR(10) NOT NULL CHECK (reaction IN ('like', 'dislike')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(post_slug, user_identifier)
);

-- Table for comments
CREATE TABLE IF NOT EXISTS blog_comments (
  id SERIAL PRIMARY KEY,
  post_slug VARCHAR(255) NOT NULL,
  author_name VARCHAR(255) NOT NULL,
  author_email VARCHAR(255),
  content TEXT NOT NULL,
  parent_id INTEGER REFERENCES blog_comments(id) ON DELETE CASCADE,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_reactions_slug ON blog_reactions(post_slug);
CREATE INDEX IF NOT EXISTS idx_blog_comments_slug ON blog_comments(post_slug);
CREATE INDEX IF NOT EXISTS idx_blog_comments_approved ON blog_comments(approved);

