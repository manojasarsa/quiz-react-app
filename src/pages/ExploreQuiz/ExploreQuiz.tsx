import "./explorequiz.css";
import { Header, QuizCard } from "../../components";
import { useQuiz } from "../../contexts/quizContext";
import { useParams } from "react-router-dom";
import { DocumentData } from "firebase/firestore";

export const ExploreQuiz = () => {

    const { quizState: { quizzes }} = useQuiz();

    const { categoryName } = useParams();

    // console.log("quizzzess:", quizzes);

    return (
        <div className="explore-quiz">
            <Header />

            <h1 className="top_heading">{categoryName}</h1>
            <span className="top_subhead">Description...</span>

            <div className="categories flex flex_wrap flex_justify_center flex_align_center">

                <QuizCard />
                <QuizCard />

                {quizzes.map((quiz: DocumentData) => {
                    <QuizCard 
                        key={quiz.id}
                        quizCategory={quiz.quizCategory}
                        quizImg={quiz.quizImg}
                        quizName={quiz.quizName}
                })}

            </div>
        </div>
    )
}