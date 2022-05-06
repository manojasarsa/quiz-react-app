import "./profile.css";

export const Profile = () => {
      return (
            <div>
                  <header className="main_header">
                        <div className="navigation flex flex_justify_between flex_align_center" id="header_box">
                              <div className="nav_center searchbar">
                                    <input type="search" className="input input_search search" placeholder="Search for quizzes" />
                              </div>
                              <div className="nav_right flex flex_justify_between flex_align_center">

                                    <a className="badge_container badge_icon">
                                          <i className="fas fa-user-circle profile"></i>
                                    </a>

                                    {/* <div className="profile_box profile_menu flex_col">
                                          <div className="profile_options">
                                                <ul className="menu flex flex_col flex_justify_center flex_align_start">
                                                      <div className="flex flex_row flex_justify_around flex_align_center">
                                                            <h3>New to Quizzically?</h3>
                                                            <a className="btn btn_primary" href="/auth/signup.html">Sign Up</a>
                                                      </div>
                                                      <a className="menu_link" href="/"><li className="profile_content">Home</li> </a>
                                                      <a className="menu_link" href="#"><li className="profile_content">Quiz Board</li> </a>
                                                      <a className="menu_link" href="#"><li className="profile_content">Create Quiz</li> </a>
                                                      <a className="menu_link" href="#"><li className="profile_content modal_btn_live" id="modal_btn_live" >Share Quiz</li> </a>
                                                      <a className="menu_link" href="#"> <li className="profile_content">Play with others</li></a>
                                                      <a className="menu_link" href="/auth/forgotpwd.html" ><li className="profile_content">Forgot Password</li> </a>
                                                      <a className="menu_link" href="/auth/logout.html"><li className="profile_content">Logout</li> </a>
                                                </ul>
                                          </div>
                                    </div> */}

                                    <a className="btn btn_primary" href="/auth/login.html">Login</a>

                              </div>
                        </div>
                  </header>

                  <div className="profile_wrapper flex flex_row flex_justify_center flex_align_center">

                        <div className="card_image flex">
                              <div className="card_vertical">
                                    <div className="card_vertical_info flex flex_col flex_justify_start flex_wrap">
                                          <img className="img_responsive adjust_image" src="assets/pp.svg" alt="shopping-item" />
                                          <p className="card_text ">John Wills</p>
                                          <p className="card_text ">Bonus Booster</p>
                                          <p className="card_text ">Rank 22</p>
                                          <p className="card_text card_price left_space">
                                                <span className="text_line_through"></span>
                                          </p>
                                          <button className="btn btn_secondary">Edit Profile</button>
                                          <span className="pill">Lv 6</span>
                                    </div>
                              </div>
                        </div>

                        <div className="quiz_profile_details flex flex_col flex_justify_start flex_align_center">

                              <div className="card_container flex flex_row flex_align_between">
                                    <h3 className="card_title">Achievements  <span className="quiz_points">8</span></h3>
                                    <h3 className="card_title">Inventory  <span className="quiz_points">5</span></h3>
                                    <h3 className="card_title">Quiz Wins  <span className="quiz_points">25</span></h3>
                                    <h3 className="card_title">Highest Score  <span className="quiz_points">910</span></h3>
                                    <h3 className="card_title">Correct Answers  <span className="quiz_points">218</span></h3>
                              </div>

                              <div className="profile_edit flex flex_col flex_justify_center flex_align_center">

                                    <h2 className="lines">Profile Details</h2>

                                    <div className="edit_list flex flex_col flex_justify_center flex_align_start">

                                          {/* <!-- details divs --> */}
                                          <div className="profile_details flex flex_row ">
                                                <span>Full Name:</span>
                                                <span>John Wills</span>
                                          </div>

                                          <div className="profile_details flex flex_row flex_justify_between">
                                                <span>Email ID:</span>
                                                <span>johnwills@xyz.com</span>
                                          </div>
                                          <div className="profile_details flex flex_row flex_justify_between flex_align_start">
                                                <span>Gender:</span>
                                                <span>MALE</span>
                                          </div>
                                          <div className="profile_details flex flex_row flex_justify_between">
                                                <span>Address:</span>
                                                <span>36, China Town, New York</span>
                                          </div>
                                    </div>
                              </div>
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
            </div>
      )
}