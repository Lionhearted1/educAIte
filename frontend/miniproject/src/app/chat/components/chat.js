"use client";
import React, { useState } from 'react';
import './style.css'

const ChatInterface = () => {
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);

    const handleSendMessage = () => {
       
        console.log('Message sent:', message);
       
    };

    const handleFileUpload = (event) => {
       
        
    };
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex items-center justify-between  p-4 bg-white shadow">
                                {/* {toggle button----- } */}
                                <div className='ml-[90vh]'>
                                    <label className="relative inline-flex cursor-pointer items-center">
                                                                <input type="checkbox" value="" className="peer sr-only" onClick={handleToggle}/>
                                                                <div className="peer h-8 w-[70px] rounded-full border-2 border-black
                                                                 bg-white after:absolute after:start-[6px] after:top-[6px] after:h-5 
                                                                 after:w-5 after:rounded-full after:border-2 after:border-black
                                                                  after:bg-white after:transition-all after:content-['']
                                                                   peer-checked:bg-[#C4A1FF] peer-checked:after:translate-x-[37px]
                                    peer-focus:outline-none rtl:peer-checked:after:-translate-x-[37px]"></div>
                                                                </label>
                                </div>
            </div>
            <div className="flex-grow p-4">
                <div className="flex flex-col h-full">
                    <div className="flex-grow overflow-y-auto">
                       
                    </div>
                    <div className="flex items-center gap-5 justify-center mt-4">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Prompt Here...."
                            className="flex-grow px-4 py-2 
                            mr-2 text-gray-700 bg-white border
                             border-gray-300 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] focus:outline-none 
                             focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="px-4 py-2 text-white bg-[#C4A1FF] rounded-lg
                            shadow-[8px_8px_0px_rgba(0,0,0,1)]
                             hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Send
                        </button>
                        <label
                            htmlFor="file-upload"
                            className="px-4 py-2 ml-2 text-white bg-green-500 rounded-lg 
                            shadow-[8px_8px_0px_rgba(0,0,0,1)]
                             hover:bg-green-600 focus:outline-none focus:bg-green-600"
                        >
                            Upload
                        </label>
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            onChange={handleFileUpload}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;