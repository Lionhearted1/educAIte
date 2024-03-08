"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /signup/signup as soon as the component mounts
    const signout=async ()=>{
        const authEndpoint = `http://127.0.0.1:3000/auth/logout`;
    try {
      const response = await axios.post(authEndpoint);
  
      if (response.status === 200) {
        Cookies.remove('user_name');
        router.push('/login')
        
      } else {
        setErr(true);
        setErrMsg(response.data.message || 'Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
      setErr(true);
      setErrMsg('Logout failed');
    }
    }
    signout()
  }, [router]);

  return (
    <>
      {/* Content on the Home page (if any) */}
    </>
  );
}

export default Home;
