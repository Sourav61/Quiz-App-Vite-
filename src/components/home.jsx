import React, { useState, useContext } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { QuizContext } from "../helper/context";

const Home = () => {
    const { setGameState } = useContext(QuizContext);

    return (
        <div className='form'>
            <button onClick={() => setGameState("quiz")}>Start Quiz</button>
        </div>
    )
}

export default Home