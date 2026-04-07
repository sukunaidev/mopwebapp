import { sql } from "@vercel/postgres";
import { readUserTable } from "@/app/lib/db";



export async function GET() {
    const users = await sql`SELECT * FROM users`;
    console.log("Fetched users from DB:", users.rows);
    return Response.json({ users: users.rows })
}