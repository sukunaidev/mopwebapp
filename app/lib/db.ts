import { sql } from "@vercel/postgres";
import { User } from "@/contexts/UserContext";
export const runtime = "nodejs";

export async function createUser(username: string, email: string, password: string): Promise<User | null> {
    try {
        const userRes = await sql`
            INSERT INTO users (username, email, password)
            VALUES (${username}, ${email}, ${password})
            RETURNING *
        `;

        console.log("Insert successful", userRes);
        if (userRes.rows.length === 0) {
            return null;
        } else {
            return userRes.rows[0] as User;
        }
    } catch (err) {
        console.error("Insert failed", err);
        throw err;
    }
}

export async function readUserTable() {
    const users = await sql`SELECT * FROM users`;
    return users.rows
}

export async function loginUser(username: string, password: string): Promise<User | null> {
    try {

        const user = await sql`
            SELECT * FROM users
            WHERE username = ${username} AND password = ${password}
        `;

        if (user.rows.length === 0) {
            return null;
        } else {
            return user.rows[0] as User;
        }
    } catch (err) {
        console.error("Login failed", err);
        return null;
    }
}


export async function findUser(username: string, password: string): Promise<User | null> {
    try {
        const userid = await sql`
        SELECT id FROM users WHERE username =${username} AND password = ${password}`;
        if (userid.rows.length === 0) {
            return null;
        } else {
            return userid.rows[0] as User;
        }
    }
    catch (err) {
        console.error("Login failed", err);
        return null;
    }
}

export async function deleteUser(userid: string) {
    try {
        await sql`DELETE FROM user WHERE id = ${userid}`;
    }
    catch (err) {
        console.error("Deletion Failed", err);
        return null;
    }
}