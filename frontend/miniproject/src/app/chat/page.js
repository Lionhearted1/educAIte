import React from 'react'
import Navigation from '../dashboard/components/navigation'

const chatButton  = document.querySelector('.chat') ;
chatButton.addEventListener('click', function(){
  
});

function Chat() {
  return (
    <>
    <div className="flex flex-col">
      <Navigation/>
      <div className='bg-blue-300'>
        <center>
         <div className='bg-zinc-400 shadow-inner shadow-slate-400 '> 
         <button className='chat'onClick={Slider}>chat</button> | Quiz</div>
        </center>

      </div>
    </div>
    </>
  )
}

export default Chat