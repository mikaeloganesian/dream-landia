import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './sass/style.scss';
import Block from "./components/Block";
import HeaderFixed from "./components/HeaderFixed";
import MobileMenuFixed from "./components/MobileMenuFixed";
import AllProjectsContent from "./components/ContentComponents/AllProjectsContent";
import MainBlockContent from "./components/ContentComponents/MainBlockContent";
import AdvantagesContent from "./components/ContentComponents/AdvantagesContent";
import CustomCursor from "./components/CustomCursor";
import AboutCompanyContent from "./components/ContentComponents/AboutCompanyContent";
import StatisticContent from "./components/ContentComponents/StatisticContent";
import RegionsContent from "./components/ContentComponents/RegionsContent";
import CreatorsContent from "./components/ContentComponents/CreatorsContent";
import FAQContent from "./components/ContentComponents/FAQContent";
import FooterContent from "./components/ContentComponents/FooterContent";
import CalculatorContent from "./components/ContentComponents/CalculatorContent";
import GetFeedbackContent from "./components/ContentComponents/GetFeedbackContent";
import PopUp from "./components/PopUp";

function App() {
    // Регистрируем плагин ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Находим все блоки с классом .animate-block
        const blocks = gsap.utils.toArray('.animate-block');

            blocks.forEach((block) => {
                gsap.from(block, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: block,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                });
            });
        // Анимация для каждого блока
    }, []);

    return (
        <div className={"main-container"}>
            {window.innerWidth > 1000 ? <CustomCursor /> : null}
            <div className={"center"}><PopUp /></div>
            <MainBlockContent/>
            <div className="center"><HeaderFixed /></div>
            <div className="center"><MobileMenuFixed /></div>
            <div className="animate-block"><Block children={<AllProjectsContent/>} /></div>
            <div className="animate-block"><Block children={<CalculatorContent />} /></div>
            <div className="animate-block"><AdvantagesContent /></div>
            <div className="animate-block"><Block children={<AboutCompanyContent />} /></div>
            <div className="animate-block"><Block children={<StatisticContent />} /></div>
            <div className="animate-block"><Block children={<RegionsContent />} /></div>

            <div className="animate-block"><Block children={<GetFeedbackContent />} /></div>

            <div className="animate-block"><Block children={<CreatorsContent />} /></div>
            <div className="animate-block"><Block children={<FAQContent />} /></div>
            <div className="animate-block"><FooterContent /></div>
        </div>
    );
}

export default App;