import "./rules.css";
import { Link } from "react-router-dom";

export const Rules = () => {
    return (
        <div className="rules_container flex flex_col flex_justify_start flex_align_center">

            <h1 className="top_heading">QUIZ RULES</h1>

            <div className="rules_box flex flex_col flex_justify_start flex_align_center">
                <div className="rules_list flex flex_col flex_justify_center flex_align_start">
                    <p>1. There will be a set of five questions, each with three options.</p>
                    <p>2. Each question carry 10 points. No negative marking.</p>
                    <p>3. You have 2 minutes to answer all of the questions.</p>
                    <p>4. Click on "Quit Quiz" button to quit the quiz anytime while you are playing it.</p>
                    <p>5. You can see your scores and answers on the result page when you finish the quiz.</p>
                </div>
            </div>

            <div className="rules_btn_box flex flex_justify_around">
                <Link className="rules_btn back" to="/">Go Back</Link>
                <Link className="rules_btn start" to="/question">Start Quiz</Link>
            </div>
        </div>
    )
}