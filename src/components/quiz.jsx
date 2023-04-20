import React, { useContext, useState } from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import { Questions } from "../helper/QuestionBank";
import { QuizContext } from '../helper/context';

const Quiz = () => {
    const { setGameState, score, setScore } = useContext(QuizContext);
    const [currQ, setCurrQ] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")

    const nextQuestion = () => {
        if (Questions[currQ].answer === optionChosen) {
            setScore(score + 1);
        }

        console.log(score);

        if (currQ === Questions.length - 1) {
            setGameState("result");
        }
        setCurrQ(currQ + 1);
    }

    return (
        <div className='quiz'>
            <h1>{Questions[currQ].prompt}</h1>
            <div className='options'>
                <button onClick={() => setOptionChosen("A")} className='testBtn'>{Questions[currQ].optionA}</button>
                <button onClick={() => setOptionChosen("B")} className='testBtn'>{Questions[currQ].optionB}</button>
                <button onClick={() => setOptionChosen("C")} className='testBtn'>{Questions[currQ].optionC}</button>
                <button onClick={() => setOptionChosen("D")} className='testBtn'>{Questions[currQ].optionD}</button>
            </div>
            {/* {currQ === Questions.length - 1 ?
                <button onClick={() => { setGameState("result") }} className='startBtn'>Check Result</button>
                : <button onClick={() => { setCurrQ(currQ + 1) }} className='startBtn'>Next Q</button>
            } */}
            {/* <button className='startBtn' onClick={() => { currQ < Questions.length - 1 ? setCurrQ(currQ + 1) : setGameState("result") }}>Next</button> */}
            <button onClick={() => nextQuestion()} className='startBtn'>{currQ === Questions.length - 1 ? "Finish Quiz" : "Next Q"}</button>
        </div>
    )
}

export default Quiz