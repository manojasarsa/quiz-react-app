import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GameContext } from "../../contexts/gameContext";
// import { useGame } from "../../contexts/gameContext";
import { useQuiz } from "../../contexts/quizContext";
import { useGame } from "../../hooks/useGame";
// import { useGameMethod } from "../../utils/gameMethods";
import "./quescard.css";

export const QuesCard = () => {

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

    const { resetQuiz, resetSelections, getQuestions, getNextQues, getPrevQues, setOption, gameState } = useGame();

    const { questions, currentQuesIndex, selectedOptions } = gameState;

    useEffect(() => {
        setSelectedOptionIndex(selectedOptions[currentQuesIndex]);
    }, [currentQuesIndex, selectedOptions]);

    const navigate = useNavigate();

    return (
        <div className="main_contain flex flex_row">
            <div className="ques_container flex flex_col">

                <h1 className="ques_heading">{gameState.quizName} Quiz</h1>

                {/* TODO */}

                {/* <div className="timer_box">
                    <span className="timer">Time left: <span className="timeleft"> 01:23</span></span>
                </div> */}

                <div className="ques_score_box flex flex_justify_between">
                    <p className="ques_num">Question: {currentQuesIndex + 1}/{questions.length}</p>
                    <button className="cta_btn quit_btn" onClick={() => {
                        resetQuiz();
                        resetSelections();
                        navigate("/", { replace: true });
                    }}>Quit</button>
                </div>

                <div className="question">
                    <p>{questions[currentQuesIndex]?.question}</p>
                </div>

                <form className="options flex flex_col flex_justify_center flex_align_center">
                    {questions[currentQuesIndex]?.options.map((option: string, index: number) => (
                        <label 
                            className={(selectedOptionIndex === index ? "chosen_option" : "all_options")}
                            key={index} 
                            onClick={() => setSelectedOptionIndex(index)}>
                            <input 
                            type="radio" name="option" value={option} /> {option}
                        </label>
                    ))}
                </form>

                <div className="ques_btn_box flex flex_justify_between">
                    
                    <button 
                        disabled={currentQuesIndex === 0}
                        className="cta_btn " 
                        onClick={() => {
                        setOption(selectedOptionIndex);
                        getPrevQues();
                    }} >
                        {"<"} Prev
                    </button>

                    {currentQuesIndex + 1 === questions.length ?
                        ( <button className="cta_btn" onClick={() => {
                            setOption(selectedOptionIndex);
                            navigate("/result", { replace: true });
                        }} >
                            View Results
                        </button>
                        ) : (
                            <button className="cta_btn" onClick={() => {
                                setOption(selectedOptionIndex);
                                getNextQues();
                            }} >
                                Next {">"}
                            </button>
                        )
                    }

                </div>
            </div>
        </div>
    )
};