"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import "./login.css"

import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const router = useRouter();
  const [user_name, setUser_name] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const authEndpoint = `${process.env.AUTH_URL}/login`;

      const response = await axios.post(authEndpoint, { user_name, password });

      if (response.status === 200) {
        // Successful authentication, redirect to /dashboard
        router.push('/dashboard');
      } else {
        // Authentication error, display toast message
        toast.error(response.data.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      toast.error('Authentication failed');
    }
  };

  return (
    <>
      <center>
        <div className="w-80 h-full container bg-white mt-[12vh] relative font-mono">
          <div className="box" />
          <form className="w-full h-full" onSubmit={handleLogin}>
            <h1 className="text-[32px] mb-4 m-5 font-extrabold font-mono text-lavender">Login</h1>

            <label className="label">Username</label>
            <input
              type="text"
              name="user_name"
              placeholder="   Enter your username"
              className="field"
              value={user_name}
              onChange={(e) => setUser_name(e.target.value)}
            />

            <label className="label">Password </label>
            <input
              type="password"
              name="password"
              placeholder="   Enter your password"
              className="field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              name="submit"
              className="border-2 border-black p-1 h-10 rounded-lg bg-lavender mb-8 mt-5 -translate-y-5 w-64 shadow-[8px_8px_0px_rgba(0,0,0,1)]"
              onSubmit={handleLogin}/>
          </form>
          <p className="text-m mb-4">
            Not Signed Up?{' '}
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
