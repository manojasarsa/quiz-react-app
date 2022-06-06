import { createContext, useContext, useReducer } from "react";
import { gameReducer } from "../reducers/gameReducer";
import { ReactChildrenType } from "../types";
import { GameContextType } from "../types/contextTypes/game.types";
import { getQuiz } from "../utils/fireBaseMethods";

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

// const useGame = () => useContext(GameContext);

export { GameProvider, GameContext };