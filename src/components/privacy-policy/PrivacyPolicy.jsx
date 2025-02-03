import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../sass/style.scss';

import HeaderFixed from "../HeaderFixed";
import MobileMenuFixed from "../MobileMenuFixed";
import CustomCursor from "../CustomCursor";



import Header from "../Header";
import FooterContent from "../ContentComponents/FooterContent";

import Block from "../Block";
import logo from "../../assets/images/others/Dream Landia - Logotype.png";
import Button from "../Button";
import getFeedbackIcon from "../../assets/images/others/get-feedback-icon.png";

function PrivacyBanner() {
    return (
        <div className={"PrivacyBanner blockMargin"}>
            <div className={"content"}>
                <div className="center">
                    <Header/>
                </div>
                <div className="center">
                    <div className="headerMobile">
                        <img src={logo} alt="Logo"/>
                        <a href={"#GetFeedbackMenuHook"}><Button styleId={0} content={"Связаться"}
                                                                 icon={getFeedbackIcon}/></a>
                    </div>
                </div>
                <div className={"privacy-banner-content"}>
                    <div className={"privacy-banner-left"}>
                        <div className={"privacy-banner-subtitle"}>
                            Правовые соглашения
                        </div>
                        <div className={"privacy-banner-title"}>
                            {window.innerWidth < 1000 ? ["Наша политика", <br/>, 'обработки данных'] : ['Политика обработки', <br/>, 'персональных данных'] }
                        </div>
                    </div>
                    <div className={"privacy-banner-right"}><span className={"privacy-policy-span"}>Действует с</span> <span className={"privacy-policy-span"}>1 февраля 2025 года</span></div>
                </div>
            </div>
        </div>
    )
}

function PrivacyBlock(props) {
    return (
        <div className="PrivacyBlock">
            <div className={"privacy-data"}>
                <div className={"privacy-number"}>{props.number}</div>
                <div className={"privacy-title"}>{props.title}</div>
            </div>

            <div className={"privacy-text"}>
                {props.text}
            </div>
        </div>
    )
}


function PrivacyPolicy() {
    // Регистрируем плагин ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        window.scrollTo(0, 0);
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
            {window.innerWidth > 1000 ? <CustomCursor /> : null}
            <div className="center"><MobileMenuFixed /></div>
            <PrivacyBanner />
            <div className={"center"}><HeaderFixed /></div>
            <Block children={<PrivacyBlock number={"01"} title={"Общие положения"} text={"Настоящим я, далее – «Субъект Персональных Данных», во исполнение требований Федерального закона от 27.07.2006 г. № 152-ФЗ «О персональных данных» (с изменениями и дополнениями) свободно, своей волей и в своем интересе даю свое согласие Обществу с ограниченной ответственностью «Dream Landia» (далее – Оператор), являющемуся владельцем интернет-сайта «https://dream-landia.com» далее – «Сайт», на обработку своих персональных данных, указанных путем заполнения веб-формы на Сайте, заполненной с использованием Сайта."}/>}></Block>
            <Block children={<PrivacyBlock number={"02"} title={["Определение", <br/>, "персональных данных"]} text={"Под персональными данными я понимаю любую информацию, относящуюся ко мне как к Субъекту Персональных Данных и позволяющую меня идентифицировать, в том числе мои имя, номер телефона, адрес электронной почты. Под обработкой персональных данных я понимаю сбор, систематизацию, накопление, уточнение, обновление, изменение, использование, распространение, передачу, в том числе трансграничную, обезличивание, блокирование, уничтожение, хранение и любые другие действия (операции) с персональными данными."}/>}></Block>
            <Block children={<PrivacyBlock number={"03"} title={"Цели обработки"} text={"Обработка персональных данных Субъекта Персональных Данных осуществляется в целях регистрации Субъекта Персональных Данных на Сайте, идентификации, получения обратной связи от Оператора в отношении работы Сайта с последующим направлением Субъекту Персональных Данных почтовых и смс-уведомлений."}/>}></Block>
            <Block children={<PrivacyBlock number={"04"} title={"Дата согласия"} text={"Датой выдачи согласия на обработку персональных данных Субъекта Персональных Данных является дата отправки веб-формы с Сайта. Обработка персональных данных Субъекта Персональных Данных может осуществляться с помощью средств автоматизации и/или без использования средств автоматизации, в соответствии с действующим законодательством РФ и Политикой конфиденциальности Сайта."}/>}></Block>
            <Block children={<PrivacyBlock number={"05"} title={"Защита данных"} text={["Сайт принимает необходимые правовые, организационные и технические меры или обеспечивает их принятие для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных, а также принимает на себя обязательство сохранения конфиденциальности персональных данных Субъекта Персональных Данных.", <br/>,<br/>, "Сайт вправе привлекать для обработки персональных данных Субъекта Персональных Данных субподрядчиков, а также вправе передавать персональные данные для обработки своим аффилированным лицам на основании поручения на обработку, обеспечивая при этом принятие такими субподрядчиками и аффилированными лицами соответствующих обязательств в части конфиденциальности персональных данных."]}/>}></Block>
            <Block children={<PrivacyBlock number={"06"} title={"Срок согласия"} text={"Я ознакомлен(а), что: настоящее согласие на обработку моих персональных данных, указанных на Сайте, направляемых (заполненных) с использованием Cайта, действует в течение 20 (двадцати) лет с момента регистрации на Cайте. Согласие может быть отозвано мною на основании письменного заявления в произвольной форме, направленного/доставленного по почтовому адресу Оператора: 634034, г. Томск ул. Нахимова, 8/2, либо на адрес эл. почты support@dream-landia.com"}/>}></Block>
            <FooterContent />
        </div>
    );
}

export default PrivacyPolicy;