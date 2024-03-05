'use client';
import React from 'react'

function UploadOverlay() {
  return (
    <div className='h-[60vh] w-[60vh] bg-white/40'>
        <button className='border-2 border-black p-1 h-10 rounded-lg bg-lavender mb-8 mt-5 -translate-y-5 w-64 
              shadow-[8px_8px_0px_rgba(0,0,0,1)]'>
            Upload
        </button>
    </div>
  )
}

export default UploadOverlay  ;