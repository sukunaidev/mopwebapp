
import { sql } from "@vercel/postgres";
import { createUser } from "@/app/lib/db";


export async function GET() {
    await sql`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    password TEXT
    );
    `;
    return Response.json({ message: "Table Made" })

}

export async function POST(req: Request) {
    const { username, email, password } = await req.json();
    await createUser(username, email, password);
    return Response.json({ success: true }, { status: 200, statusText: "User create success" });
}


