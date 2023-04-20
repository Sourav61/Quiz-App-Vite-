import React, { useContext } from 'react'
import { QuizContext } from '../helper/context'
import { Questions } from '../helper/QuestionBank'
import "../App.css"

const Result = () => {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }

    return (
        <div className='Result'>
            <h1>Result</h1>
            <h2>{score} / {Questions.length}</h2>
            <button onClick={() => restartQuiz()}>Restart Quiz</button>
        </div>
    )
}

export default Result