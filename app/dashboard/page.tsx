'use client'
import { useState } from "react"
import { text } from "stream/consumers"
//import { SignUpForm } from "../page";
import { useUser } from "@/hooks/useUser"
import UserSettings from "@/components/dashboard/UserSettings";
import DeleteUser from "@/components/auth/DeleteUser";

export default function Page() {
    //   const { user } = useUser();
    const [clickedDelete, setClickedDelete] = useState(false);



    return (
        <div>
            <UserSettings />
            <DeleteUser clickedDelete={clickedDelete} />
        </div>
    )



}