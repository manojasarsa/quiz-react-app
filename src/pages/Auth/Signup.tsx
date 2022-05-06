import { Header } from "../../components";
import { Link } from "react-router-dom";
import "./auth.css";

export const Signup = () => {
      return (
            <>
                  <div className="body">

                        <Header />

                        <div className="input_container flex flex_col">
                              <form className="input_field flex flex_col">
                                    <h2 className="input_heading">Signup</h2>
                                    <label className="input_label">Email address</label>
                                    <input className="input_box" type="email" placeholder="manoj@neog.camp" required />
                                    <label className="input_label">Create Password</label>
                                    <input className="input_box" type="name" placeholder="***********" required />
                                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                                          <input type="checkbox" className="input_checkbox" />
                                          <p className="checkbox_notify">I accept all Terms & Conditions</p>
                                    </div>
                                    <button className="btn btn_primary">Create New Account</button>
                                    <p className="input_subheading">
                                          <Link to="/signin" id="input_subheading">Already have an account {'>'}</Link>
                                    </p>
                        </form>
                        </div>
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
            </>
      )
}