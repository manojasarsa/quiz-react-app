import { createContext, useReducer } from "react";
import { GameContextType, ReactChildrenType } from "../types";
export const GameContext = createContext({} as GameContextType);

const gameReducer = (state, action) => {
      switch(action) {
            case "INITIALIZE" :
                  return { ...state, error: false, loading: true };
            
            case "NEXT_QUES" :
                  return {
                        ...state,
                        loading: false,
                        currentQuesIndex: state.currentQuesIndex + 1
                  };

            case "PREV_QUES" :
                  return {
                        ...state,
                        loading: false,
                        currentQuesIndex: state.currentQuesIndex - 1
                  };

            case "SET_OPTIONS" :
                  return {
                        ...state,
                        loading: false,
                  };

            case "SET_QUIZ" :
                  return {
                        ...state,
                        loading: false,
                  };

            case "RESET_QUESTIONS" :
                  return {
                        ...state,
                        loading: false,
                  };

            case "RESET_QUIZ" :
                  return {
                        ...state,
                        error: false,
                        loading: false,
                        questions: [],
                        currentQuesIndex: 0,
                        selectedOptions: [],
                        quizTitle: ""
                  };

            case "SET_ERROR" : 
                  return { ...state, loading: false, error: true };

            default: 
                  return state;
      }
}

export const AuthProvider = ({children}: ReactChildrenType) => {

      const initialGameState = {
            error: false,
            loading: false,
            questions: [{}],
            currentQuesIndex: 0,
            selectedOptions: [],
            quizTitle: ""
      };  

      const [ gameState, gameDispatch ] = useReducer(gameReducer, initialGameState);

      return (
            <GameContext.Provider value={{ gameState, gameDispatch }}>
                  {children}
            </GameContext.Provider>
      );
}