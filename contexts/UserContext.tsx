import { createContext, useState, ReactNode } from 'react';
import { useRouter } from "next/navigation";

export interface User {
    username: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    signIn: (username: string, password: string, email?: string) => Promise<void>;
    signUp: (username: string, email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    deleteUser: () => Promise<void>;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    signIn: async () => { },
    signUp: async () => { },
    signOut: async () => { },
    deleteUser: async () => { }
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

    const deleteUser = async () => {
    }

    return (
        <UserContext.Provider value={{
            user,
            signIn,
            signUp,
            signOut,
            deleteUser
        }}>
            {children}
        </UserContext.Provider>

    );
}