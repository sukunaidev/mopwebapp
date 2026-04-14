import React, { useState } from 'react'
import { useUser } from '@/hooks/useUser';
import DeleteUser from '../auth/DeleteUser';
import UpdateUser from '../auth/UpdateUser';
import MopNav from '../ui/mopNav';




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
                <h1 className="flex justify-center text-5xl mb-10 mt-5 tracking-widest italic">User Settings</h1>
            </div>



            <div>
                <MopNav />

            </div >
            <div className=' relative bg-green-900 px-8 py-20   '>
                <div className='flex flex-col gap-4'>
                    <p className='flex justify-center -mt-4 text-2xl'>This is the user settings page.</p>

                    <div>
                        <p>Account Information</p>
                        <div className='absolue left-0'>
                            <label htmlFor="username">Usernaname</label></div>

                        <input readOnly={true}
                            className={` border border-gray-900 px-3 py-2 rounded w-48`} id="username" type="text" placeholder={user?.username} value={user?.username} />

                    </div>


                </div>
                <div className='absolute right-14 -mt-30 '>
                    <form onSubmit={handleUpdateSubmit}>
                        <button
                            type="submit"
                            className="bg-green-800 text-white px-12 py-4 rounded-full cursor-pointer">
                            Change Username
                        </button>
                    </form>
                    <br />
                    <form onSubmit={handleDelSubmit}>
                        <button
                            type="submit"
                            className="bg-red-900 text-white px-12 py-4 rounded-full cursor-pointer">
                            Delete your account
                        </button>
                    </form>
                </div>




            </div>



            <div>
                <DeleteUser clickedDelete={clickedDelete} />
                <UpdateUser clickedUpdate={clickedUpdate} />
            </div>

        </div>
    )
}

export default UserSettings