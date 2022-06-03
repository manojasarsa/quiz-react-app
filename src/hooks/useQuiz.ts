import { useContext } from "react";
import { QuizContext } from "../contexts/quizContext";
import { getCategories, getQuizzes } from "../utils/fireBaseMethods";

// export const useQuiz = () => {
//     const { quizState, quizDispatch } = useContext(QuizContext);

//     // const refreshQuiz = async () => {
//     //     quizDispatch({ type: "INITIALIZE" });
//     //         try {
//     //             const categories = await getCategories();
//     //             const quizzes = await getQuizzes();
//     //             quizDispatch({ type: "SET_QUIZ", payload: { categories, quizzes } });
//     //         } catch (err) {
//     //             console.error(err);
//     //             quizDispatch({ type: "SET_ERROR" });
//     //         }
//     // }
//     return { quizState,  };
// };