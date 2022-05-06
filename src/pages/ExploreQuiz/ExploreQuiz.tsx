import "./explorequiz.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";

export const ExploreQuiz = () => {
      return (
            <div className="explore-quiz">
                  <Header />

                  <h1 className="top_heading">Category Name</h1>
                  <span className="top_subhead">Description...</span>

                  <div className="categories flex flex_wrap flex_justify_center flex_align_center">

                        <div className="card_image">
                              <div className="card_vertical">
                                    <div className="card_vertical_info flex flex_col">
                                          <img className="img_responsive adjust_image" src="assets/f2.png" alt="category"></img>

                                          <div className="flex_justify_center flex_align_center flex flex_col">
                                                <h2 className="card_title">Title</h2>

                                                <p className="card_subtitle">
                                                      Description of Quiz
                                                </p>

                                                <Link className="play_btn" to="/rules">Play Now</Link>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className="card_image">
                              <div className="card_vertical">
                                    <div className="card_vertical_info flex flex_col">
                                          <img className="img_responsive adjust_image" src="assets/dev3.jpg" alt="category" />

                                          <div className="flex_justify_center flex_align_center flex flex_col">
                                                <h2 className="card_title">Title</h2>

                                                <p className="card_subtitle">
                                                Description of Quiz
                                                </p>

                                                <Link className="play_btn" to="/rules">Play Now</Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}