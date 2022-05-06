import { Link } from "react-router-dom";
import { Header } from "../../components";
import "./auth.css";

export const ForgotPwd = () => {
      return (
            <div className="body">
                  <Header />

                  <div className="input_container flex flex_col">
                        <form className="input_field flex flex_col">
                              <h2 className="input_heading">Trouble login in?</h2>
                              <label id="input_subheading">Enter your email and we'll send you a link to get back into your account.</label>
                              <input className="input_box" type="email" placeholder="manoj@gmail.com" required />
                     
                        <button className="btn btn_primary">Send Login Link</button>
                        <p className="input_subheading">OR</p>
                        <p className="input_subheading">
                              <Link id="input_subheading" to="/signup">Create New Account {'>'} </Link>
                              {/* <a href="/auth/signup.html" id="input_subheading">Create New Account {'>'} </a> */}
                        </p>
                        </form>
                  </div>

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