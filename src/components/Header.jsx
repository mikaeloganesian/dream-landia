import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/images/others/Dream Landia - Logotype.png';
import internetIcon from '../assets/images/others/internet-icon.png';
import getFeedbackIcon from '../assets/images/others/get-feedback-icon.png';
import Button from './Button';
import {useNavigate} from "react-router-dom";
import {gsap} from "gsap";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            {/* Логотип */}
            <img onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} src={logo} className="logo" alt="Dream Landia Logo" />

            {/* Пункты меню */}
            <div className="points">
                <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="point"><a href={"#AllProjectsMenuHook"}>Недвижимость</a></div>
                <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="point"><a href={"#AdvantagesMenuHook"}>Преимущества</a></div>
                <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="point"><a href={"#AboutCompanyMenuHook"}>О нас</a></div>
                <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="point"><a href={"#RegionsMenuHook"}>Районы</a></div>
                <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="point"><a href={"#CreatorsMenuHook"}>Основатели</a></div>
            </div>

            {/* Кнопки */}
            <div className="buttons">
                <Button buttonID={"MenuFixedEngButton"} styleId={0} content="English" icon={internetIcon}/>
                <a onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} href={"#GetFeedbackMenuHook"}><Button buttonID={"MenuFixedGetFeedbackButton"} styleId={2} content="Оставить заявку" icon={getFeedbackIcon}/></a>
            </div>
        </div>
    );
}

export default Header;