import "./home.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";

export const Home = () => {
      return (
            <div className="body">

                  <Header/>

                  <h1 className="top_heading">Quizzically</h1>
                  <span className="top_subhead">Unlock Knowledge At The Speed Of Thought...</span>

                  <div className="categories flex flex_wrap flex_justify_center flex_align_center">

                        <div className="card_image">
                              <div className="card_vertical">
                                    <div className="card_vertical_info flex flex_col">
                                          <img className="img_responsive adjust_image" src="assets/f2.png" alt="category"></img>

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

                        <div className="card_image">
                              <div className="card_vertical">
                                    <div className="card_vertical_info flex flex_col">
                                          <img className="img_responsive adjust_image" src="assets/dev3.jpg" alt="category" />

                                          <div className="flex_justify_center flex_align_center flex flex_col">
                                                <h2 className="card_title">WEB DEVELOPMENT</h2>

                                                <p className="card_subtitle">
                                                      Take the action-packed Web Dev quiz and Get ready to play!
                                                </p>

                                                <Link className="play_btn" to="/explorequiz">Explore Quiz</Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* -- Share Quiz - TODO- */}

                  <div className="modal_box flex_justify_center flex_align_center" id="modal_box">
                        <div className="modal flex flex_col flex_justify_center flex_align_center">

                              <h3>Use the below link to share quiz :</h3>
                              <div className="timer_box">
                                    <span className="timer">https://quizzically.com/admin/quiz/60d407de2740d9bf0 <span className="timeleft"> Copy Link</span></span>
                              </div>

                              <div className="modal_btn_container">
                                    <button className="btn btn_primary modal_btn_close" id="modal_btn_close">Close</button>
                              </div>
                        </div>
                  </div>

            </div>
      )

}