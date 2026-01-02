# Prisma Setup for Blog Interactions

## Quick Setup

1. **Add Environment Variables**

   Add to your `.env.local` (for local development):
   ```env
   PRISMA_DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"
   ```

   For Vercel:
   - Go to Project Settings → Environment Variables
   - Add `PRISMA_DATABASE_URL` with your Prisma Accelerate URL

2. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

3. **Push Schema to Database**
   ```bash
   npx prisma db push
   ```

   This will create the `blog_reactions` and `blog_comments` tables in your database.

4. **Deploy**
   ```bash
   git add .
   git commit -m "Add blog interactions with Prisma"
   git push
   ```

## Your Database URLs

You have these connection strings available:
- `PRISMA_DATABASE_URL` - Prisma Accelerate (recommended for production)
- `POSTGRES_URL` - Direct PostgreSQL connection

The code will automatically use Prisma Accelerate if `PRISMA_DATABASE_URL` is set, otherwise it falls back to direct connection.

## Verify Setup

1. Visit your blog post
2. Try liking/disliking
3. Add a comment
4. Check your database to see the data

## Troubleshooting

- **"Prisma Client not generated"**: Run `npx prisma generate`
- **"Tables don't exist"**: Run `npx prisma db push`
- **Connection errors**: Check your environment variables in Vercel

