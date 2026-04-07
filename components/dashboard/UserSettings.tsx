import React, { useState } from 'react'
import { useUser } from '@/hooks/useUser';
import DeleteUser from '../auth/DeleteUser';
import UpdateUser from '../auth/UpdateUser';




function UserSettings() {
    const { user } = useUser();
    const [clickedDelete, setClickedDelete] = useState(false)
    const [clickedUpdate, setClickedUpdate] = useState(false)

    let handleUpdateSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        setClickedUpdate(true)
    }

    let handleDelSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setClickedDelete(true)
        //alert("ClickedDel")
    }

    return (
        <div>
            <div>
                <h1>User Settings</h1>
                <p>This is the user settings page.</p>
                <label htmlFor="username">Username</label>
                <input readOnly={true}
                    className={` border border-gray-900 px-3 py-2 rounded w-48`} id="username" type="text" placeholder={user?.username} value={user?.username} />
                <form onSubmit={handleUpdateSubmit}>
                    <button
                        type="submit"
                        className="bg-gray-500 text-white px-12 py-4 rounded-full cursor-pointer">
                        Save Changes
                    </button>
                </form>
                <br />
                <form onSubmit={handleDelSubmit}>
                    <button
                        type="submit"
                        className="bg-gray-500 text-white px-12 py-4 rounded-full cursor-pointer">
                        Delete your account
                    </button>
                </form>
            </div>
            <div>
                <DeleteUser clickedDelete={clickedDelete} />
                <UpdateUser clickedUpdate={clickedUpdate} />
            </div>

        </div>
    )
}

export default UserSettings