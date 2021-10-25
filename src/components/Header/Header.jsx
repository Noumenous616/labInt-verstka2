import React, {useEffect, useState, useCallback} from "react";
import Col from "react-bootstrap/Col";
import s from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Ellipse from "./headerAccets/Ellipse12.png";
import testLab from "./headerAccets/testLab.png";
import SideNavigation from "./SideBarButton";


function Header() {
    // функции для определения динамического изменения ширины экрана
    const [width, setWidth] = useState(window.innerWidth);
    console.log(width)


    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });


    const updateWidth = useCallback(
        () => {
            setWidth(window.innerWidth)
        },
        [window.innerWidth],
    );

    let changeSideBar = () => {
        if (width < 1920) {
            return <SideNavigation/>
        } else {
            return <HeaderNavigation/>
        }
    }


    return (
        <Container className={s.headerBody}>
            <Row>
                <Col xs={{order: 3}}>
                    <img src={Ellipse} alt='Ellipse'/>
                    <img className={s.testLab} src={testLab} alt='testLab'/>
                </Col>
                <Col xs={{order: 5}}>
                    {changeSideBar()}
                </Col>

            </Row>
        </Container>
    );
}

export default Header;

let HeaderNavigation = () => {
    return (

        <div className={s.headerText}>
            <a href='#'>Как это работает</a>
            <a href='#'>3-й блок</a>
            <a href='#'>Вопросы и ответы</a>
            <a href='#'>Форма</a>
        </div>


    )

}