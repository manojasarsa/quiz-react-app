import "./resultcard.css";

type ResultCardType = {
    currentQuesIndex: number
    question: string
    ansIndex: number
    options: []
    selectedOption: number
}

export const ResultCard = ({ currentQuesIndex, question, ansIndex, options, selectedOption }: ResultCardType) => {
    return (
        <div>
            <div className="ques_score_box">
                    <p className="ques_num">Question {currentQuesIndex + 1 }</p>
            </div>

            <div className="question">
                <p>{question}</p>
            </div>

            <form className="options flex flex_col no_hover">

                {options.map((option: string, index: number) => (
                    <label 
                        className={(ansIndex === index ? "correct_ans" : selectedOption === index ? "wrong_ans" : "all_options")}
                        key={index} >
                        <input 
                        type="radio" name="option" value={option} /> {option}
                    </label>
                ))}

            </form>
        </div>
    )
};