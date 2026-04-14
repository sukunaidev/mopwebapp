import { useContext } from "react";
import { MopContext } from "@/contexts/MopContext";

export const useMop = () => {
    const ctx = useContext(MopContext);
    if (!ctx) {
        throw new Error("useMop must be used within a MopProvider");
    }
    return ctx;
}