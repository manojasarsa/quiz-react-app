import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";

export const Header = () => {

      const [menu, setMenu] = useState(false);

      const menuHandler = () => menu ? setMenu(false) : setMenu(true);

      console.log(menu)

      return (
            <header className="main_header">
                  <div className="navigation flex flex_justify_between flex_align_center" id="header_box">

                        <div className="nav_left logo">
                              <Link className="header_logo" to="/">Quizzically</Link>
                              <p className="tagline">It's Your Turn</p>
                        </div>

                        <div className="nav_center searchbar">
                              <input type="search" className="input input_search search" placeholder="Search for quizzes" />
                        </div>

                        <div className="nav_right flex flex_justify_between flex_align_center">

                              <Link className="badge_container badge_icon" to="#">
                                    <i onClick={menuHandler} className="fas fa-user-circle profile"></i>
                              </Link> 

                              {/* TODO - Profile Menu*/}

                              {menu && <ProfileMenu />   }

                              <Link className="btn btn_primary-outlined" to="/signin">
                                    Login
                              </Link>

                        </div>
                  </div>
            </header>
      )
}