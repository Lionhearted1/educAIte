'use client';
import React, { useState } from 'react'
import BlackLoader  from './BlackLoader';


function UploadOverlay(props) {

  const [loading,setLoading]=useState(true)
  

  return (
    <div className='relative inset-0 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black h-[60vh] w-[60vh] bg-white z-10 flex flex-col items-center justify-center' >
        <h1 className=''>{props.msg}</h1>
    </div>
  )
}

export default UploadOverlay  ;