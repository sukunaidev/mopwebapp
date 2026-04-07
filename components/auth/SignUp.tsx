import React, { useState } from 'react'
import { useUser } from "@/hooks/useUser";

interface Props {
    showInput: boolean;
    clickedsignUp: boolean;
}

function SignUp({ clickedsignUp, showInput }: Props) {
    const { signUp } = useUser();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    let handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    let handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    let handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        //alert(username + " email " + email + " password " + password);

        console.log(username, email, password);

        try {
            await signUp(username, email, password);
        } catch (error) {
            console.error("Error signing in:", error);
        }


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={`${showInput && clickedsignUp ? " w-120 bg-gray-400 rounded-full px-5 py-8 translate-x-220 -translate-y-45" : ""}`}>
                    {(showInput && clickedsignUp) && (<p>Welcome to the Mop Creation App!</p>)}
                    {(showInput && clickedsignUp) && (
                        <label htmlFor="username" className=" mb-1 text-sm  px-3 py-2 ">Username</label>
                    )}
                    {(showInput && clickedsignUp) &&
                        (
                            <input
                                id="username"
                                type="text"
                                placeholder="username"
                                className={` mb-3 border border-gray-900 px-3 py-2 rounded w-48`}
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        )}
                    <div className="block">
                        {(showInput && clickedsignUp) && (
                            <label htmlFor="email" className=" text-sm">Email Address</label>
                        )}
                        {(showInput && clickedsignUp) && (
                            <input
                                id="email"
                                type="text"
                                placeholder="email"
                                className={`mb-3 border border-gray-900 px-3 py-2 rounded w-48 `}
                                value={email}
                                onChange={handleEmailChange}
                            />
                        )}
                    </div>
                    <div className="block">
                        {(showInput && clickedsignUp) && (
                            <label htmlFor="password" className="  mb-1 text-sm  px-3 py-2">Password</label>
                        )}
                        {(showInput && clickedsignUp) && (
                            <input
                                id="password"
                                type="text"
                                placeholder="password"

                                className={` border border-gray-900 px-3 py-2 rounded w-48`}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        )}
                        {(showInput && clickedsignUp) &&
                            (
                                <button type="submit"
                                    className="bg-gray-500 text-white px-12 py-4 rounded-full cursor-pointer" >Sign Up!</button>
                            )}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;