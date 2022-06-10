import "./home.css";
import { CategoryCard, Header } from "../../components";
import { useQuiz } from "../../contexts/quizContext";
import { DocumentData } from "firebase/firestore";

export const Home = () => {

    const { quizState: { categories } } = useQuiz();

    return (
        <div className="body">

            <Header />

            <h1 className="top_heading">Quizzically</h1>
            <span className="top_subhead">UNLOCK KNOWLEDGE AT THE SPEED OF THOUGHT</span>

            <div className="categories flex flex_wrap flex_justify_center flex_align_center">
                {categories?.map((el: DocumentData) => (
                    <CategoryCard 
                        key={el.id}
                        id={el.id}
                        title={el.categoryTitle}
                        redirectTo={`/quizzes/${el.categoryName}`}
                        categoryImg={el.categoryImg}
                        isCategoryCard={true}
                    />
                ))
                }
            </div>
        </div>
    )
};