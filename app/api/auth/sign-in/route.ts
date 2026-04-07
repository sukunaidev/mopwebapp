
import { loginUser } from "@/app/lib/db";

export async function POST(req: Request) {
    const { username, password } = await req.json();
    const userRes = await loginUser(username, password);

    if (userRes) {

        return Response.json(userRes, { status: 200, statusText: "User login success" });
    }

    return Response.json(null, { status: 400, statusText: "User login failed" });
}