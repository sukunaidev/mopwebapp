import { useUser } from "@/hooks/useUser";
import { useState } from "react";


interface Props {
    clickedUpdate: Boolean
}

function UpdateUser({ clickedUpdate }: Props) {
    const { updateUser } = useUser();

    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState("");

    let handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    let handleNewUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUsername(e.target.value)
    }
    let handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await updateUser(username, newUsername);
        }
        catch (err) {
            console.error("Error Updating Usernam user", err);
        }

    }


    if (clickedUpdate) {
        return (
            <div className="flex justify-center items-center w-120 bg-gray-400 rounded-full px-5 py-8 translate-x-90 -translate-y-4">
                <form onSubmit={handleSubmit}>
                    <h1>Update Your Account</h1>
                    <label>Confirm Username</label>
                    <input value={username} onChange={handleUsernameChange}
                        type="text" className={` border border-gray-900 px-3 py-2 rounded w-48`}></input>
                    <br />
                    <label>Enter New Usernmae</label>
                    <input value={newUsername} onChange={handleNewUsernameChange}
                        type="text" className={` border border-gray-900 px-3 py-2 rounded w-48`}></input>
                    <br />
                    <button type="submit" className="bg-red-500 text-white px-12 py-4 rounded-full cursor-pointer">Delete</button>

                </form>
            </div>)
    }

}
export default UpdateUser