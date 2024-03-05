import React from 'react'
import Link from "next/link";

function Home() {
  return (
   <>
   <Link href="/signup/signup">sign Up</Link> 
   <Link href="/file/file">file</Link> 
   <Link href="/login/login">login</Link>
   </>
  )
}

export default Home