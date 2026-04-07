import { sql } from "@vercel/postgres";
export async function PUT(req: Request) {
    const { username, newUsername } = await req.json();

    const result = await sql`SELECT id FROM users 
    WHERE username = ${username}`;

    if (result.rows.length === 0) {
        console.log("didnt work")
        return Response.json({ success: false, message: "User Error Not Found" });

    }
    const id = result.rows[0].id

    await sql`UPDATE users
    SET username= ${newUsername}
    WHERE id = ${id}`;
    return Response.json({ success: true });
}