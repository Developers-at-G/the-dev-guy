# Deployment Checklist for Vercel

## ✅ Pre-Deployment Verification

### 1. **Tracking/Analytics** ✅
- ✅ Vercel Analytics is already set up (`@vercel/analytics` installed)
- ✅ Blog interactions now tracked:
  - Blog Post Liked
  - Blog Post Disliked  
  - Blog Comment Added
- ✅ Analytics component included in `layout.tsx`

### 2. **Database Configuration** ✅
- ✅ Prisma configured to use environment variables
- ✅ Supports both `DATABASE_URL` and `PRISMA_DATABASE_URL`
- ✅ Database tables created (`blog_reactions`, `blog_comments`)
- ✅ Prisma client generation added to build script

### 3. **Environment Variables Required in Vercel**
Make sure these are set in Vercel Dashboard → Settings → Environment Variables:

**Required:**
- `DATABASE_URL` - Your PostgreSQL connection string
  - OR `POSTGRES_URL` - Direct PostgreSQL URL
  - OR `POSTGRES_PRISMA_URL` - Prisma connection URL
  - OR `PRISMA_DATABASE_URL` - Prisma Accelerate URL (if using)

**Optional (for chatbot):**
- `OPENAI_API_KEY` - If you're using the chatbot feature

### 4. **Code Safety** ✅
- ✅ No hardcoded file paths
- ✅ No local file system dependencies
- ✅ All API routes use environment variables
- ✅ Async params properly handled (Next.js 15 compatible)
- ✅ Server/client components properly separated

### 5. **Build Configuration** ✅
- ✅ `package.json` includes `postinstall` script for Prisma
- ✅ Build script includes `prisma generate`
- ✅ Next.js config is Vercel-compatible

## 🚀 Deployment Steps

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add blog interactions with tracking and improved design"
   git push
   ```

2. **Verify Environment Variables in Vercel:**
   - Go to your Vercel project dashboard
   - Settings → Environment Variables
   - Ensure `DATABASE_URL` (or equivalent) is set for Production, Preview, and Development

3. **Deploy:**
   - Vercel will automatically deploy on push
   - Or trigger manually from Vercel dashboard

4. **Verify Deployment:**
   - Check build logs for any errors
   - Test blog post page loads correctly
   - Test like/dislike functionality
   - Test comment submission
   - Check Vercel Analytics dashboard for events

## 📊 What Gets Tracked

After deployment, you'll see these events in Vercel Analytics:
- `Blog Post Liked` - When someone likes a post
- `Blog Post Disliked` - When someone dislikes a post
- `Blog Comment Added` - When someone adds a comment

## ⚠️ Potential Issues & Solutions

### Issue: Database connection fails
**Solution:** Verify `DATABASE_URL` is set correctly in Vercel environment variables

### Issue: Prisma client not found
**Solution:** The `postinstall` script should handle this, but if it fails, check build logs

### Issue: Tables don't exist
**Solution:** Tables are already created in your database. If deploying to a new database, run the SQL from `prisma/create-tables.sql`

## ✅ You're Ready to Deploy!

Everything is configured correctly. Just push to your repository and Vercel will handle the rest!

