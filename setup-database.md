# Database Setup Instructions

Prisma 7.2 requires a config file for database operations. Here are two ways to create the tables:

## Option 1: Run SQL Manually (Recommended)

1. Connect to your PostgreSQL database using your preferred client (pgAdmin, DBeaver, psql, etc.)

2. Run the SQL script located at `prisma/create-tables.sql`:
   ```bash
   # If using psql command line:
   psql $DATABASE_URL -f prisma/create-tables.sql
   
   # Or copy the contents of prisma/create-tables.sql and run in your database client
   ```

## Option 2: Create Prisma Config File

1. Create a `prisma.config.ts` file in your project root with:
   ```typescript
   export default {
     datasource: {
       provider: 'postgresql',
       url: process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL,
     },
   };
   ```

2. Then run:
   ```bash
   npx prisma db push --accept-data-loss
   ```

## Verify Tables Created

After running either option, verify the tables exist:
- `blog_reactions` table
- `blog_comments` table

Your application should now work correctly!

