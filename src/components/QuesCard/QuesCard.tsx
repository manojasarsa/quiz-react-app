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

    const [seconds, setSeconds] = useState(30); 

    const [minutes, setMinutes] = useState(1); 

    const [showModal, setShowModal] = useState(false);

    const { resetQuiz, resetSelections, getQuestions, getNextQues, getPrevQues, setOption, gameState } = useGame();

    const { questions, currentQuesIndex, selectedOptions } = gameState;

    useEffect(() => {
        setSelectedOptionIndex(selectedOptions[currentQuesIndex]);
    }, [currentQuesIndex, selectedOptions]);

    const navigate = useNavigate();

    // timer

    useEffect(() => {
        const currInterval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(currInterval);
                    setShowModal(true);
                } else {
                    setSeconds(59);
                    setMinutes((prev) => prev - 1);
                }
            } else {
                setSeconds((prev) => prev - 1);
            }
        }, 1000);
        return () => {
            clearInterval(currInterval);
        };
    }, [seconds, minutes]);

    return (        
        <div className="main_contain flex flex_row">
            <div className="ques_container flex flex_col">

                <h1 className="ques_heading">{gameState.quizName} Quiz</h1>

                <div className="timer_box">
                        <span className="timeleft">
                            {minutes < 10 ? "0" + minutes : minutes}:  
                            {seconds < 10 ? "0" + seconds : seconds}
                        </span>
                </div>

                {showModal && <div className="timer_modal flex flex_justify_center flex_align_center">
                    <div className="timer_modal_content flex flex_col flex_justify_center flex_align_center">
                        <h2>Times Up!</h2>
                        <button className="timer_btn" onClick={() => {
                            setOption(selectedOptionIndex);
                            navigate("/result", { replace: true });
                        }} >
                            View Results
                        </button>
                    </div>
                </div>}

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