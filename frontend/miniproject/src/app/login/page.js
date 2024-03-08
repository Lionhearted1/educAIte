"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "./login.css";
import Cookies from 'js-cookie';
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const router = useRouter();
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const username = Cookies.get('user_name');
  console.log(username)
  useEffect(()=>{
    if(username){
      router.push("/dashboard")
    }
  },[router])
 

  const handleLogin = async (e) => {
    e.preventDefault();

    const authEndpoint = `http://127.0.0.1:3000/auth/login`;

    try {
      const response = await axios.post(authEndpoint, { user_name, password });

      if (response.status === 200) {
        // Successful registration, redirect to /dashboard
        Cookies.set('user_name', user_name);
        router.push("/dashboard");
      } else {
        setErr(true);
        setErrMsg(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErr(true);
      setErrMsg("Login Failed");
    }

    // Add console.log statements here to check the error message
    console.log("Error Status:", err);
    console.log("Error Message:", errMsg);
  };

  useEffect(()=>{
    if(user_name || password){
      setErr(false)
    }
  },[user_name,password])



  return (
    <>
      <center>
        <div className="w-80 h-full container bg-white mt-[12vh] relative font-mono">
          <div className="box" />
          <form className="w-full h-full" onSubmit={handleLogin}>
            <h1 className="text-[32px] mb-4 m-5 font-extrabold font-mono text-lavender">
              Login
            </h1>
            {err && <p className="text-red-300">{errMsg}</p>}

            <label className="label">Username</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your username"
              className="field text-center hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 focus:outline-none"
              value={user_name}
              onChange={(e) => setUser_name(e.target.value)}
            />

            <label className="label">Password </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="field text-center hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              name="submit"
              onClick={handleLogin}
              className="border-2 border-black p-1 h-10 rounded-lg bg-lavender mb-8 mt-5 w-64 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-purple-800 hover:text-white  duration-150 focus:outline-none focus:text-white focus:bg-purple-800"
            >
              Signup
            </button>
          </form>
          <p className="text-m mb-4">
            Not Signed Up?{" "}
            <Link href="/signup">
              <href className="text-blue-500 underline">Register</href>
            </Link>
          </p>
          <div className="circle" />
        </div>
      </center>
    </>
  );
}

export default Signup;
