import React from "react";
import s from './ReviewsBlock.module.css'
import SimpleSlider from "./SimpleSlider";


let ReviewsBlock = () => {
    return (
        <div className={s.ReviewsBlock}>
            <div className={s.ReviewsBlockTitle}>
                <h2>Отзывы</h2>
            </div>
            <div className={s.reviewsSlider}>
                <SimpleSlider/>
            </div>

        </div>
    )
}

export default ReviewsBlock;