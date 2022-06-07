import { Link } from "react-router-dom";
import "./categorycard.css";

type CategoryCardType = {
    id: string
    title: string
    redirectTo: string
    categoryImg?: string
    isCategoryCard?: boolean
}

export const CategoryCard = ({ title, redirectTo, categoryImg, isCategoryCard }: CategoryCardType) => {

    return (
        <div className="card_image">
            <div className="card_vertical">
                <div className="card_vertical_info flex flex_col">
                    <img className="img_responsive adjust_image" src={categoryImg} alt={title} ></img>

                    <div className="flex_justify_center flex_align_center flex flex_col">
                        <h2 className="card_title">{title}</h2>

                        <p className="card_subtitle">
                            Take action-packed quiz and Get ready to play!
                        </p>

                        <Link className="play_btn" to={redirectTo}>Explore Quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};