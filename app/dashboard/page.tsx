'use client'
import { useState } from "react"
import { text } from "stream/consumers"

export default function Page() {

    return (
        <div>
            <h1> Welcome to your user page!</h1>
            <label>Username</label>
            <input
                type="text"
                className={` border border-gray-900 px-3 py-2 rounded w-48`}
            />
            <button
                className="bg-gray-500 text-white px-12 py-4 rounded-full cursor-pointer"
            >Update Username!</button>
        </div>
    )



}