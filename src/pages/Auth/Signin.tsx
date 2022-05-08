import { Header } from "../../components";
import { Link, useLocation } from "react-router-dom";
import "./auth.css";
import { useState } from "react";
import { useAuth } from "../../utils/authMethods";
import { locationType } from "../../types/common.types";

export const Signin = () => {

    const loginInputs = {
        email: "",
        password: ""
    }

    const [ formInputs, setFormInputs ] = useState(loginInputs);

    // TODO --
    // const [error, setError] = useState("");
    // const [errorState, setErrorState] = useState(false);

    const [showHide, setShowHide] = useState(false);

    const { email, password } = formInputs;

    const location = useLocation();

    const { from } = (location.state as locationType) || {
        from :  { pathname: "/" }
    }

    const { signInHandler } = useAuth();

    const formHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        signInHandler({ email, password }, from);
    }
    
    return (
        <div className="body">
            
            <Header />

            <div className="input_container flex flex_col" id="auth_container">
                
                <form className="input_field flex flex_col">

                    <h2 className="input_heading">Sign In</h2>

                    <label className="input_label">Email address<span className="form_label">*</span>
                        <input 
                            name="email"
                            value={email}
                            className="input_box" 
                            type="email" 
                            required={true} 
                            onChange={(e) => setFormInputs({...formInputs, email: e.target.value})}
                        />
                    </label>

                    <label className="input_label">Password<span className="form_label">*</span>
                        <input 
                            name="password"
                            value={password}
                            className="input_box" 
                            type= {showHide ? "text" : "password" }
                            required= {true} 
                            onChange={(e) => setFormInputs({...formInputs, password: e.target.value})}
                        />

                        <i className="fa-solid fa-eye show_hide_btn"
                            onClick={() => setShowHide((prev) => !prev)}>
                        </i>

                    </label>

                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <input 
                            type="checkbox" 
                            className="input_checkbox"
                        /> 
                        <p className="checkbox_notify">Remember me</p>
                    </div>

                    <button className="auth_btn" onClick={(e) => formHandler(e)} >Login</button>

                    <p className="forgot_pwd_box"><Link className="forgot_pwd" to="/forgotpwd">Forgot your Password?</Link> </p>

                    <p className="input_subheading"><Link id="input_subheading" to="/signup"> Sign Up Now</Link> </p>

                </form>
            </div>

            {/* TODO */}

            {/* {errorState && <div className="alert_error toast flex flex_justify_center flex_align_center toast_box toast_active_leading toast_position">
                <span> {error} </span>
            </div> } */}

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

