import { defineConfig } from 'drizzle-kit';
import './envConfig'

export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  migrations: {
    prefix: "supabase"
  },
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
