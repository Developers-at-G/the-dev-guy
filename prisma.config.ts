export default {
  datasource: {
    provider: 'postgresql' as const,
    url: process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL || '',
  },
};

