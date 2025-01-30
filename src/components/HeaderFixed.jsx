import React, {useEffect} from 'react';
import logo from '../assets/images/others/Dream Landia - Logotype Color.png';
import internetIcon from '../assets/images/others/internet-icon-fixed.png';
import getFeedbackIcon from '../assets/images/others/get-feedback-icon-fixed.png';
import Button from "./Button";


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

    return (
        <div className={isVisible ? "headerFixed visible" : "headerFixed"}>
            <a href="#MainBlockMenuHook"><img src={logo} className="logo" alt={"Dream-Landia"}></img></a>
            <div className="points">
                <div className="point"><a href={"#AllProjectsMenuHook"}>Недвижимость</a></div>
                <div className="point"><a href={"#AdvantagesMenuHook"}>Преимущества</a></div>
                <div className="point"><a href={"#AboutCompanyMenuHook"}>О нас</a></div>
                <div className="point"><a href={"#RegionsMenuHook"}>Районы</a></div>
                <div className="point"><a href={"#CreatorsMenuHook"}>Основатели</a></div>
            </div>
            <div className="buttons">
                <Button styleId={2} content={"English"} icon={internetIcon}/>
                <a href={"#GetFeedbackMenuHook"}><Button styleId={4} content={"Оставить заявку"} icon={getFeedbackIcon}/></a>
            </div>

        </div>
    )
}

export default HeaderFixed;