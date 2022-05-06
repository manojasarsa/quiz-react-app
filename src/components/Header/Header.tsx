import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
      return (
            <header className="main_header">
                  <div className="navigation flex flex_justify_between flex_align_center" id="header_box">
                        <div className="nav_center searchbar">
                              <input type="search" className="input input_search search" placeholder="Search for quizzes" />
                        </div>
                        <div className="nav_right flex flex_justify_between flex_align_center">

                              <a className="badge_container badge_icon">
                                    <i className="fas fa-user-circle profile"></i>
                              </a>

                              {/* TODO */}

                              {/* <div className="profile_box profile_menu flex_col">
                                    <div className="profile_options">
                                          <ul className="menu flex flex_col flex_justify_center flex_align_start">
                                          <div className="flex flex_row flex_justify_around flex_align_center">
                                                <h3>New to Quizzically?</h3>
                                                <a className="btn btn_primary" href="/auth/signup.html">Sign Up</a>
                                          </div>
                                          <a className="menu_link" href="/user-profile/user-profile.html" ><li className="profile_content">Your Profile</li> </a>
                                          <a className="menu_link" href="#"><li className="profile_content">Quiz Board</li> </a>
                                          <a className="menu_link" href="#"><li className="profile_content">Create Quiz</li> </a>
                                          <a className="menu_link" href="#"><li className="profile_content modal_btn_live" id="modal_btn_live" >Share Quiz</li> </a>
                                          <a className="menu_link" href="#"> <li className="profile_content">Play with others</li></a>
                                          <a className="menu_link" href="/auth/forgotpwd.html" ><li className="profile_content">Forgot Password</li> </a>
                                          <a className="menu_link" href="/auth/logout.html"><li className="profile_content">Logout</li> </a>
                                          </ul>
                                    </div>
                              </div> */}

                              <Link className="btn btn_primary" to="/signin">
                                    Login
                              </Link>

                        </div>
                  </div>
            </header>
      )
}