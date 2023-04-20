import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Quiz from './components/quiz';
import Result from './components/result';
import './App.css'
import { QuizContext } from "./helper/context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ setGameState, score, setScore }}>
        {gameState === "menu" && <Home />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "result" && <Result />}
      </QuizContext.Provider>
    </div>
  )
}

export default App
