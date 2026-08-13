import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing from environment variables");
}

export default defineConfig({
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  schemaFilter: ["public"],
  dialect: "postgresql", // Replaces 'driver: pg'
  dbCredentials: {
    url: process.env.DATABASE_URL, // Replaces 'connectionString'
  },
});
