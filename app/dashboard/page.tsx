'use client'
import { useState } from "react"
import { text } from "stream/consumers"
import { SignUpForm } from "../page";
import { useUser } from "@/hooks/useUser"


export default function Page() {
    const { user } = useUser();

    const handleUserSubmit = (user: { username: string; email: string; password: string }) => {
        alert(user.username)
    }


    return (
        <div>
            <h1> Welcome {user?.username} to your user page!</h1>
            <label>Username</label>
            <input

                type="text"
                className={` border border-gray-900 px-3 py-2 rounded w-48`}
            />
            <button
                className="bg-gray-500 text-white px-12 py-4 rounded-full cursor-pointer"
            >Update Username!</button>

            <label>Password</label>

        </div>
    )



}