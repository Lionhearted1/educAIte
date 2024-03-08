"use client"
import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Cookies from 'js-cookie';

const Quiz = () => {
    const searchParams = useSearchParams();
    const username = Cookies.get('user_name');

  const unique_id = searchParams.get("unique_id");
  console.log(unique_id);
  const [newMessage, setNewMessage] = useState("");
  const [questions, setQuestions] = useState([
    {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Rome'],
        correct_option_index: 1
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correct_option_index: 0
    }
]);

    const [isQuiz,setIsquiz]=useState(false)
    const handleFinishQuestion=()=>{
            setSelectedOption(null);
            setIsquiz(false)
            setSelectedOption(null)
            setNewMessage("")

          
    }
    const handleSendMessage = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:3000/quiz/quiz', {
            unique_id: unique_id,
            user_name: username,
            input_text: newMessage,
          });
      
          console.log('Message sent successfully:', response.data);
      
          if (response.status === 200) {
            console.log(response.data)
            setQuestions(response.data.quizResults.quiz_questions);
            setIsquiz(true);
            // Implement logic to handle successful response
          } else {
            setIsquiz(false)
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
      
      


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
   

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setIsCorrect(false);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setIsCorrect(false);
        }
    };

    const handleOptionSelect = (optionIndex) => {
        setSelectedOption(optionIndex);
        setIsAnswered(true);
        setIsCorrect(optionIndex === questions[currentQuestionIndex].correct_option_index);
    };

    const { question, options } = questions[currentQuestionIndex];
   

    


 return (
    <>
         <div className="min-h-screen flex flex-col gap-10 items-center justify-center w-full rounded-md border-2 border-black bg-purple-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [background-size:16px_16px] ">
             <div className="bg-white rounded-2xl relative px-8 pt-6 pb-8 mb-4 flex flex-col h-[60vh] w-[75vw] justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 items-center " style={{ display: isQuiz ? 'block' : 'none' }}>
                 <div className="bg-lime-400 h-14 absolute w-14 border-2 -bottom-4 -left-6 -rotate-12  border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"></div>
                 <div className="mb-4">
                     <h2 className="text-xl p-10 mb-2">{question}</h2>
                     <div className="flex flex-col">
                         {options.map((option, index) => (
                             <label key={index} className="inline-flex items-center px-10 mt-3">
                                 <input
                                     type="radio"
                                     name="option"
                                     value={option}
                                     checked={selectedOption === index}
                                     onChange={() => handleOptionSelect(index)}
                                     className="form-radio h-5 w-5 text-gray-600"
                                 />
                                 <span className="ml-2 text-gray-700">{option}</span>
                             </label>
                         ))}
                     </div>
                 </div>
                 {isAnswered && (
                     <p className={`text-${isCorrect ? 'green' : 'red'}-500 mt-4`}>
                         {isCorrect ? 'Correct answer!' : 'Wrong answer!'}
                     </p>
                 )}
                 <div className='bg-yellow-300 h-14 absolute w-14 border-2 -top-4 -right-6 -rotate-12 rounded-full border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]'></div>
             </div>
             <div className="flex flex-row gap-5 mb-8 items-center justify-between " style={{ display: isQuiz ? 'block' : 'none' }}>
                 <button
                     onClick={handlePreviousQuestion}
                     className="bg-purple-700 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black text-white font-bold py-2 px-4 hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 rounded-lg focus:outline-none focus:shadow-outline mr-4"
                     disabled={currentQuestionIndex === 0}
                 >
                     Previous
                 </button>
                 {currentQuestionIndex === questions.length - 1 ? (
                     <button
                         onClick={handleFinishQuestion}
                         className="bg-purple-700 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 focus:shadow-outline"
                     >
                         Finish
                     </button>
                 ) : (
                     <button
                         onClick={handleNextQuestion}
                         className="bg-purple-700 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 focus:shadow-outline ml-4"
                     >
                         Next
                     </button>
                 )}
             </div>
             <div className="flex items-center gap-5 justify-center mb-8 mt-4 " style={{ display: isQuiz ? 'none' : 'block' }}>
            <input
              type="text"
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Enter Your Quiz Query Here...."
              className="w-80 flex-grow px-4 py-2 mr-2 text-gray-700 bg-white hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 border-2 border-black rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 text-white bg-[#C4A1FF] rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Send
            </button>
            
          </div>
         </div>
         
         </>
     );
};

export default Quiz;
