import React, {Component} from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import ivan from './ReviewsBlockAccets/Ivan.png'
import artem from './ReviewsBlockAccets/Artem.png'
import mihail from './ReviewsBlockAccets/Mihail.png'
import Slider from "react-slick";
import s from './ReviewsBlock.module.css'
import arrowNext from './ReviewsBlockAccets/VectorNext.png';
import arrowPrev from './ReviewsBlockAccets/VectorPrev.png';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/Row";



export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            nextArrow: <img src={arrowNext}  alt='arrowNext'/>,
            prevArrow: <img src={arrowPrev}  alt='arrowPrev'/>,
            responsive: [
                {
                    breakpoint: 1930,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1270,
                    arrows: false,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 620,
                    arrows: false,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        };
        return (
            <div>
                <Container>
                    <Row>
                        <Slider {...settings}>
                            <div>
                                <div className={s.userReviews}>
                                    <div className={s.userReviewsImgAndName}>
                                        <img src={mihail} alt='mihail'/>
                                        <div className={s.userReviewsImgAndName_nameCity}>
                                            <h4>Константинов Михаил <br/>Павлович</h4>
                                            <p>Санкт-Петербург</p>
                                        </div>
                                    </div>
                                    <div className={s.userReviewsText}>
                                        <p>Каждый из нас понимает очевидную вещь
                                            перспективное планирование предоставляет широкие
                                            возможности для анализа существующих паттернов
                                            поведения. В своём стремлении улучшить пользовательский опыт мы</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={s.userReviews}>
                                    <div className={s.userReviewsImgAndName}>
                                        <img src={ivan} alt='ivan'/>
                                        <div className={s.userReviewsImgAndName_nameCity}>
                                            <h4>Иван Иванов</h4>
                                            <p>Санкт-Петербург</p>
                                        </div>
                                    </div>
                                    <div className={s.userReviewsText}>
                                        <p>Каждый из нас понимает очевидную вещь:
                                            перспективное планирование предоставляет
                                            широкие возможности для анализа существующих
                                            паттернов поведения. В своём стремлении улучшить
                                            пользовательский опыт мы упускаем, что активно
                                            развивающиеся страны третьего мира призваны к ответу.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={s.userReviews}>
                                    <div className={s.userReviewsImgAndName}>
                                        <img src={artem} alt='artem'/>
                                        <div className={s.userReviewsImgAndName_nameCity}>
                                            <h4>Артем Корнилов</h4>
                                            <p>Самара</p>
                                        </div>
                                    </div>
                                    <div className={s.userReviewsText}>
                                        <p>Каждый из нас понимает очевидную вещь:
                                            перспективное планирование предоставляет
                                            широкие возможности для анализа существующих
                                            паттернов поведения.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={s.userReviews}>
                                    <div className={s.userReviewsImgAndName}>
                                        <img src={mihail} alt='mihail'/>
                                        <div className={s.userReviewsImgAndName_nameCity}>
                                            <h4>Константинов Михаил <br/>Павлович</h4>
                                            <p>Санкт-Петербург</p>
                                        </div>
                                    </div>
                                    <div className={s.userReviewsText}>
                                        <p>Каждый из нас понимает очевидную вещь
                                            перспективное планирование предоставляет широкие
                                            возможности для анализа существующих паттернов
                                            поведения. В своём стремлении улучшить пользовательский опыт мы</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={s.userReviews}>
                                    <div className={s.userReviewsImgAndName}>
                                        <img src={ivan} alt='ivan'/>
                                        <div className={s.userReviewsImgAndName_nameCity}>
                                            <h4>Иван Иванов</h4>
                                            <p>Санкт-Петербург</p>
                                        </div>
                                    </div>
                                    <div className={s.userReviewsText}>
                                        <p>Каждый из нас понимает очевидную вещь:
                                            перспективное планирование предоставляет
                                            широкие возможности для анализа существующих
                                            паттернов поведения. В своём стремлении улучшить
                                            пользовательский опыт мы упускаем, что активно
                                            развивающиеся страны третьего мира призваны к ответу.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={s.userReviews}>
                                    <div className={s.userReviewsImgAndName}>
                                        <img src={artem} alt='artem'/>
                                        <div className={s.userReviewsImgAndName_nameCity}>
                                            <h4>Артем Корнилов</h4>
                                            <p>Самара</p>
                                        </div>
                                    </div>
                                    <div className={s.userReviewsText}>
                                        <p>Каждый из нас понимает очевидную вещь:
                                            перспективное планирование предоставляет
                                            широкие возможности для анализа существующих
                                            паттернов поведения.</p>
                                    </div>
                                </div>
                            </div>


                        </Slider>
                    </Row>
                </Container>
            </div>
        );
    }
}