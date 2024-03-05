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
    <div className="flex flex-row">
     <Navigation/>
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
