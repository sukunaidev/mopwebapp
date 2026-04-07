import React, { useState } from 'react'
import { useUser } from '@/hooks/useUser';

interface Props {
    showInput: boolean;
    clickedlogIn: boolean;
}

function SignIn({ clickedlogIn, showInput }: Props) {
    const { signIn } = useUser();
    const [username, setLoginUsername] = useState("");
    const [password, setLoginPassword] = useState("");

    let handleLoginSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signIn(username, password);
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    let handleLogInUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginUsername(e.target.value)
    }

    let handleLogInPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginPassword(e.target.value)
    }

    return (
        <div>

            <form onSubmit={handleLoginSubmit}>
                <div className={`${showInput && clickedlogIn ? " w-120 bg-gray-400 rounded-full px-5 py-8 translate-x-220 -translate-y-45" : ""}`} >
                    {(showInput && clickedlogIn) && (
                        <div>
                            <h1>Welcome Back!</h1>
                            <label htmlFor="user">Username</label>
                            <input
                                id="user"
                                type="text"
                                className={` border border-gray-900 px-3 py-2 rounded w-48`}
                                placeholder="username"
                                value={username}
                                onChange={handleLogInUsernameChange}
                            />

                            <br />
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="text"
                                className={` border border-gray-900 px-3 py-2 rounded w-48`}
                                placeholder="password"
                                value={password}
                                onChange={handleLogInPasswordChange}
                            />

                            <br />
                            <button type="submit"
                                className="bg-gray-500 text-white px-12 py-4 rounded-full cursor-pointer"
                            >Login</button>


                        </div>

                    )}

                </div>
            </form>
        </div>
    )
}

export default SignIn