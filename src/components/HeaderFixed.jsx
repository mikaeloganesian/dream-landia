import React, {useEffect} from 'react';
import logo from '../assets/images/others/Dream Landia - Logotype Color.png';
import internetIcon from '../assets/images/others/internet-icon-fixed.png';
import getFeedbackIcon from '../assets/images/others/get-feedback-icon-fixed.png';
import Button from "./Button";
import {useNavigate} from "react-router-dom";
import {gsap} from "gsap";


function HeaderFixed() {
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect (() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 760) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    const navigate = useNavigate();

    return (
        <div className={isVisible ? "headerFixed visible" : "headerFixed"}>
            <img onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} src={logo} className="logo" alt={"Dream-Landia"}></img>
            <div className="points">
                <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="point"><a href={"#AllProjectsMenuHook"}>Недвижимость</a></div>
                <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="point"><a href={"#AdvantagesMenuHook"}>Преимущества</a></div>
                <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="point"><a href={"#AboutCompanyMenuHook"}>О нас</a></div>
                <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="point"><a href={"#RegionsMenuHook"}>Районы</a></div>
                <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="point"><a href={"#CreatorsMenuHook"}>Основатели</a></div>
            </div>
            <div className="buttons">
                <Button styleId={2} content={"English"} icon={internetIcon}/>
                <a onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} href={"#GetFeedbackMenuHook"}><Button buttonID={"menu-fixed-button"} styleId={4} content={"Оставить заявку"} icon={getFeedbackIcon}/></a>
            </div>

        </div>
    )
}

export default HeaderFixed;