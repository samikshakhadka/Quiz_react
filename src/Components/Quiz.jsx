import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { Routes, Route, BrowserRouter } from 'react-router-dom';


import NotImpressed from '../Pages/NotImpressed';
import Congratulations from '../Pages/Congratulations';


const questions = [
    {
        id: 1,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris',
    },
    {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars',
    },
    {
        id: 3,
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars',
    },
    // Add more questions here
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Check if the user answered all questions correctly
            if (score === 2) {
                return navigate('/Congratulations');
            } else {
                return navigate('/NotImpressed');
            }
        }
    };

    const currentQuizQuestion = questions[currentQuestion];
    return (


        <div>
            <p className='text-red-500'>Quiz Question {currentQuestion + 1}</p>
            <p>{currentQuizQuestion.question}</p>
            <ul>
                {currentQuizQuestion.options.map((option, index) => (
                    <li key={index}>
                        <button onClick={() => handleAnswer(option)}>{option}</button>

                       
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default Quiz;
