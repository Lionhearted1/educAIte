import React from "react";
import Quiz from "./quiz";

const chatComponent = () => {
  const handleSendMessage = () => {};
  const handleFileUpload = (event) => {};

  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(!isToggled);
    if (!isToggled) {
      document.querySelector(".chatInt").style.display = "none";
      document.querySelector(".quizInt").style.display = "block";
    } else {
      document.querySelector(".chatInt").style.display = "block";
      document.querySelector(".quizInt").style.display = "none";
    }
  };

  return (
    <>
      
        
        <div className="chatInt flex-grow overflow-x-hidden p-4">
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-x-hidden overflow-y-auto">
              <div className="flex-grow w-[100%] mt-5 overflow-x-hidden overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`relative   ${
                      message.sender === "user" ? "left-8" : "left-[65vw]"
                    } mb-4`}
                  >
                    <div
                      className={`rounded-lg pl-3 pr-3 max-w-sm  shadow-[8px_8px_0px_rgba(0,0,0,1)] 
                                                            border-2 border-black ${
                                                              message.sender ===
                                                              "user"
                                                                ? "bg-purple-500 text-black  max-w-lg"
                                                                : "bg-gray-200  "
                                                            }`}
                    >
                      <p className="p-5">{message.content}</p>
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
            </div>
          </div>
        </div>
        <div className="quizInt hidden">
          <Quiz />
        </div>

    </>
  );
};

export default chatComponent;
