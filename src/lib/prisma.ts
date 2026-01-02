import { PrismaClient, Prisma } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Prisma 7+ configuration
// Use Prisma Accelerate URL if available
const getPrismaConfig = (): Prisma.PrismaClientOptions => {
  const logLevel: Prisma.LogLevel[] = process.env.NODE_ENV === 'development' 
    ? ['query', 'error', 'warn'] 
    : ['error'];

  // Prisma Accelerate (recommended for production)
  if (process.env.PRISMA_DATABASE_URL?.startsWith('prisma+postgres://')) {
    return {
      log: logLevel,
      accelerateUrl: process.env.PRISMA_DATABASE_URL,
    };
  }
  
  // Default configuration (will use DATABASE_URL or POSTGRES_URL from environment)
  return {
    log: logLevel,
  };
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient(getPrismaConfig());

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

