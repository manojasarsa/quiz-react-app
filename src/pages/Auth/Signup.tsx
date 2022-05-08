import { Header } from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./auth.css";
import { getAuth } from "firebase/auth";
import { signUpHandler } from "../../utils/authMethods";

export const Signup = () => {

      const auth = getAuth();

      const [termsAndCondition, setTermsAndCondition] = useState(true);
      const [showHideOne, setShowHideOne] = useState(false);
      const [showHideTwo, setShowHideTwo] = useState(false);

      const signUpInputs = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
      }

      const [formInputs, setFormInputs] = useState(signUpInputs);

      const [error, setError] = useState("");
      const [errorState, setErrorState] = useState(false);

      const { firstName, lastName, email, password, confirmPassword } = formInputs;

      const formHandler = () => {
            // e.preventDefault();
            if (firstName && lastName && email && password && confirmPassword) {
                  if (formInputs.password === formInputs.confirmPassword) {
                        signUpHandler({ email, password, firstName, lastName });
                  }
                  else {
                        setError("Password does not match!");
                        setErrorState(true);
                        setTimeout(() => {
                              setErrorState(false);
                        }, 3000);
                  }
            } else {
                  setError("All fields are required!");
                  setErrorState(true);
                  setTimeout(() => {
                        setErrorState(false);
                  }, 3000);
            }
      }

      const toggleTermsCondition = () => termsAndCondition ? setTermsAndCondition(false) : setTermsAndCondition(true);

      return (
            <>
                  <div className="body">

                        <Header />

                        <div className="input_container flex flex_col" id="auth_container">
                              <form className="input_field flex flex_col">

                                    <h2 className="input_heading">Signup</h2>

                                    <label className="input_label">First Name<span className="form_label">*</span>
                                          <input
                                                onChange={(e) => setFormInputs({ ...formInputs, firstName: e.target.value })}
                                                name="firstName"
                                                value={firstName}
                                                className="input_box"
                                                type="text"
                                                required={true}
                                          />
                                    </label>

                                    <label className="input_label">Last Name<span className="form_label">*</span>
                                          <input
                                                onChange={(e) => setFormInputs({ ...formInputs, lastName: e.target.value })}
                                                name="lastName"
                                                value={lastName}
                                                className="input_box"
                                                type="text"
                                                required={true}
                                          />
                                    </label>

                                    <label className="input_label">Email<span className="form_label">*</span>
                                          <input
                                                onChange={(e) => setFormInputs({ ...formInputs, email: e.target.value })}
                                                name="email"
                                                value={email}
                                                className="input_box"
                                                type="email"
                                                required={true}
                                          />
                                    </label>

                                    <label className="input_label">Password<span className="form_label">*</span>
                                          <input
                                                onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
                                                name="password"
                                                value={password}
                                                className="input_box"
                                                type={showHideOne ? "text" : "password"}
                                                required={true}
                                          />

                                          <i className="fa-solid fa-eye show_hide_btn"
                                                onClick={() => setShowHideOne((prev) => !prev)}>
                                          </i>

                                    </label>

                                    <label className="input_label">Confirm Password<span className="form_label">*</span>
                                          <input
                                                onChange={(e) => setFormInputs({ ...formInputs, confirmPassword: e.target.value })}
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                className="input_box"
                                                type={showHideTwo ? "text" : "password"}
                                                required={true}
                                          />

                                          <i className="fa-solid fa-eye show_hide_btn"
                                                onClick={() => setShowHideTwo((prev) => !prev)}>
                                          </i>

                                    </label>

                                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                                          <input
                                                onClick={toggleTermsCondition}
                                                type="checkbox"
                                                className="input_checkbox"
                                                required={true}
                                          />
                                          <p className="checkbox_notify">I accept all Terms & Conditions</p>
                                    </div>

                                    <button className="auth_btn" onClick={() => formHandler()} >Sign Up</button>

                                    <p className="input_subheading"><Link id="input_subheading" to="/signin">Already have an account {">"} </Link></p>

                              </form>

                              {errorState && <div className="toast flex flex_justify_center flex_align_center toast_active_leading toast_position">
                                    <span> {error} </span>
                              </div>}
                        </div>
                  </div>
            </>
      )
}
