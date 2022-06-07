import { Home, ExploreQuiz, Question, Result, Rules, Signin, Signup, Signout } from "../pages";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../utils/authMethods";
import { PrivateRoutes } from "./PrivateRoutes";

export const NavRoutes = () => {

    const {
        authState: {
            userInfo: { token }
        }
    } = useAuth();

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/quizzes/:categoryName" element={<ExploreQuiz />}></Route>
            <Route path="/quizzes" element={<ExploreQuiz />}></Route>
            <Route path="/rules/:quizId" element={<Rules />} />

            {token ? (
                <>
                    <Route path="/signup" element={<Navigate replace to="/" />}></Route>
                    <Route path="/signin" element={<Navigate replace to="/" />}></Route>
                </>
            ) : (
                <>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/signin" element={<Signin />}></Route>
                </>
            )}

            <Route element={<PrivateRoutes />}>
                <Route path="/result" element={<Result />} />
                <Route path="/question" element={<Question />} />
            </Route>

            <Route path="/signout" element={<Signout />}></Route>
            <Route path="*" element={<h2> OOPS! Page Not Found</h2>}></Route>
        </Routes>
    )
};