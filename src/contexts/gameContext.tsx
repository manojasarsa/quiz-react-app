import { createContext, useContext, useReducer } from "react";
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

const useGame = () => useContext(GameContext);

export { GameProvider, useGame };