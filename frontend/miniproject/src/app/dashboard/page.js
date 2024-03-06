import React from 'react'

import Navigation from './components/navigation'
import TopBar from './components/TopBar'
import HeroSection from './components/HeroSection'
import FilesList from './components/FilesList';
import ChatReturnSection from './components/ChatReturnSection'
function Dashboard
() {
  return (
    <>
    <div className="flex flex-row w-full items-center justify-center rounded-md border-2 border-black bg-white bg-[radial-gradient(#cacbce_1px,transparent_1px)] px-10 py-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [background-size:16px_16px] m750:px-5 m750:py-10">
     {/* <Navigation/> */}
      <div className="flex flex-col">
        <div className='mb-2 ml-[21vw] w-[79vw] '><TopBar/></div>
        <div className='w-[74vw] ml-[24vw]'><HeroSection/></div>
        <span className='flex flex-row  mt-5 w-[74vw] ml-[24vw] gap-0'>
          <span className='basis-1/2 '>
            <FilesList/>
          </span>
          <span className='basis-1/2 '>
            <ChatReturnSection/>
          </span>
          </span>
      </div>
      </div>     
    </>
  )
}

export default Dashboard
