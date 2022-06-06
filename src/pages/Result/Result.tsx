import { DocumentData } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { ResultCard } from "../../components";
import { useGame } from "../../hooks/useGame";
import "./result.css";

export const Result = () => {

    const { resetQuiz, resetSelections, gameState } = useGame();

    const { questions, currentQuesIndex, selectedOptions } = gameState;

    const navigate = useNavigate();

    return (
        <div className="main_contain">
            <div className="ques_container flex flex_col">

                <h1 className="ques_heading">Results</h1>
                <h1 className="ques_heading">Final Score: 20/50</h1>

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
}