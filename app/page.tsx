"use client";

import { useState, useEffect } from "react";
import { use } from 'react';
import Image from "next/image";
import "./globals.css";
import { clearTimeout } from "timers";
import { sign } from "crypto";
import Link from 'next/link';

import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import SignUp from "@/components/auth/SignUp";
import SignIn from "@/components/auth/SignIn";


export default function Home() {

  const { user, signIn, signUp } = useUser();


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
          <SignUp clickedsignUp={clickedsignUp} showInput={showInput} />
        </div>


        {/* LOGIN FORM */}
        <div>
          <SignIn clickedlogIn={clickedlogIn} showInput={showInput} />
        </div>


      </div>
    </div >
  );
}
