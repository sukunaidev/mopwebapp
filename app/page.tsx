"use client";
import { useState, useEffect } from "react";
import { use } from 'react';
import Image from "next/image";
import "./globals.css";
import { clearTimeout } from "timers";
import { sign } from "crypto";




function signUpForm() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(username + " email " + email + " password " + password);

    console.log(username, email, password);
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

function logInForm() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  let handleLoginSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Login user " + loginUsername + " login password " + loginPassword)

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


  //Imports from signup function
  const { username, email, password, handleSubmit, handleUsernameChange, handleEmailChange, handlePasswordChange } = signUpForm();
  const { loginUsername, loginPassword, handleLoginSubmit, handleLogInUsernameChange, handleLogInPasswordChange } = logInForm();

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
  },)






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

                  (<button type="submit"

                    className="bg-gray-500 text-white px-12 py-4 rounded-full cursor-pointer" >Sign Up!</button>)}
              </div>


            </div>
          </form>
        </div>

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
