import { createContext, useReducer } from "react";
import { GameContextType, ReactChildrenType } from "../types";
import { gameReducer } from "../reducers/authReducer";

export const GameContext = createContext({} as GameContextType);

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