// test-db.ts
import "dotenv/config";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

async function main() {
  try {
    const result = await sql`SELECT NOW() as time`;
    console.log("✅ Database connected successfully!");
    console.log("Current time from DB:", result[0].time);
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  } finally {
    await sql.end();
  }
}

main();