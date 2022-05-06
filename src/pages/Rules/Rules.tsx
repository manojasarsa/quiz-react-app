import "./rules.css";
import { Link } from "react-router-dom";

export const Rules = () => {
      return (
            <div className="rules_container flex flex_col flex_justify_start flex_align_center">

                  <h1 className="top_heading">QUIZ RULES</h1>

                  <div className="rules_box flex flex_col flex_justify_start flex_align_center">
                        <div className="rules_list flex flex_col flex_justify_center flex_align_start">
                              <p>1. There will be set of 5 questions and for each question there will be 3 options available.</p>
                              <p>2. Each correct answer will credit 10 points to your Total score. No negative marking.</p>
                              <p>3. There will be a timer for 5 mins. If you didn't choose the answer in the given time it will send
                                    you to the next question.</p>
                              <p>4. Click on "Quit Quiz" button to quit the quiz anytime while you are playing it.</p>
                              <p>5. You can see the Quiz board page containing the high score of participants after giving the quiz.
                              </p>
                              <p>6. Once you complete the quiz, you can see the result page containing your scores and answers.</p>
                        </div>
                  </div>

                  <div className="rules_btn_box flex flex_justify_around">
                        <Link className="rules_btn back" to="/">Go Back</Link>
                        <Link className="rules_btn start" to="/question">Start Quiz</Link>
                  </div>
            </div>
      )
}