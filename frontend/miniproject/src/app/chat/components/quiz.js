"use client"
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Quiz = () => {
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['London', 'Paris', 'Berlin', 'Rome'],
            correctOptionIndex: 1
        },
        {
            question: 'Which planet is known as the Red Planet?',
            options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
            correctOptionIndex: 0
        },
        {
            "question": "What is the main function of EducAIte in text processing?",
            "options": [
                "It identifies entities and sentiments in texts.",
                "It extracts information from PDFs and generates quizzes and summaries.",
                "It offers features like question generation and automated essay grading.",
                "It provides engaging and user-friendly solutions for document interaction."
            ],
            "correctOptionIndex": 1
        },
        {
            "question": "Which language models does EducAIte integrate?",
            "options": [
                "Ollama and ChatGPT",
                "Mistral and BERT",
                "GPT-3 and RoBERTa",
                "Transformer and LSTM"
            ],
            "correctOptionIndex": 0
        },
        {
            "question": "What programming language is EducAIte built on?",
            "options": [
                "JavaScript",
                "Python",
                "Ruby",
                "C++"
            ],
            "correctOptionIndex": 1
        },
        {
            "question": "What are the challenges EducAIte aims to address in document interaction?",
            "options": [
                "Efficiently processing and generating summaries from PDFs",
                "Creating engaging quizzes for educational purposes",
                "Identifying entities and sentiments within texts",
                "Offering automated essay grading"
            ],
            "correctOptionIndex": 0
        },
        // Add more questions here
    ];

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
        setIsCorrect(optionIndex === questions[currentQuestionIndex].correctOptionIndex);
    };

    const { question, options } = questions[currentQuestionIndex];

    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center w-full rounded-md border-2 border-black bg-purple-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [background-size:16px_16px] ">
            <div className="bg-white rounded-2xl relative px-8 pt-6 pb-8 mb-4 flex flex-col h-[60vh] w-[75vw] justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 items-center">
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
            <div className="flex flex-row gap-5 mb-8 items-center justify-between">
                <button
                    onClick={handlePreviousQuestion}
                    className="bg-purple-700 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black text-white font-bold py-2 px-4 hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 rounded-lg focus:outline-none focus:shadow-outline"
                    disabled={currentQuestionIndex === 0}
                >
                    Previous
                </button>
                {currentQuestionIndex === questions.length - 1 ? (
                    <button
                        onClick={handleNextQuestion}
                        className="bg-purple-700 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 focus:shadow-outline"
                    >
                        Finish
                    </button>
                ) : (
                    <button
                        onClick={handleNextQuestion}
                        className="bg-purple-700 hover:bg-purple-500 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none
                         hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 focus:shadow-outline"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Quiz;
