import "./result.css";
import { DocumentData } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResultCard } from "../../components";
import { useGame } from "../../hooks/useGame";
import { useAuth } from "../../utils/authMethods";
import { updateScore } from "../../utils/fireBaseMethods";

export const Result = () => {

    const { resetQuiz, resetSelections, gameState } = useGame();

    const { questions, selectedOptions } = gameState;

    const navigate = useNavigate();

    const { authState: { userInfo: { token }}} = useAuth();

    const finalScore = questions.reduce( 
        (acc: number, curr: number, index: number) => 
            questions[index].ansIndex === selectedOptions[index] ? acc + 10 : acc, 0
    );

    useEffect(() => {
        (async() => {
            await updateScore(token, finalScore);
        })()
    });

    return (
        <div className="main_contain">
            <div className="ques_container flex flex_col">

                <h1 className="ques_heading">Results</h1>
                <h1 className="ques_heading">Final Score: {finalScore}/{questions.length * 10}</h1>

                {questions.map((quesData: DocumentData, index: number) => (
                    <ResultCard
                        key={quesData.id}
                        currentQuesIndex={index}
                        question={quesData.question}
                        ansIndex={quesData.ansIndex}
                        selectedOption={selectedOptions[index]}
                        options={quesData.options}
                    />
                ))}

                {/* RESET BUTTON */}

                <div className="ques_btn_box result_btn_box flex flex_justify_center">
                    <button className="cta_btn" onClick={() => {
                        resetQuiz();
                        resetSelections();
                        navigate("/");
                    }}>PLAY MORE</button>
                </div>

            </div>
        </div>
    )
};