import { QuizActionType } from "../types/contextTypes/quiz.types";
import { QuizStateType } from "../types";

export const quizReducer = (state: QuizStateType, action: QuizActionType) => {
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