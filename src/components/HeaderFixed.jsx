import React from 'react';
import logo from '../assets/images/Dream Landia - Logotype Color.png';
import internetIcon from '../assets/images/internet-icon-fixed.png';
import getFeedbackIcon from '../assets/images/get-feedback-icon-fixed.png';
import Button from "./Button";


function HeaderFixed() {
    return (
        <div className="headerFixed">
            <img src={logo} className="logo" alt={"Dream-Landia"}></img>
            <div className="points">
                <h1 className="point">Недвижимость</h1>
                <h1 className="point">Преимущества</h1>
                <h1 className="point">О нас</h1>
                <h1 className="point">Районы</h1>
                <h1 className="point">Основатели</h1>
            </div>
            <div className="buttons">
                <Button styleId={2} content={"English"} icon={internetIcon}/>
                <Button styleId={4} content={"Оставить заявку"} icon={getFeedbackIcon}/>
            </div>

        </div>
    )
}

export default HeaderFixed;










