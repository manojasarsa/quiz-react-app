import './App.css';

function App() {
  return (
    <div className="App">
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

                <a className="btn btn_primary" href="/auth/login.html">Login</a>

            </div>
        </div>
    </header>

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

                        <a href="/rules/rules.html" className="play_btn">Play Now</a>
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

                        <a href="/rules/rules.html" className="play_btn">Play Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* -- Share Quiz -- */}

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
  );
}

export default App;
