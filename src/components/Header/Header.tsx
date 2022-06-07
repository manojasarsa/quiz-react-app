import "./header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/authMethods";

export const Header = () => {

    const { signOutHandler,
        authState: {
            userInfo: { token }
        }
    } = useAuth();

    return (
        <header className="main_header">
            <div className="navigation flex flex_justify_between flex_align_center" id="header_box">
                <div className="nav_left logo">
                    <Link className="header_logo" to="/">Quizzically</Link>
                    <p className="tagline">You Know, You Grow</p>
                </div>

                <div className="nav_right flex flex_justify_between flex_align_center">

                    {token ?
                        <Link className="nav_btn" to="/signout">
                            <i onClick={signOutHandler} className="fa-solid fa-right-from-bracket logout_btn"></i>
                        </Link>
                        : <Link className="login_btn" to="/signin">
                            Login
                        </Link>
                    }
                </div>
            </div>
        </header>
    )
};