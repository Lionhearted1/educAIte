'use client';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function Quiz() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const handleNextQuestion = () => {};
    const handlePreviousQuestion = () => {};
    const question = 'What is the capital of France?iubcnencwncnwncklwnlnn  coinwoncnwniocweoicew wocinanwecnwennc wncvwnw';
    const options = ['London', 'Paris', 'Berlin', 'Rome'];
    const correctAnswer = 'Paris';

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const checkAnswer = () => {
        setIsAnswered(true);
        setIsCorrect(selectedOption === correctAnswer);
    };

    return (
        <div className=" min-h-screen flex flex-col gap-10 items-center justify-center 
        w-full  rounded-md border-2 border-black bg-purple-500 
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [background-size:16px_16px] ">
            <div className="bg-white  rounded-2xl  relative 
            px-8 pt-6 pb-8 mb-4 flex flex-col h-[60vh] w-[75vw] justify-center 
                border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150
            items-center">
                <div className="bg-lime-400 h-14 absolute w-14 border-2 -bottom-4 -left-6 -rotate-12  border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]
"></div>
                <div className="mb-4">
                    <h2 className="text-xl p-10 mb-2">{question}</h2>
                    <div className="flex flex-col">
                        {options.map((option, index) => (
                            <label key={index} className="inline-flex items-center px-10 mt-3">
                                <input
                                    type="radio"
                                    name="option"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => handleOptionSelect(option)}
                                    className="form-radio h-5 w-5 text-gray-600"
                                />
                                <span className="ml-2 text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={checkAnswer} className="bg-purple-700 mt-8 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)] 
                    border-2 border-black text-white font-bold py-2
                    hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150
                     px-4 rounded-lg focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                    {isAnswered && (
                        <p className="text-green-500 ml-40 mt-10">{isCorrect ? 'Correct answer!' : `Wrong answer!`}</p>
                    )}
                </div>
                <div className='bg-yellow-300 h-14 absolute w-14 border-2 -top-4 -right-6 -rotate-12 rounded-full border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]
'></div>
            </div>
            <div className="flex flex-row gap-5 mb-8  items-center justify-between">
                    <button
                        onClick={handlePreviousQuestion}
                        className="bg-purple-700 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)]
                         border-2 border-black text-white font-bold py-2 px-4 
                         hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150
                         rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextQuestion}
                        className="bg-purple-700 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)]
                         border-2 border-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none
                         hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 
                         focus:shadow-outline"
                    >
                        Next
                    </button>
                </div>
        </div>
    );
}

export default Quiz;