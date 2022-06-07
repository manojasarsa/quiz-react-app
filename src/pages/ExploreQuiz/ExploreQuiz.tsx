import "./explorequiz.css";
import { Header, QuizCard } from "../../components";
import { useQuiz } from "../../contexts/quizContext";
import { useParams } from "react-router-dom";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";

export const ExploreQuiz = () => {

    const { quizState: { quizzes }} = useQuiz();

    const { categoryName } = useParams();

    console.log("quizzzess:", quizzes);
    const [allQuizzes, setAllQuizzes] = useState(quizzes);

    useEffect(() => {
        let res = quizzes.slice();
        if(categoryName) {
            res = res.filter(
                (quiz: { quizCategory: string }) => quiz.quizCategory === categoryName
            )
        }
        setAllQuizzes(res);
    },[categoryName, quizzes])

    return (
        <div className="explore-quiz">
            <Header />

            <h1 className="top_heading">{categoryName?.slice().toUpperCase()}</h1>

            <div className="categories flex flex_wrap flex_justify_center flex_align_center">

                {allQuizzes.map((quiz: DocumentData) => {
                    return <QuizCard 
                        key={quiz.id}
                        id={quiz.id}
                        quizCategory={quiz.quizCategory}
                        quizImg={quiz.quizImg}
                        quizName={quiz.quizName}
                        redirectTo={`/rules/${quiz.id}`}
                    />
                })}

            </div>
        </div>
    )
}