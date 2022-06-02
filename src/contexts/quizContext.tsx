import { createContext, useEffect, useReducer } from "react";
import { QuizContextType, QuizStateType, ReactChildrenType } from "../types";
import { QuizActionType } from "../types/contextTypes/quiz.types";

export const QuizContext = createContext({} as QuizContextType);

const quizReducer = (state: QuizStateType, action: QuizActionType) => {
    switch (action.type) {

        case "INITIALIZE":
            return { ...state, loading: true, error: false };

        case "SET_QUIZ":
            return {
                ...state,
                loading: false,
                error: false,
                categories: action.payload.categories,
                quizzes: action.payload.quizzes
            };

        case "SET_ERROR":
            return { ...state, loading: false, error: true };

        default:
            return state;
    }
};

export const QuizProvider = ({ children }: ReactChildrenType) => {

    useEffect(() => {
        ( async () => {
            quizDispatch({ type: "INITIALIZE" });
            try {
                const quizzes = await
            }
        })();
    })

    const initialQuizState = {
        error: false,
        loading: false,
        categories: [],
        quizzes: []
    };

    const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState);

    return (
        <QuizContext.Provider value={{ quizState, quizDispatch }}>
            {children}
        </QuizContext.Provider>
    );
};