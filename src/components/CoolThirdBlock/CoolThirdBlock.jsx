import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ManAndPhone from './CoolThirdBlockAccets/ManAndPhone.png'
import s from './CoolThirdBlock.module.css'

let CoolThirdBlock = () => {
    return (
        <div className={s.CoolThirdBlockBody}>
            <Container>
                <Row>
                    <Col className={s.ThirdBlockText}>
                        <h4>Круто, ты дошел до третьего блока</h4>
                        <p>63% опрошенных пользовались кредитами
                            из-за того, что не могли покрыть непредвиденные
                            расходы свыше 15 000 ₽.</p>

                            <p>Доступ к
                            заработанным деньгам помогает отказаться
                            от кредитов и экономить деньги
                            на процентах и штрафах.</p>
                    </Col>
                    <Col className={s.ThirdBlockImg}>
                        <img src={ManAndPhone} width="592" height="448" alt="man"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CoolThirdBlock;