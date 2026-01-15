import { PrismaClient, Prisma } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Prisma 5.x configuration
const getPrismaConfig = (): Prisma.PrismaClientOptions => {
  const logLevel: Prisma.LogLevel[] = process.env.NODE_ENV === 'development' 
    ? ['query', 'error', 'warn'] 
    : ['error'];
  
  // Default configuration (will use DATABASE_URL from environment)
  return {
    log: logLevel,
  };
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient(getPrismaConfig());

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

