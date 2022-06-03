import { Link } from "react-router-dom";
import "./quizcard.css";

type QuizCardType = {
    id: string
    quizCategory: string
    redirectTo: string
    quizImg?: string
    quizName: string
}

export const QuizCard = ({ quizCategory, quizImg, quizName, redirectTo }: QuizCardType) => {

    console.log("quiz ->>", quizCategory, quizImg, quizName, redirectTo);

    return (
        <div className="card_image quiz_card_container">
            <div className="card_vertical">
                <div className="card_vertical_info flex flex_col">
                    <img className="img_responsive adjust_image" src={quizImg} alt={quizName}></img>

                    <div className="flex_justify_center flex_align_center flex flex_col">
                        <h2 className="card_title">{quizName}</h2>

                        <p className="card_subtitle">
                            Take the action-packed Sports quiz and Get ready to play!
                        </p>

                        <Link className="play_btn" to={redirectTo}>Play Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};