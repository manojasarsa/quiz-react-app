import { createContext, useContext, useReducer } from "react";
import {  ReactChildrenType } from "../types";
import { GameStateType, GameActionType, GameContextType } from "../types/contextTypes/game.types";

const GameContext = createContext({} as GameContextType);

const gameReducer = (state: GameStateType, action: GameActionType) => {
    switch (action.type) {
        case "INITIALIZE":
            return { 
                ...state, 
                error: false, 
                loading: true 
            };

        case "NEXT_QUES":
            return {
                ...state,
                loading: false,
                currentQuesIndex: state.currentQuesIndex + 1
            };
    
        case "PREV_QUES":
            return {
                ...state,
                loading: false,
                currentQuesIndex: state.currentQuesIndex - 1
            };

        case "SET_QUIZ":
            return {
                ...state,
                loading: false,
                quizName: action.payload.quizName,
                questions: action.payload.questions,
                selectedOptions: [],
            };

        case "SET_OPTIONS":
            const selectedOptionsCopy = state.selectedOptions.slice();      // to make a new pure array
            selectedOptionsCopy[state.currentQuesIndex] = action.payload.userChoosenOption;

            return {
                ...state,
                loading: false,
                selectedOptions: selectedOptionsCopy,
            };

        case "RESET_QUESTIONS":
            return {
                ...state,
                loading: false,
                currentQuesIndex: 0,
                selectedOptions: [],
            };

        case "RESET_QUIZ":
            return {
                ...state,
                error: false,
                loading: false,
                questions: [],
                currentQuesIndex: 0,
                selectedOptions: [],
                quizName: ""
            };

        case "SET_ERROR":
            return { ...state, loading: false, error: true };

        default:
            return state;
    }
};

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