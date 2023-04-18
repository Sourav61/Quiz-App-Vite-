import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
    const [quizState, setQuizState] = useState(0);

    return (
        <div className='App'>
            <h1>Quiz App</h1>
            <div className='form'>
                <label htmlFor='' className='inputLabel'>
                    {quizState === 0 ? "Enter Your Name here" :
                        quizState === 1 ? "What is My Name" :
                            quizState === 2 ? "Which of this is not a programming language?" :
                                quizState === 3 ? "Which of these is not a javascript framework?" :
                                    "Quiz Finished"}
                </label>

                <input type='text' className='inputName' placeholder='Ex: John Smith' />
                <button className='startBtn' onClick={() => updateQuiz()}>
                    {quizState === 0 ? "Start Quiz" :
                        quizState !== 4 ? "Next Question" :
                            "Restart Quiz"
                    }
                </button>
            </div>
        </div>
    )
}

export default Home