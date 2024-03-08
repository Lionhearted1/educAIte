"use client";
import React, { useRef, useState, useEffect } from 'react';
import "./style.css";
import Quiz from "./quiz";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const ChatInterface = () => {
  const searchParams = useSearchParams();

  const unique_id = searchParams.get("unique_id");
  console.log(unique_id);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from external API when the component mounts
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:3000/chat/get_chats?user_name=hello&&unique_id=${unique_id}`
        );
        console.log(response.data)
        setMessages(response.data.chats);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3000/chat/chat', {
        unique_id: unique_id,
        user_name: "hello",
        input_text: newMessage,
      });
  
      console.log('Message sent successfully:', response.data);
  
      if (response.status === 200) {
        console.log(response.data)
        window.location.reload()
        // Implement logic to handle successful response
      } else {
        console.error('Unexpected status code:', response.status);
        // Handle unexpected status code
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
  
      // Handle error, show a message to the user, or perform any other necessary actions
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return; // No file selected
    }

    try {
      const formData = new FormData();
      formData.append("file_content", file); // 'file_content' is the field name expected by the server
      formData.append("user_name", "hello"); // Replace with your actual username
      formData.append("unique_id", unique_id); // Use the unique_id obtained from searchParams

      const response = await axios.post(
        "http://127.0.0.1:3000/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };

  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change or component mounts
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen overflow-x-hidden relative rounded-md border-2 border-black bg-white bg-[radial-gradient(#cacbce_1px,transparent_1px)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [background-size:16px_16px] m750:px-5 m750:py-10">
      <div className="flex items-center justify-between p-4 bg-white shadow">
        <Link href="/dashboard">
          <button className="bg-purple-600 hover:bg-purple-400 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black text-black font-bold py-2 px-4 rounded-lg focus:outline-none hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 focus:shadow-outline">
            Back
          </button>
        </Link>
        <div className="">
          <label className="relative -left-[45vw] inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              onClick={handleToggle}
            />
            <div className="peer h-8 w-[70px] rounded-full border-2 border-black bg-white after:absolute after:start-[6px] after:top-[6px] after:h-5 after:w-5 after:rounded-full after:border-2 after:border-black after:bg-white after:transition-all after:content-[''] peer-checked:bg-yellow-400 peer-checked:after:translate-x-[37px] peer-focus:outline-none rtl:peer-checked:after:-translate-x-[37px]"></div>
          </label>
        </div>
      </div>

      <div
        className="chatInt flex-grow overflow-x-hidden overflow-y-auto p-4"
        style={{ display: isToggled ? "block" : "none" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-grow w-[100%] mt-5 overflow-x-hidden overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`relative ${
                  message.sender === "bot" ? "left-8" : "left-[65vw]"
                } mb-4`}
              >
                <div
                  className={`rounded-lg pl-3 pr-3 max-w-sm shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black ${
                    message.sender === "bot"
                      ? "bg-purple-500 text-black max-w-lg"
                      : "bg-gray-200 "
                  }`}
                >
                  <p className="p-5">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div ref={messagesEndRef}></div>
          <div className="flex items-center gap-5 justify-center mb-8 mt-4">
            <input
              type="text"
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Your Prompt Here...."
              className="flex-grow px-4 py-2 mr-2 text-gray-700 bg-white hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 border-2 border-black rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 text-white bg-[#C4A1FF] rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Send
            </button>
            <label
              htmlFor="file-upload"
              accept=".pdf"
              className="px-4 py-2 ml-2 text-white bg-yellow-500 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
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
      <div
        className="quizInt hidden"
        style={{ display: isToggled ? "none" : "block" }}
      >
        <Quiz />
      </div>
    </div>
  );
};

export default ChatInterface;
