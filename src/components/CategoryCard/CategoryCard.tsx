import { Link } from "react-router-dom";
import "./categorycard.css";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useEffect } from "react";

// const getCategories = async () => {

//       try{
//             const querySnapshot = await getDocs(collection(db, "categories"));

//             const categories: DocumentData | undefined = querySnapshot.docs.map((category) => {
//                   return {...category.data(), id: category.id };
//             })

//             return categories;
//       }
//       catch(err) {
//             console.error(err);
//       }
// }

type CategoryCardType = {
    id: string
    title: string
    redirectTo: string
    categoryImg?: string
    isCategoryCard?: boolean
}


// console.log("allCat => ", allCategories);

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
}