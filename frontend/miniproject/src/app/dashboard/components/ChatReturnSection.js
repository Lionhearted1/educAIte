/**
 * Return to Your Previous Chat
 * 
 * Welcome back! If you've been away from the chat 
 * for a while and want to catch up on what you missed, 
 * you can easily return to your previous chat. Simply click 
 * the "Return to Your Previous Chat" button below and you'll be t
 * aken back to where you left off. This way, you can continue your 
 * learning journey right where you left off. Happy chatting!
 */
import React from 'react'

function ChatReturnSection() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-7  rounded-lg">
    <p className="text-white text-lg mb-4">
    Welcome back! Want to catch up on what you missed, 
        you can easily return to your previous chat ,Happy learning !
    </p>
    <button className="bg-white text-blue-500 py-2 px-4 rounded-lg">
        Return to Your Previous Chat
    </button>
</div>
  )
}

export default ChatReturnSection