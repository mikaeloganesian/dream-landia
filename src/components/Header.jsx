import React from 'react';
import logo from '../assets/images/Dream Landia - Logotype.png';
import internetIcon from '../assets/images/internet-icon.png';
import getFeedbackIcon from '../assets/images/get-feedback-icon.png';
import Button from "./Button";


function Header() {
    return (
        <div className="header">
            <img src={logo} className="logo" alt={"Dream-Landia"}></img>
            <div className="points">
                <h1 className="point">Недвижимость</h1>
                <h1 className="point">Преимущества</h1>
                <h1 className="point">О нас</h1>
                <h1 className="point">Районы</h1>
                <h1 className="point">Основатели</h1>
            </div>
            <div className="buttons">
                <Button styleId={0} content={"English"} icon={internetIcon}/>
                <Button styleId={2} content={"Оставить заявку"} icon={getFeedbackIcon}/>
            </div>

        </div>
    )
}

export default Header;










