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

    const [showHide, setShowHide] = useState(false);

    const { email, password } = formInputs;

    const location = useLocation();

    const { from } = (location.state as locationType) || {
        from :  { pathname: "/" }
    }

    const { signInHandler } = useAuth();

    const formSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        signInHandler({ email, password }, from);
    }
    
    const formGuestSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setFormInputs({ email: "testuser@gmail.com", password: "testuser@123" })
        signInHandler({ email, password } , from);
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

                    <button className="auth_btn login_button" onClick={(e) => formSignIn(e)} >Login</button>

                    <button className="auth_btn" onClick={(e) => formGuestSignIn(e)} >Guest Login</button>

                    <p className="input_subheading"><Link id="input_subheading" to="/signup"> Sign Up Now</Link> </p>

                </form>
            </div>
        </div>
    )
};