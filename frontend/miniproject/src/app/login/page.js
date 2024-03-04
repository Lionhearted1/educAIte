import "./login.css"
import React from 'react'
import 'tailwindcss/tailwind.css';


function Signup() {
  return (
    <>
    
  <center>
    <div className="w-80 h-full container bg-white mt-[12vh] relative font-mono">
    <div className="box"/>
        <form className="w-full h-full">
    
           
    
              <h1 className="text-[32px] mb-4 m-5 font-extrabold font-mono text-lavender">Login</h1>
    
              <label className="label">E-mail</label>
              <input type='text' name="email" placeholder='   Enter your E-mail' className= " field"/>
           
              <label className="label ">Password </label>
              <input type='text' name="password" placeholder='   Enter your password' className= "field"/>
              <input type='submit' name='submit'  
              className=" border-2 border-black p-1 h-10 rounded-lg bg-lavender mb-8 mt-5 -translate-y-5 w-64 
              shadow-[8px_8px_0px_rgba(0,0,0,1)]"
     /> 
        </form>
        <div className="circle"/>
    </div>
  </center>
        
    </>
  )
}

export default Signup
