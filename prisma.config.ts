// prisma.config.ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Force the Prisma CLI to use the unpooled direct connection for migrations
    url: env("DIRECT_URL"), 
  },
});