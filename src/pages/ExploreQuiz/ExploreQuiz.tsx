import "./explorequiz.css";
import { Header, QuizCard } from "../../components";

export const ExploreQuiz = () => {
      return (
            <div className="explore-quiz">
                  <Header />

                  <h1 className="top_heading">Category Name</h1>
                  <span className="top_subhead">Description...</span>

                  <div className="categories flex flex_wrap flex_justify_center flex_align_center">

                        <QuizCard />
                        <QuizCard />

                  </div>
            </div>
      )
}