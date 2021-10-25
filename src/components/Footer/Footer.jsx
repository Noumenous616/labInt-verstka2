import React from "react";
import footer from './FooterAccets/Footer.png'
import s from './Footer.module.css'


let Footer = () => {
    return (
        <div className={s.footerStyle}>
            <img src={footer} alt='footer'/>
        </div>
    )
}

export default Footer;