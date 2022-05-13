import { createContext, useReducer } from "react";
import { CategoryContextType, ReactChildrenType } from "../types";
import { quizReducer } from "../reducers/authReducer";

export const QuizContext = createContext({} as QuizContextType);

export const AuthProvider = ({children}: ReactChildrenType) => {

      const initialQuizState = {
            error: false,
            loading: false,
            categories: []
            quizzes: []
      };  

      const [ quizState, quizDispatch ] = useReducer(quizReducer, initialQuizState);

      return (
            <QuizContext.Provider value={{ quizState, quizDispatch }}>
                  {children}
            </QuizContext.Provider>
      );
}