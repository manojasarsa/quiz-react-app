import { DocumentData } from "firebase/firestore";

// type for STATE properties of reducer function (initialState)

type QuizStateType = {
    error: boolean
    loading: boolean
    quizzes: DocumentData
    categories: DocumentData
}

// types for ACTION properties reducer

type SetQuizType = {
    type: "SET_QUIZ"
    payload: {
        quizzes: DocumentData
        categories: DocumentData
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