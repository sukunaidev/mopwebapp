
import { createUser } from "@/app/lib/db";

export async function POST(req: Request) {
    const { username, email, password } = await req.json();
    await createUser(username, email, password);
    return Response.json({ success: true }, { status: 200, statusText: "User create success" });
}