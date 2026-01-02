# Blog Interactions Setup Guide

This guide will help you set up likes/dislikes and comments for your blog posts using Prisma with PostgreSQL.

## Prerequisites

- Prisma database connection (you already have this!)
- Your portfolio deployed on Vercel

## Step 1: Environment Variables

Add your Prisma database URL to your `.env.local` file:

```env
PRISMA_DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"
```

**For Vercel deployment:**
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add `PRISMA_DATABASE_URL` with your Prisma Accelerate URL

## Step 2: Generate Prisma Client

Run this command to generate the Prisma client:

```bash
npx prisma generate
```

## Step 3: Create Database Tables

Run Prisma migrations to create the tables:

```bash
npx prisma migrate dev --name init_blog_interactions
```

Or if you prefer to push the schema directly:

```bash
npx prisma db push
```

Alternatively, you can run the SQL manually. Connect to your database and run:
   ```sql
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
   ```
4. Click **Run** to execute the SQL

## Step 4: Configure Environment Variables

Vercel automatically creates environment variables when you create a Postgres database. They should be:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`

These are automatically available in your Vercel deployment.

For local development, add them to your `.env.local` file:
```env
POSTGRES_URL=your_postgres_url_here
POSTGRES_PRISMA_URL=your_prisma_url_here
POSTGRES_URL_NON_POOLING=your_non_pooling_url_here
```

You can find these in your Vercel dashboard under your database settings.

## Step 5: Deploy

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add blog interactions (likes and comments)"
   git push
   ```

2. Vercel will automatically deploy your changes

## Step 6: Test

1. Visit your blog post
2. Try liking/disliking the post
3. Add a comment
4. Verify everything works!

## Alternative: Using Supabase

If you prefer Supabase (which you've used before), you can:

1. Create a Supabase project
2. Run the same SQL schema in Supabase SQL editor
3. Update the API routes to use Supabase client instead:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

## Alternative: Using Giscus (GitHub Discussions)

For a simpler, no-database solution, you can use Giscus which uses GitHub Discussions:

1. Install: `npm install @giscus/react`
2. Add to your blog post component
3. No database needed - comments are stored in GitHub Discussions

## Security Notes

- The current implementation uses localStorage for user identification
- For production, consider:
  - Adding rate limiting
  - Implementing proper authentication
  - Adding comment moderation
  - Using more robust user identification

## Troubleshooting

- **Database connection errors**: Make sure environment variables are set in Vercel
- **Tables not found**: Run the SQL schema again
- **Comments not showing**: Check if `approved = true` in the database

