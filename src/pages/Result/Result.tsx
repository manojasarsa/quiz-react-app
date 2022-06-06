import { Link } from "react-router-dom";
import { useGame } from "../../hooks/useGame";
import "./result.css";

export const Result = () => {

    const { resetQuiz, resetSelections } = useGame();
    return (
        <div className="main_contain">
            <div className="ques_container flex flex_col">

                <h1 className="ques_heading">Results</h1>
                <h1 className="ques_heading">Final Score: 20/50</h1>

                {/* <!-- Ques 1 --> */}

                <div className="ques_score_box">
                    <p className="ques_num">Question 1</p>
                </div>

                <div className="question">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem aspernatur laudantium excepturi velit maiores quia non rem placeat ad esse?
                    </p>
                </div>

                <form className="options flex flex_col no_hover">
                    <label>
                        <input type="radio" name="option" value="Option A" /> Option A
                    </label>
                    <label className="correct">
                        <input type="radio" name="option" value="Option B" /> Option B
                    </label>
                    <label className="wrong">
                        <input type="radio" name="option" value="Option C" /> Option C
                    </label>
                </form>

                {/* <!-- Ques 2 --> */}

                <div className="ques_score_box">
                    <p className="ques_num">Question 2</p>
                </div>

                <div className="question">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem aspernatur laudantium excepturi velit maiores quia non rem placeat ad esse?
                    </p>
                </div>

                <form className="options flex flex_col no_hover">
                    <label className="correct">
                        <input type="radio" name="option" value="Option A" /> Option A
                    </label>
                    <label>
                        <input type="radio" name="option" value="Option B" /> Option B
                    </label>
                    <label>
                        <input type="radio" name="option" value="Option C" /> Option C
                    </label>
                </form>

                {/* <!-- Ques 3 --> */}

                <div className="ques_score_box">
                    <p className="ques_num">Question 3</p>
                </div>

                <div className="question">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem aspernatur laudantium excepturi velit maiores quia non rem placeat ad esse?
                    </p>
                </div>

                <form className="options flex flex_col no_hover">
                    <label className="wrong">
                        <input type="radio" name="option" value="Option A" /> Option A
                    </label>
                    <label className="correct">
                        <input type="radio" name="option" value="Option B" /> Option B
                    </label>
                    <label>
                        <input type="radio" name="option" value="Option C" /> Option C
                    </label>
                </form>

                {/* <!-- Ques 4 --> */}

                <div className="ques_score_box">
                    <p className="ques_num">Question 4</p>
                </div>

                <div className="question">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem aspernatur laudantium excepturi velit maiores quia non rem placeat ad esse?
                    </p>
                </div>

                <form className="options flex flex_col no_hover">
                    <label>
                        <input type="radio" name="option" value="Option A" /> Option A
                    </label>
                    <label>
                        <input type="radio" name="option" value="Option B" /> Option B
                    </label>
                    <label className="correct">
                        <input type="radio" name="option" value="Option C" /> Option C
                    </label>
                </form>

                {/* <!-- Ques 5 --> */}

                <div className="ques_score_box">
                    <p className="ques_num">Question 5</p>
                </div>

                <div className="question">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem aspernatur laudantium excepturi velit maiores quia non rem placeat ad esse?
                    </p>
                </div>

                <form className="options flex flex_col no_hover">
                    <label className="wrong">
                        <input type="radio" name="option" value="Option A" /> Option A
                    </label>
                    <label>
                        <input type="radio" name="option" value="Option B" /> Option B
                    </label>
                    <label className="correct">
                        <input type="radio" name="option" value="Option C" /> Option C
                    </label>
                </form>

                <div className="ques_btn_box result_btn_box flex flex_justify_center">
                    <Link to="/" className="ques_btn next_btn" onClick={() => {
                        resetQuiz();
                        resetSelections();
                    }}>PLAY MORE</Link>
                </div>

            </div>
        </div>
    )
}