import { Home, ExploreQuiz, Profile, Question, Result, Rules, Signin, Signup } from "../pages";
import { Routes, Route } from "react-router-dom";

export const NavRoutes = () => {
      return (
            <Routes>
                  <Route path="/" element = { <Home/> }></Route>
                  <Route path="/explorequiz" element = { <ExploreQuiz/> }></Route>
                  <Route path="/profile" element = { <Profile/> }></Route>
                  <Route path="/rules" element = { <Rules/> }></Route>
                  <Route path="/result" element = { <Result/> }></Route>
                  <Route path="/signin" element = { <Signin/> }></Route>
                  <Route path="/signup" element = { <Signup/> }></Route>
                  <Route path="/question" element = { <Question/> }></Route>
                  <Route path="*" element = { <p> OOPS! Page Not Found</p>}></Route>
            </Routes>
      )
}