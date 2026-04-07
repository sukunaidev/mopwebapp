
import { loginUser } from "@/app/lib/db";

export async function POST(req: Request) {
    const { username, password } = await req.json();
    const { user, error } = await loginUser(username, password);

    if (error) {
        return Response.json({ success: false, error }, { status: 400, statusText: "User login failed" });
    }
    return Response.json({ success: true }, { status: 200, statusText: "User login success" });
}