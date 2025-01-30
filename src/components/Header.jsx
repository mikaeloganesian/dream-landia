import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/images/others/Dream Landia - Logotype.png';
import internetIcon from '../assets/images/others/internet-icon.png';
import getFeedbackIcon from '../assets/images/others/get-feedback-icon.png';
import Button from './Button';

function Header() {
    return (
        <div className="header">
            {/* Логотип */}
            <a href="#MainBlockMenuHook"><img src={logo} className="logo" alt="Dream Landia Logo" /></a>

            {/* Пункты меню */}
            <div className="points">
                <div className="point"><a href={"#AllProjectsMenuHook"}>Недвижимость</a></div>
                <div className="point"><a href={"#AdvantagesMenuHook"}>Преимущества</a></div>
                <div className="point"><a href={"#AboutCompanyMenuHook"}>О нас</a></div>
                <div className="point"><a href={"#RegionsMenuHook"}>Районы</a></div>
                <div className="point"><a href={"#CreatorsMenuHook"}>Основатели</a></div>
            </div>

            {/* Кнопки */}
            <div className="buttons">
                <Button buttonID={"MenuFixedEngButton"} styleId={0} content="English" icon={internetIcon}/>
                <a href={"#GetFeedbackMenuHook"}><Button buttonID={"MenuFixedGetFeedbackButton"} styleId={2} content="Оставить заявку" icon={getFeedbackIcon}/></a>
            </div>
        </div>
    );
}

export default Header;