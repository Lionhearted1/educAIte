"use client";
import React, { useState } from 'react';
import './style.css'
import Quiz from './quiz';
import  Link  from 'next/link';


const ChatInterface = () => {
    
    const messages = [
        { sender: 'user', content: 'Hello, kjvkjbcvjkasjkcksb ovnbinocvnaoidviods oivdsionsdiovnoisdnnaosin vonavnoncondoica onvoinsIOnanision  conoacnacoindcons acndsodcndaionc onsvonsadoncodc how are you?' },
        { sender: 'bot', content: 'I am good, thank you!' },
        { sender: 'user', content: "That's bdfvbfvndasndcbeuribviuhiv iabibhiuhiwdbbah diuchdbbdsiubdbbacibiuabibdcibca iuvbiuabcicibuaicyvibcv vaiuavevcbdbruwbiuwvbuihuiaicbib cbiubaiucbiubcibibciubcb aciubciaubibciubcbuabib ciuubawiubcibiubcibaibsciubcibgreat to hear!" },
        { sender: 'bot', content: 'Yes, bhcsbakk cnkjsdnc jjckjwdncn wkncondnc onconown onconwocn cnownconw ncwcnon  cnkjsdnc jjckjwdncn wkncondnc onconown onconwocn cnownconw ncwcnon wocnowecnw owcnweocnw ocwnon it is!' },
    ];

    const [newMessage, setNewMessage] = React.useState('');
    
    const handleSendMessage = () => { };
    const handleFileUpload = (event) => { };
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        console.log (!isToggled);
        if (!isToggled) {
            document.querySelector('.chatInt').style.display = 'none';
            document.querySelector('.quizInt').style.display = 'block';
           
        }
        else 
        {
            document.querySelector('.chatInt').style.display = 'block';
            document.querySelector('.quizInt').style.display = 'none';
        }
    };
      
   
    return (
        <div className="flex flex-col h-screen overflow-x-hidden   relative
           rounded-md border-2 border-black
         bg-white bg-[radial-gradient(#cacbce_1px,transparent_1px)] 
         shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [background-size:16px_16px] m750:px-5 m750:py-10">

            <div className="flex items-center justify-between  p-4 bg-white shadow">
                <Link href='/dashboard'>
                    <button className='bg-purple-600 hover:bg-purple-400 shadow-[8px_8px_0px_rgba(0,0,0,1)]
                             border-2 border-black text-black font-bold py-2 px-4 rounded-lg focus:outline-none
                             hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150
                             focus:shadow-outline'>back</button>
                </Link>
                 {/* ---------------------------{toggle button----- -----------------------------------} */}
                                <div className=''>
                                    <label className="relative -left-[45vw] inline-flex cursor-pointer items-center">
                                                                <input type="checkbox" value="" className="peer sr-only" 
                                                                onClick={handleToggle}/>
                                                                <div className="peer h-8 w-[70px] rounded-full border-2 border-black
                                                                 bg-white after:absolute after:start-[6px] after:top-[6px] after:h-5 
                                                                 after:w-5 after:rounded-full after:border-2 after:border-black
                                                                  after:bg-white after:transition-all after:content-['']
                                                                   peer-checked:bg-yellow-400 peer-checked:after:translate-x-[37px]
                                    peer-focus:outline-none rtl:peer-checked:after:-translate-x-[37px]"></div>
                                                                </label>
                                </div>
            </div>
            <div className="chatInt flex-grow overflow-x-hidden p-4">
                <div className="flex flex-col h-full">
                                <div className="flex-grow overflow-x-hidden overflow-y-auto">
                                        <div className="flex-grow w-[100%] mt-5 overflow-x-hidden overflow-y-auto">
                                            {messages.map((message, index) => (
                                                    <div
                                                        key={index}
                                                        className={`relative   ${message.sender === 'user' ? 'left-8' : 'left-[65vw]'} mb-4`}
                                                    >
                                                        <div
                                                            className={`rounded-lg pl-3 pr-3 max-w-sm  shadow-[8px_8px_0px_rgba(0,0,0,1)] 
                                                            border-2 border-black ${
                                                                message.sender === 'user' ? 
                                                                'bg-purple-500 text-black  max-w-lg' : 'bg-gray-200  '
                                                            }`}
                                                        >
                                                            <p className='p-5'>{message.content}</p>
                                                        </div>
                                                    </div>
                                        ))}
                                </div>
                                    </div>
                    <div className="flex items-center gap-5 justify-center mb-8 mt-4">
                        <input
                            type="text"
                            
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Your Prompt Here...."
                            className="flex-grow px-4 py-2 
                            mr-2 text-gray-700 bg-white 
                            hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150
                            border-2 border-black
                              rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] focus:outline-none 
                             focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="px-4 py-2 text-white bg-[#C4A1FF] rounded-lg
                            shadow-[8px_8px_0px_rgba(0,0,0,1)]
                            border-2 border-black
                            hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150
                             hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                        >
                            Send
                        </button>
                        <label
                            htmlFor="file-upload"
                            className="px-4 py-2 ml-2 text-white bg-yellow-500 rounded-lg 
                            shadow-[8px_8px_0px_rgba(0,0,0,1)]
                            border-2 border-black
                            hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150
                             hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
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
            <div className='quizInt hidden'><Quiz/></div>
              
        </div>
    );
};

export default ChatInterface;