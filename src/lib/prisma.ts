import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

const prisma = globalForPrisma.prisma || new PrismaClient()

// NODE_ENV is set to "production" automatically when "next build" is run, "development" when "next dev" is run, and "test" when "npm test" is run.
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
