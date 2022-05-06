import { Link } from "react-router-dom";
import { Header } from "../../components";
import "./auth.css";

export const Signout = () => {
      return (
            <div>   
                  <Header />

                  <main className="logout_container flex flex_align_center flex_justify_center">
                        <div className="logout_box flex flex_col flex_justify_center flex_align_center">
                              <i className="fas fa-circle-check icon fa-2x"></i>
                              <p className="logout_text">You are signed out now :(</p>
                              <p className="logout_text">Come back soon!</p>
                              <Link className="link" to="/signup">Back to Home</Link>
                        </div>
                  </main>

                  {/* <!-- Share Quiz --> */}

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