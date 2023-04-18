import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Quiz = () => {
    return (
        <div className='home'>
            <label htmlFor='' className='inputLabel'>What is My Name?</label>
            <input type="submit" value="Jog" />
            <Link to='/quiz' className='startLabel'>
                <button className='startBtn'>Start Quiz</button>
            </Link>
        </div>
    )
}

export default Quiz