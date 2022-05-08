import { Link } from "react-router-dom";
import { useAuth } from "../../utils/authMethods";
import "./profilemenu.css";

export const ProfileMenu = () => {

      const { signOutHandler, authState } = useAuth();
      const token = authState.userInfo.token;

      return (
            <div className="profile_box profile_menu flex_col">
                  <div className="profile_options">
                        <ul className="menu flex flex_col flex_justify_center flex_align_start">

                              <div className="flex flex_row flex_justify_around flex_align_center">
                                    {token ? <h4> Welcome Back! </h4> : <h4> New to Quizzically?  </h4>}
                              </div>

                              {!token && <Link className="menu_link" to="/signup">
                                    <li className="profile_content user_select">Sign Up</li>
                              </Link>}

                              <Link className="menu_link" to="/profile">
                                    <li className="profile_content user_select">Your Profile</li>
                              </Link>
                              <Link className="menu_link" to="/">
                                    <li className="profile_content user_select">Quiz Board</li>
                              </Link>
                              <Link className="menu_link" to="/">
                                    <li className="profile_content user_select">Create Quiz</li>
                              </Link>
                              <Link className="menu_link" to="/">
                                    <li className="profile_content modal_btn_live user_select" id="modal_btn_live"> Share Quiz </li>
                              </Link>
                              <Link className="menu_link" to="/">
                                    <li className="profile_content user_select">Play with others</li>
                              </Link>
                              <Link className="menu_link" to="/forgotpwd">
                                    <li className="profile_content user_select">Forgot Password</li>
                              </Link>

                              {token && <Link className="menu_link" to="/signout">
                                    <li onClick={signOutHandler} className="profile_content user_select">Logout</li>
                              </Link>}
                        </ul>
                  </div>
            </div>
      );
}