import { createContext, useEffect, useReducer } from "react";
import { QuizContextType, QuizStateType, ReactChildrenType } from "../types";
import { QuizActionType } from "../types/contextTypes/quiz.types";
import { getCategories, getQuizzes } from "../utils/fireBaseMethods";

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
                quizzes: action.payload.quizzes,
                categories: action.payload.categories,
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
                const categories = await getCategories();
                const quizzes = await getQuizzes();
                quizDispatch({ type: "SET_QUIZ", payload: { categories, quizzes } });
            } catch (err) {
                console.error(err);
                quizDispatch({ type: "SET_ERROR" });
            }
        })();
    }, []);

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