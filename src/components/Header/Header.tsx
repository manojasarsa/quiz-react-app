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

                              {/* <a className="badge_container badge_icon">
                                    <i className="fas fa-user-circle profile"></i>
                              </a> */}

                              {/* TODO - Profile Options*/}

                              <Link className="btn btn_primary-outlined" to="/signin">
                                    Login
                              </Link>

                        </div>
                  </div>
            </header>
      )
}