import React, {useState} from "react";
import SideBarButtonIMG from './headerAccets/SideBarButton.png'
import s from './Header.module.css'
import SideBar from "./SideBar";

let SideNavigation = () => {
    // функции для открытия и закрытия сайдБара по кнопке
    const [clickButton, setClickButton] = useState(false)

    let changeSideNavigation = () => {
        setClickButton(!clickButton)
        console.log(clickButton)
    }


    let sideBarNavigationChange = () => {
        if (!clickButton) {
            return <SideBarButton changeSideNavigation={changeSideNavigation}/>
        } else {
            return <SideBar closeSideNavigation={changeSideNavigation}/>
        }
    }


    return (
        <div className={s.sideBarButton}>
            {sideBarNavigationChange()}
        </div>


    )
}

export default SideNavigation;


let SideBarButton = ({changeSideNavigation}) => {
    return (

        <img style={{cursor: 'pointer'}} src={SideBarButtonIMG} alt='sideBarButton' onClick={() => {
            changeSideNavigation()
        }}/>

    )
}