import { useUser } from "@/hooks/useUser";
import { useState } from "react";


interface Props {
    clickedDelete: Boolean
}

function DeleteUser({ clickedDelete }: Props) {
    const { deleteUser } = useUser();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    let handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    let handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await deleteUser(username, password);
        }
        catch (err) {
            console.error("Error Deleting user", err);
        }

    }


    if (clickedDelete) {
        return (
            <div className="flex justify-center items-center w-120 bg-gray-400 rounded-full px-5 py-8 translate-x-90 -translate-y-4">
                <form onSubmit={handleSubmit}>
                    <h1>Delete Your Account</h1>
                    <label>Confirm Username</label>
                    <input value={username} onChange={handleUsernameChange}
                        type="text" className={` border border-gray-900 px-3 py-2 rounded w-48`}></input>
                    <br />
                    <label>Confirm Password</label>
                    <input value={password} onChange={handlePasswordChange}
                        type="text" className={` border border-gray-900 px-3 py-2 rounded w-48`}></input>
                    <br />
                    <button type="submit" className="bg-red-500 text-white px-12 py-4 rounded-full cursor-pointer">Delete</button>

                </form>
            </div>)
    }

}
export default DeleteUser