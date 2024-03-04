import React from 'react'

import Navigation from './components/navigation'
import NavigationComponent from './components2/NavigationComponent'
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
      <div className="ml-[44vh] w-[132vh] h-[20vh]  flex flex-col">
        <div className='mb-10 -ml-5 -mr-2'><TopBar/></div>
        <HeroSection/>
        <span className='flex flex-row  mt-5 -ml-5 gap-0'>
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
