import { createContext } from "react";

const initialState = [

]

export const QuizContext = createContext([initialState, () => { }]);
