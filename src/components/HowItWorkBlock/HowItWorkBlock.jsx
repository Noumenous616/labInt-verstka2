import React from 'react'
import s from './HowItWorkBlock.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pictureOne from './HowItWorkBlockAccets/pictureOne.png'
import pictureTwo from './HowItWorkBlockAccets/pictureTwo.png'
import pictureThree from './HowItWorkBlockAccets/pictureThree.png'
import pictureFour from './HowItWorkBlockAccets/pictureFour.png'

let HowItWorkBlock = () => {
    return (
        <div className={s.blockHowItWork}>
            <Container>
                <Row>
                    <Col>
                        <h2>Как это работает</h2>
                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col xxl={3} md={6} sm={12}>
                            <div className={s.featuresBlock}>
                                <div className={s.featuresImg}>
                                    <img src={pictureOne} width="35" height="35" alt="arrow"/>
                                </div>
                                <h4>Прочитай задание внимательно</h4>
                                <p>Думаю это не займет у тебя больше <br/>двух трех минут</p>
                            </div>
                        </Col>
                        <Col xxl={3} md={6} sm={12}>
                            <div className={s.featuresBlock}>
                                <div className={s.featuresImg}>
                                    <img src={pictureTwo} width="35" height="35" alt="car"/>
                                </div>
                                <h4>Изучи весь макет заранее</h4>
                                <p>Подумай как это будет работать на<br/> разных разрешениях и при скролле</p>
                            </div>
                        </Col>
                        <Col xxl={3} md={6} sm={12}>
                            <div className={s.featuresBlock}>
                                <div className={s.featuresImg}>
                                    <img src={pictureThree} width="35" height="35" alt="page"/>
                                </div>
                                <h4>Сделай хорошо</h4>
                                <p>Чтобы мы могли тебе доверить<br/> подобные задачи в будущем</p>
                            </div>
                        </Col>
                        <Col xxl={3} md={6} sm={12}>
                            <div className={s.featuresBlock}>
                                <div className={s.featuresImg}>
                                    <img src={pictureFour} width="35" height="35" alt="bag"/>
                                </div>
                                <h4>Получи предложение</h4>
                                <p>Ну тут все просто, не я придумал<br/> правила, но думаю так и будет)))</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default HowItWorkBlock;