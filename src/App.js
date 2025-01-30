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

function App() {
    // Регистрируем плагин ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // Находим все блоки с классом .animate-block
        const blocks = gsap.utils.toArray('.animate-block');

        // Анимация для каждого блока
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
    }, []);

    return (
        <div className={"main-container"}>
            <CustomCursor />
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
            <FooterContent />
        </div>
    );
}

export default App;