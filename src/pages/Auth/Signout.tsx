import { Link } from "react-router-dom";
import { Header } from "../../components";
import "./auth.css";

export const Signout = () => {
    return (
        <div>
            <Header />

            <main className="logout_container flex flex_align_center flex_justify_center">
                <div className="logout_box flex flex_col flex_justify_center flex_align_center">
                    <i className="fas fa-circle-check icon fa-2x"></i>
                    <p className="logout_text">You Came, You Quizzed, You Conquered!</p>
                    <p className="logout_text">Come back soon, Champion {":)"} </p>
                    <Link className="link" to="/">BACK TO HOME</Link>
                </div>
            </main>
        </div>
    )
};