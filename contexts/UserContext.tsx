"use client";
import { createContext, useState, ReactNode } from 'react';
import { useRouter } from "next/navigation";
import { Are_You_Serious } from 'next/font/google';

export interface User {
    username: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    signIn: (username: string, password: string, email?: string) => Promise<void>;
    signUp: (username: string, email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    deleteUser: (username: string, password: string, email?: string) => Promise<void>;
    updateUser: (username: string, newUsername: string) => Promise<void>;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    signIn: async () => { },
    signUp: async () => { },
    signOut: async () => { },
    deleteUser: async () => { },
    updateUser: async () => { },
});


export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const signIn = async (username: string, password: string, email?: string) => {
        const res = await fetch("/api/auth/sign-in", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password
            })
        });

        if (res.ok) { // 20x status code = OK
            const data = await res.json() as User | null;
            console.log("User data returned from sign-in:", data);
            if (!data) {
                console.error("No user data returned from sign-in");
                return;
            }
            setUser(data)
            router.push("/dashboard");
        }

        if (!res.ok) {
            console.error("Sign-in failed", res.status);
            return;
        }
    }

    const signUp = async (username: string, email: string, password: string) => {
        const res = await fetch("/api/auth/sign-up", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        if (res.ok) { // 20x status code = OK
            const data = await res.json() as User; // we should the servers validated informaiton rather than the components
            console.log("User data returned from sign-up:", data);
            if (!data) {
                console.error("No user data returned from sign-in");
                return;
            }
            setUser(data);
            router.push("/dashboard");
            // setUsername(username);
            // setEmail(email);
            // setPassword(password);
            // setIsLoggedIn(true);
        }
    }

    const signOut = async () => {
    }

    const deleteUser = async (username: string, password: string) => {
        try {
            const res = await fetch("/api/auth/delete-user", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    password
                })


            });
            if (res.ok) {
                router.push("/")
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }


    }

    const updateUser = async (username: string, newUsername: string) => {

        try {
            const res = await fetch("/api/auth/update-user", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    newUsername,
                })
            });

        } catch (error) {
            console.error("Error updating user:", error);
        }
    }

    return (
        <UserContext.Provider value={{
            user,
            signIn,
            signUp,
            signOut,
            deleteUser,
            updateUser,
        }}>
            {children}
        </UserContext.Provider>

    );
}