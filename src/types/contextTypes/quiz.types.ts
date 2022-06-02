import { DocumentData } from "firebase/firestore";

// type for STATE properties of reducer

type QuizStateType = {
    error: boolean
    loading: boolean
    categories: DocumentData
    quizzes: DocumentData
}

// types for ACTION properties reducer

type SetQuizType = {
    type: "SET_QUIZ"
    payload: {
        categories: DocumentData
        quizzes: DocumentData
    }
};

type OtherActionType = {
    type: "INITIALIZE" | "SET_ERROR"
};

type QuizActionType = SetQuizType | OtherActionType

// state and dispatch types of useReducer()

type QuizContextType = {
    quizState: QuizStateType
    quizDispatch: React.Dispatch<QuizActionType>
};

export type { QuizContextType, QuizStateType, QuizActionType };