import { DocumentData } from "firebase/firestore";

// type for STATE properties of reducer function (initialState)

type GameStateType = {
    error: boolean
    loading: boolean
    questions: DocumentData
    currentQuesIndex: number
    selectedOptions: number[]
    quizName: string
}

// types for ACTION properties reducer

type SetQuizType = {
    type: "SET_QUIZ"
    payload: {
        questions: DocumentData
        quizName: string
    }
};

type SetOptionType = {
    type: "SET_OPTIONS"
    payload: {
        userChoosenOption: number
    }
}

type OtherActionType = {
    type: "INITIALIZE" | "NEXT_QUES" | "PREV_QUES" | "RESET_QUIZ" | "RESET_QUESTIONS" | "SET_ERROR" 
};

type GameActionType = SetQuizType | SetOptionType | OtherActionType

// state and dispatch types of useReducer()

type GameContextType = {
    gameState: GameStateType
    gameDispatch: React.Dispatch<GameActionType>
};

export type { GameStateType, GameActionType, GameContextType };