import "./home.css";
import { CategoryCard, Header } from "../../components";

export const Home = () => {
      return (
            <div className="body">

                  <Header/>

                  <h1 className="top_heading">Quizzically</h1>
                  <span className="top_subhead">Unlock Knowledge At The Speed Of Thought...</span>

                  <div className="categories flex flex_wrap flex_justify_center flex_align_center">
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                  </div>

                  {/* -- Share Quiz - TODO- */}

                  <div className="modal_box flex_justify_center flex_align_center" id="modal_box">
                        <div className="modal flex flex_col flex_justify_center flex_align_center">

                              <h3>Use the below link to share quiz :</h3>
                              <div className="timer_box">
                                    <span className="timer">https://quizzically.com/admin/quiz/60d407de2740d9bf0 <span className="timeleft"> Copy Link</span></span>
                              </div>

                              <div className="modal_btn_container">
                                    <button className="btn btn_primary modal_btn_close" id="modal_btn_close">Close</button>
                              </div>
                        </div>
                  </div>

            </div>
      )

}