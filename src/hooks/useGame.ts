import { useContext } from "react";
import { GameContext } from "../contexts/gameContext";
import { getQuiz } from "../utils/fireBaseMethods";

export const useGame = () => {

    const { gameState, gameDispatch } = useContext(GameContext);

    const getQuestions = async (quizId: string, quizName: string) => {
        try {
            gameDispatch({ type: "INITIALIZE" });
            let quiz = await getQuiz(quizId);
            gameDispatch({ 
                type: "SET_QUIZ",
                payload: { questions: quiz, quizName }
            })
        } catch (err) {
            gameDispatch({ type: "SET_ERROR"});
            console.log(err);
        }
    };

    const setOption = (userChoosenOption: number) => {
        gameDispatch({ type: "SET_OPTIONS", payload: { userChoosenOption }});
    }

    const getNextQues = () => {
        if (gameState.currentQuesIndex + 1 === gameState.questions.length) {

        }
        gameDispatch({ type: "NEXT_QUES" });
    }

    const getPrevQues = () => {
        gameDispatch({ type: "PREV_QUES" });
    }

    const resetQuiz = () => {
        gameDispatch({ type: "RESET_QUIZ" });
    }

    const resetSelections = () => {
        gameDispatch({ type: "RESET_QUESTIONS" });
    }

    return {
        getQuestions, getNextQues, getPrevQues, setOption, resetQuiz, resetSelections, gameState
    }
};