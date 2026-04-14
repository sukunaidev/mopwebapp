import { sql } from "@vercel/postgres";

export async function GET() {
    await sql`
    CREATE TABLE IF NOT EXISTS mop_components(
    id SERIAL PRIMARY KEY,
    mop_creator TEXT,
    mop_name TEXT,
    mop_comp_head TEXT,
    mop_comp_shaft TEXT,
    mop_comp_design TEXT
    );
    `;
    return Response.json({ message: "Table Created" })
}