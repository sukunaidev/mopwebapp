import { sql } from "@vercel/postgres";

export async function createUser(username: string, email: string, password: string) {
    try {
        await sql`
    INSERT INTO users (username, email, password)
    VALUES (${username}, ${email}, ${password})
  `;
        console.log("Insert successful");
    } catch (err) {
        console.error("Insert failed", err);
    }
}

export async function readUserTable() {
    const users = await sql`SELECT * FROM users`;
    return users.rows
}

export async function loginUser(username: string, password: string): Promise<{ user?: any, error?: string }> {
    const user = await sql`
    SELECT * FROM users
    WHERE username = ${username} AND password = ${password}
  `;

    if (user.rows.length === 0) {
        return { error: "Invalid username or password" }
    } else {
        return { user: user.rows[0] }
    }
}