import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

// Load environment variables
dotenv.config({ path: ".env" });
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing from environment variables");
}

const client = postgres(process.env.DATABASE_URL as string, {
  ssl: {
    rejectUnauthorized: false,
  },
});

const migrateDb = async () => {
  try {
    // Run migrations
    await migrate(db, { migrationsFolder: "migrations" }); // Test the connection
    console.log("Connected to the database successfully.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
export const db = drizzle(client, { schema });
migrateDb();
