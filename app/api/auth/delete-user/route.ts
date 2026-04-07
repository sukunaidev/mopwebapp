import { findUser } from "@/app/lib/db";
import { deleteUser } from "@/app/lib/db";

import { sql } from "@vercel/postgres";
export async function DELETE(req: Request) {
    const { username, password } = await req.json();

    const result = await sql`SELECT id FROM users 
    WHERE username = ${username}
    AND password = ${password}`;

    if (result.rows.length === 0) {
        console.log("didnt work")
        return Response.json({ success: false, message: "User Error Not Found" });

    }


    const id = result.rows[0].id;
    await sql`DELETE FROM users WHERE id = ${id}`;
    console.log(id)
    return Response.json({ success: true });

}