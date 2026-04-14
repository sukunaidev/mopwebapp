'use client';
import { useState } from "react";
import { useMop } from "@/hooks/useMop";
import { useUser } from "@/hooks/useUser";
import CreateMopPage from "@/components/mop-components/CreateMop";

export default function MopServicepage() {
    const { user } = useUser();
    const { mop } = useMop();


    return (
        <div>
            <CreateMopPage></CreateMopPage>
        </div>
    );
}