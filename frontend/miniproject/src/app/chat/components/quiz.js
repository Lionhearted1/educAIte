'use client';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function Quiz() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const handleNextQuestion = () => {};
    const handlePreviousQuestion = () => {};
    const question = 'What is the capital of France?';
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
        <div className="bg-gray-100 min-h-screen flex flex-col gap-11 items-center justify-center">
            <div className="bg-white shadow-2xl shadow-slate-500 rounded-2xl 
            px-8 pt-6 pb-8 mb-4 flex flex-col h-[80vh] w-[100vh] justify-center  items-center">
                <div className="mb-4">
                    <h2 className="text-2xl mb-2">{question}</h2>
                    <div className="flex flex-col">
                        {options.map((option, index) => (
                            <label key={index} className="inline-flex items-center mt-3">
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
                    border-2 border-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                    {isAnswered && (
                        <p className="text-green-500 ml-40 mt-10">{isCorrect ? 'Correct answer!' : `Wrong answer!`}</p>
                    )}
                </div>
            </div>
            <div className="flex flex-row gap-20  items-center justify-between">
                    <button
                        onClick={handlePreviousQuestion}
                        className="bg-purple-700 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)]
                         border-2 border-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextQuestion}
                        className="bg-purple-700 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)]
                         border-2 border-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none
                          focus:shadow-outline"
                    >
                        Next
                    </button>
                </div>
        </div>
    );
}

export default Quiz;