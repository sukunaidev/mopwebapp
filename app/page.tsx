"use client";

import { useState, useEffect } from "react";
import { use } from 'react';
import Image from "next/image";
import "./globals.css";
import { clearTimeout } from "timers";
import { sign } from "crypto";
import Link from 'next/link';

import { useRouter } from "next/navigation";


type User = {
  username: string;
  email: string;
  password: string;

};


export function SignUpForm({ setIsLoggedIn }: { setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  let handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(username + " email " + email + " password " + password);

    console.log(username, email, password);

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
      const data = await res.json() as { success: boolean };
      console.log("did success:", data.success)
      setUsername(username);
      setEmail(email);
      setPassword(password);
      setIsLoggedIn(true);
    }

  }

  let handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  let handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  let handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return {
    username,
    email,
    password,
    handleSubmit,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
  };
}

function logInForm({ setIsLoggedIn }: { setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  let handleLoginSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      const data = await res.json() as { success: boolean };
      console.log("did success:", data.success)
      setUsername(username);
      setEmail(email);
      setPassword(password);
      setIsLoggedIn(true);
    }

  }

  let handleLogInUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUsername(e.target.value)
  }

  let handleLogInPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPassword(e.target.value)
  }
  return {
    loginUsername,
    loginPassword,
    handleLoginSubmit,
    handleLogInUsernameChange,
    handleLogInPasswordChange,
  };
}


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { username, email, password, handleSubmit, handleUsernameChange, handleEmailChange, handlePasswordChange } = SignUpForm({ setIsLoggedIn });
  const { loginUsername, loginPassword, handleLoginSubmit, handleLogInUsernameChange, handleLogInPasswordChange } = logInForm({ setIsLoggedIn });

  const [moved, setMoved] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [moveUp, setMoveUp] = useState(false);
  const [clickedsignUp, setclickedSignUp] = useState(false);
  const [clickedlogIn, setclickedLogin] = useState(false);

  useEffect(() => {
    if (showInput) {
      const timer = setTimeout(() => {
        setMoveUp(true);
      }, 300);

    }
  }, []);



  // MAIN DASHBOARD CONTENT
  // if (isLoggedIn) {
  //   return (
  //     <div className="text-center font-bold pt-40" >
  //       <h1> Welcome to your user page!</h1>
  //       <label>Username</label>
  //       <input
  //         defaultValue={username}
  //         type="text"
  //         className={`border border-gray-901 px-3 py-2 rounded w-48`}
  //       />
  //       <button
  //         className={"bg-gray-500 text-white px-12 py-4 rounded-full cursor-pointer"}>
  //         Update Username!
  //       </button>
  //       <br />
  //       <label>Password</label>
  //     </div>
  //   )
  // }


  return (
    <div>
      <div className="pt-10">
        <h1 className="text-center font-bold italic text-6xl tracking-[0.3em]">M.O.P.</h1>
        <p className="text-center italic text-2xl text-gray-600">Mops for Obsessed People</p>
      </div>

      <div className="text-center font-bold pt-40" >

        <div className={`transition-transform duration-300 ease-in-out ${moved ? "-translate-x-50" : "translate-x-0"}`}>
          <button onClick={() => {
            setShowInput(!showInput)
            setMoved(!moved)
            setclickedSignUp(true)
            setclickedLogin(false)
            // setMoveUp(prev => !prev)
          }}

            className="bg-blue-700 text-black px-10 py-4 rounded-full cursor-pointer">
            Sign Up!</button>
        </div>

        <div className={` pt-4 transition-transform duration-300 ease-in-out ${moved ? "-translate-x-50" : "translate-x-0"}`}>
          <button onClick={() => {
            setShowInput(!showInput)
            setMoved(!moved)
            setclickedLogin(true)
            setclickedSignUp(false)
            //setLogin(!logIn)
          }}
            className="bg-gray-500 text-white px-12 py-4 rounded-full cursor-pointer">Login</button>
        </div>


        {/* SIGN UP FORM */}
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


        {/* LOGIN FORM */}
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
                    value={loginUsername}
                    onChange={handleLogInUsernameChange}
                  />

                  <br />
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="text"
                    className={` border border-gray-900 px-3 py-2 rounded w-48`}
                    placeholder="password"
                    value={loginPassword}
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


      </div>
    </div >
  );
}
