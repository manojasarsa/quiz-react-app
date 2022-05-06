import "./quescard.css";

export const QuesCard = () => {
      return (
            <div className="main_contain flex flex_row">
                  <div className="ques_container flex flex_col">

                        <h1 className="ques_heading">SPORTS QUIZ</h1>
                        <div className="timer_box">
                              <span className="timer">Time left: <span className="timeleft"> 01:23</span></span>
                        </div>

                        <div className="ques_score_box flex flex_justify_between">
                              <p className="ques_num">Question: 1/5</p>
                              <p className="ques_current_score">Score: 0</p>
                        </div>
                        <div className="question">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quidem aspernatur laudantium excepturi velit maiores quia non rem placeat ad esse?
                              </p>
                        </div>

                        <form className="options flex flex_col flex_justify_center flex_align_center">
                              <label>
                                    <input type="radio" name="option" value="Option A" /> Option A
                              </label>
                              <label>
                                    <input type="radio" name="option" value="Option B" /> Option B
                              </label>
                              <label>
                                    <input type="radio" name="option" value="Option C" /> Option C
                              </label>
                        </form>

                        <div className="ques_btn_box flex flex_justify_between">
                              <a href="/index.html" className="ques_btn quit_btn">Quit Game</a>
                              {/* For Next Ques - TODO */}
                              {/* <a href="/ques-result/ques/ques2.html" className="ques_btn next_btn">Next Question</a> */}

                              {/* For View Results - TODO */}
                              <a href="/result" className="ques_btn next_btn">View Results</a>
                        </div>
                  </div>
            </div>
      )
}