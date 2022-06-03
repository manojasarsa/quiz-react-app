import { createContext, useContext, useEffect, useReducer } from "react";
import { quizReducer } from "../reducers/quizReducer";
import { QuizContextType, ReactChildrenType } from "../types";
import { getCategories, getQuizzes } from "../utils/fireBaseMethods";

const QuizContext = createContext({} as QuizContextType);

const QuizProvider = ({ children }: ReactChildrenType) => {

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
    )
};

const useQuiz = () => useContext(QuizContext);

export { QuizContext, QuizProvider, useQuiz };