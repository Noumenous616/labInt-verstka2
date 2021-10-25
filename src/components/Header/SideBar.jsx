import React from "react";
import s from './SideBar.module.css'
import testLab from './headerAccets/testLabBlack.png'
import circle from './headerAccets/Ellipse12.png'
import Vector from './headerAccets/Vector.png'
import closeImg from './headerAccets/krest.png'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const SideBar = ({closeSideNavigation}) => {
    return (
        <Container style={{padding: '10px'}} className={s.sideBarBody}>
            <Row>
                <Col>
                    <div className={s.sideBarHeaderContent}>

                        <img src={circle} style={{marginTop: '23px', marginLeft: '5px'}}/>


                        <img src={testLab} style={{marginRight: '150px', marginLeft: '15px', marginTop: '20px'}}/>


                        <img src={closeImg} width='20px' height='20px' onClick={() => {
                            closeSideNavigation()
                        }}
                             style={{marginRight: '10px', marginTop: '20px', cursor: 'pointer'}}/>
                    </div>
                </Col>
            </Row>
            <div>
                <Row>
                    <Col>
                        <div className={s.sideBarContent}>
                            <a href='#'>Как это работает
                                <img style={{marginLeft: '150px'}} src={Vector}/></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={s.sideBarContent}>
                            <a href='#'>3-й блок
                                <img style={{marginLeft: '217px'}} src={Vector}/></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={s.sideBarContent}>
                            <a href='#'>Вопросы и ответы
                                <img style={{marginLeft: '137px'}} src={Vector}/></a>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={s.sideBarContent}>
                            <a href='#'>Форма
                                <img style={{marginLeft: '229px'}} src={Vector}/></a>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default SideBar;