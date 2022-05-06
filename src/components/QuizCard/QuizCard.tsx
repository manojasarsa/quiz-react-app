import { Link } from "react-router-dom";
import "./quizcard.css";

export const QuizCard = () => {
      return (
            <div className="card_image quiz_card_container">
                  <div className="card_vertical">
                        <div className="card_vertical_info flex flex_col">
                              <img className="img_responsive adjust_image" src="assets/f2.png" alt="quiz_name"></img>

                              <div className="flex_justify_center flex_align_center flex flex_col">
                                    <h2 className="card_title">SPORTS</h2>

                                    <p className="card_subtitle">
                                          Take the action-packed Sports quiz and Get ready to play!
                                    </p>

                                    <Link className="play_btn" to="/explorequiz">Explore Quiz</Link>
                              </div>
                        </div>
                  </div>
            </div>
      )
}