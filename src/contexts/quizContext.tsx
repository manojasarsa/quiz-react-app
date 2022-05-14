import { createContext, useReducer } from "react";
import { QuizContextType, ReactChildrenType } from "../types";
import { quizReducer } from "../reducers/authReducer";

export const QuizContext = createContext({} as QuizContextType);

const quizReducer = (state, action) => {
      switch(action.type) {

            case "INITIALIZE" : 
                  return { ...state, loading: true, error: false };

            case "SET_QUIZ" :
                  return {
                        ...state,
                        loading: false,
                        error: false,
                        categories: action.payload.categories,
                        quizzes: action.payload.quizzes
                  };

            case "SET_ERROR" : 
                  return { ...state, loading: false, error: true };

            default:
                  return state;
      }
};

export const AuthProvider = ({children}: ReactChildrenType) => {

      const initialQuizState = {
            error: false,
            loading: false,
            categories: [],
            quizzes: []
      };  

      const [ quizState, quizDispatch ] = useReducer(quizReducer, initialQuizState);

      return (
            <QuizContext.Provider value={{ quizState, quizDispatch }}>
                  {children}
            </QuizContext.Provider>
      );
}