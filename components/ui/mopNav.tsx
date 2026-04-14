"use client";
import { useState } from "react";


function MopNav() {
    return (
        <div>

            <div className=" bg-blue-400  px-5 py-10">
                <div className="flex justify-center gap-6">
                    <button className="bg-green-500 text-white px-12 py-4 rounded-full cursor-pointer">UserSettings</button>
                    <button className="bg-blue-900 text-white px-12 py-4 rounded-full cursor-pointer">Create Mop</button>
                    <button className="bg-green-500 text-white px-12 py-4 rounded-full cursor-pointer">Update Mop</button>
                    <button className="bg-blue-900 text-white px-12 py-4 rounded-full cursor-pointer">View Mops</button>
                    <button className="bg-red-900 text-white px-12 py-4 rounded-full cursor-pointer">Delete Mops</button>
                </div>
            </div>

        </div>
    )


}

export default MopNav