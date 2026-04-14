import React, { useState } from "react";
import { useUser } from "@/hooks/useUser";
import { useMop } from "@/hooks/useMop";

export default function CreateMopPage() {
    const { createMop } = useMop();
    const { user } = useUser();

    const [mopName, setMopName] = useState("");
    const [mopHeadType, setMopHeadType] = useState("");
    const [mopShaftType, setMopshaftType] = useState("");
    const [mopDesignType, setMopDesignType] = useState("");




    let handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await createMop(mopName, mopHeadType, mopShaftType, mopDesignType, user?.username);
        } catch (error) {
            console.error("Creating Mop has failed:", error);
        }
    }

    let handleMopNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMopName(e.target.value)
    }




    return (
        <div>
            <div>
                <p className="flex justify-center text-5xl mb-10 mt-5 tracking-widest italic">Mop Creation Page!</p>
            </div>
            <div>
                <form>
                    <div className=" bg-green-900  px-5 py-10 border border-black px-4 py-2">
                        <div className="flex justify-center" >
                            <label>Enter Mop Name:</label>
                        </div>
                        <div className="flex justify-center">

                            <input
                                type="text"
                                className={` border border-gray-900 px-3 py-2 rounded w-48`}
                                placeholder="Mop Name"
                                value={mopName}
                                onChange={handleMopNameChange}

                            />
                        </div>
                    </div>
                    <div className=" bg-blue-900  px-5 py-10 border border-black px-4 py-2">
                        <div className="flex justify-center text-2xl mb-10 ">
                            <p>Mop Head Style</p>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button
                                type="button"
                                className={` bg-green-900 text-white px-12 py-4 rounded-full cursor-pointer`}
                                onClick={() => setMopHeadType("Cotton")}
                            >Cotton</button>
                            <button
                                type="button"
                                className={` bg-green-900 text-white px-12 py-4 rounded-full cursor-pointer`}
                                onClick={() => setMopHeadType("Microfiber")}
                            >Microfiber</button>
                            <button
                                type="button"
                                className={` bg-green-900 text-white px-12 py-4 rounded-full cursor-pointer`}
                                onClick={() => setMopHeadType("Blend")}
                            >Blend</button>
                        </div>
                        <div className="flex justify-center">
                            <p>{`${mopHeadType} selected`}</p>
                        </div>
                    </div>
                    <div className=" bg-blue-900  px-5 py-10 border border-black px-4 py-2">
                        <div className="flex justify-center text-2xl mb-10 " >
                            <p>Mop Shaft Type</p>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button
                                type="button"
                                className={` bg-green-900 text-white px-12 py-4 rounded-full cursor-pointer`}
                                onClick={() => setMopshaftType("Wood")}
                            >Wood</button>
                            <button
                                type="button"
                                className={` bg-green-900 text-white px-12 py-4 rounded-full cursor-pointer`}
                                onClick={() => setMopshaftType("Plastic")}
                            >Plastic</button>
                            <button
                                type="button"
                                className={` bg-green-900 text-white px-12 py-4 rounded-full cursor-pointer`}
                                onClick={() => setMopshaftType("Steel")}
                            >Steel</button>
                        </div>
                        <div className="flex justify-center">
                            <p>{`${mopShaftType} selected`}</p>
                        </div>
                    </div>
                    <div className=" bg-blue-900  px-5 py-10 border border-black px-4 py-2">
                        <div className="flex justify-center text-2xl mb-10 ">
                            <p>Mop Design</p>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button
                                type="button"
                                className={` bg-green-900 text-white px-12 py-4 rounded-full cursor-pointer`}
                                onClick={() => setMopDesignType("Flat")}
                            >Flat</button>
                            <button
                                type="button"
                                className={` bg-green-900 text-white px-12 py-4 rounded-full cursor-pointer`}
                                onClick={() => setMopDesignType("Dust")}
                            >Dust</button>
                            <button
                                type="button"
                                className={` bg-green-900 text-white px-12 py-4 rounded-full cursor-pointer`}
                                onClick={() => setMopDesignType("String")}
                            >String</button>
                        </div>
                        <div className="flex justify-center ">
                            <p>{`${mopDesignType} selected`}</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className={` bg-green-500 text-white px-12 py-4 rounded-full cursor-pointer`}
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );


}
