
import { createUser } from "@/app/lib/db";

export async function POST(req: Request) {
    const { username, email, password } = await req.json();
    const userResult = await createUser(username, email, password);
    console.log("User create result in route:", userResult);
    
    if (userResult) {
        return Response.json(userResult, { status: 200, statusText: "User create success" });
    } else {
        console.error("User create failed");
        return Response.json({ error: "User create failed" }, { status: 500, statusText: "User create failed" });
    }
}