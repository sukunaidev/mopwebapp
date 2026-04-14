"use client";
import { createContext, useState, ReactNode, use } from "react";
import { useRouter } from "next/navigation";

export interface Mop {
    mopCreator: string; //get username
    mopName: string;
    mopHeadType: string;
    mopShaftType: string;
    mopDesignType: string;
}

interface MopContextType {
    mop: Mop | null;
    createMop: (mopName: string,
        mopHeadType: string, mopShaftType: string, mopDesignType: string, mopCreator?: string
    ) => Promise<void>;
    updateMop: (mopName?: string,
        mopHeadType?: string, mopShaftType?: string, mopDesignType?: string, mopCreator?: string
    ) => Promise<void>;
}

export const MopContext = createContext<MopContextType>({
    mop: null,
    createMop: async () => { },
    updateMop: async () => { },
});

export const MopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mop, setMop] = useState<Mop | null>(null);

    const createMop = async (mopName: string,
        mopHeadType: string, mopShaftType: string, mopDesignType: string, mopCreator?: string,) => {
        const res = await fetch("/api/mops/features/create-mop", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                mopCreator,
                mopName,
                mopHeadType,
                mopShaftType,
                mopDesignType
            })
        });

        if (res.ok) {
            const data = await res.json() as Mop | null;
            console.log("Mop data returned from creation", data);
            if (!data) {
                console.error("No data was returned from mop creation");
                return;
            }
            setMop(data)
        }
    }

    const updateMop = async (mopName?: string,
        mopHeadType?: string, mopShaftType?: string, mopDesignType?: string, mopCreator?: string) => {

        try {
            const res = await fetch("/api/mops/features/update-mop", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    mopCreator,
                    mopName,
                    mopHeadType,
                    mopShaftType,
                    mopDesignType
                })
            });

            if (res.ok) {
                const data = await res.json() as Mop | null;
                console.log("Mop data returned from mop updating", data);
                if (!data) {
                    console.error("No data was returned from mop updating");
                    return;
                }
                setMop(data)
            }
        }
        catch (error) {
            console.error("Error Updating MopComponent", error);
        }




    }



    return (
        <MopContext.Provider value={{
            mop,
            createMop,
            updateMop,

        }}>{children}
        </MopContext.Provider>
    );
}