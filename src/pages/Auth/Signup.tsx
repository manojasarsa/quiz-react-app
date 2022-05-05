import "./auth.css";

export const signup = () => {
      return (
            <div className="body">
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
        
    <div className="input_container flex flex_col">
        <form className="input_field flex flex_col">
            <h2 className="input_heading">Signup</h2>
            <label className="input_label">Email address</label>
            <input className="input_box" type="email" placeholder="manoj@neog.camp" required />
            <label className="input_label">Create Password</label>
            <input className="input_box" type="name" placeholder="***********" required />
            <div className="inp_checkbox flex flex_justify_start flex_align_center">
                <input type="checkbox" className="input_checkbox"> </input>
                <p className="checkbox_notify">I accept all Terms & Conditions</p>
            </div>
            <button className="btn btn_primary">Create New Account</button>
            <p className="input_subheading"><a href="/auth/login.html" id="input_subheading">Already have an account {'>'}</a> </p> 
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