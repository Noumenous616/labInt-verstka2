import React from 'react'
import s from './NeverTooLateBlock.module.css'
import Container from "react-bootstrap/cjs/Container";
import Button from "react-bootstrap/Button";


let NeverTooLateBlock = () => {
    return (
        <div className={s.blockOneBody}>
            <Container>
                <h1>Говорят, никогда не подзно <br/>сменить профессию</h1>
                <p className={s.blockOnePText}>Сделай круто тестовое задание и у тебя получится</p>
                <Button className={s.buttonBlockOne} variant="light" style={{fontWeight: 'bold'}}>Проще простого!</Button>
            </Container>
        </div>
    )
}

export default NeverTooLateBlock;