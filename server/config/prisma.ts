// server/config/prisma.ts
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import "dotenv/config";

// Initialize the database pool using your pooled connection string
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, // Explicitly feed the driver adapter to client constructor
    log: ['query', 'error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma