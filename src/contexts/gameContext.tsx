import { createContext, useReducer } from "react";
import { gameReducer } from "../reducers/gameReducer";
import { ReactChildrenType } from "../types";
import { GameContextType } from "../types/contextTypes/game.types";

const GameContext = createContext({} as GameContextType);

const GameProvider = ({ children }: ReactChildrenType) => {

    const initialGameState = {
        error: false,
        loading: false,
        questions: [{}],
        currentQuesIndex: 0,
        selectedOptions: [],
        quizName: ""
    };

    const [gameState, gameDispatch] = useReducer(gameReducer, initialGameState);

    return (
        <GameContext.Provider value={{ gameState, gameDispatch }}>
            {children}
        </GameContext.Provider>
    )
};

export { GameProvider, GameContext };