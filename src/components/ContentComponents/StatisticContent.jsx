import React, { useRef, useEffect } from 'react';
import dreamLandiaLogo from "../../assets/images/statisticMedia/dreamlandiaLogo.png";
import img1 from "../../assets/images/statisticMedia/img1.png";
import img2 from "../../assets/images/statisticMedia/img2.png";
import img3 from "../../assets/images/statisticMedia/img3.png";
import Button from "../Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, CustomEase);

// Создаем кастомную ease-функцию
CustomEase.create("fastStartSlowEnd", "M0,0 C0.0001,0.9999 0.0002,0.9999 1,1");

function StatisticBlock({ id, title, icon, value, isActive, blockRef, valueRef }) {
    return (
        <div ref={blockRef} id={id} className={`statisticBlock ${isActive ? 'active' : ''}`}>
            <div className="blockContent">
                <div className={`dot ${isActive ? 'active' : ''}`}></div>
                <div className="blockTitle">{title}</div>
                <div className="blockDescription">
                    <img className="blockIcon" src={icon} alt={title} />
                    <div className="yearValue">Годовой доход</div>
                    <div ref={valueRef} className="value">0 ₽</div> {/* Начальное значение */}
                </div>
            </div>
        </div>
    );
}

function StatisticContent() {
    const statisticsData = [
        {
            id: "DreamLandiaBlock",
            title: ["Поддержка от", <br />, "Dream Landia"],
            icon: dreamLandiaLogo,
            value: 3010663, // Числовое значение
            isActive: true,
        },
        {
            id: "firstVar",
            title: "Самостоятельная краткосрочная аренда",
            icon: img1,
            value: 2619668,
        },
        {
            id: "secondVar",
            title: ["Долгосрочная", <br />, "аренда"],
            icon: img2,
            value: 2340839,
        },
        {
            id: "thirdVar",
            title: "Простой недвижимости",
            icon: img3,
            value: -270023,
        },
    ];

    const mobileStatisticsData = [
        {
            value: 2340839,
        },
        {
            value: 2619668,
        },
        {
            value: 3010663,
        }
    ]

    // Создаем ref для каждого блока и значения
    const firstSector = useRef(null);
    const secondSector = useRef(null);
    const thirdSector = useRef(null);
    const fourthSector = useRef(null);
    const sectors = [firstSector, secondSector, thirdSector, fourthSector];

    const firstValue = useRef(null);
    const secondValue = useRef(null);
    const thirdValue = useRef(null);
    const fourthValue = useRef(null);
    const mobileFirstValue = useRef(null);
    const mobileSecondValue = useRef(null);
    const mobileThirdValue = useRef(null);
    const valueRefs = [firstValue, secondValue, thirdValue, fourthValue];

    const mobileRefs = [mobileFirstValue, mobileSecondValue, mobileThirdValue];

    // Настраиваем анимацию с ScrollTrigger
    useEffect(() => {
        sectors.forEach((sector, index) => {
            if (sector.current && valueRefs[index].current) {
                // Анимация высоты блока
                gsap.from(sector.current, {
                    height: "100px", // Начальная высота
                    duration: 3,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sector.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                });

                // Анимация накручивания значения
                gsap.to(valueRefs[index].current, {
                    innerText: statisticsData[index].value, // Конечное значение
                    duration: 4,
                    ease: "fastStartSlowEnd", // Используем кастомную ease-функцию
                    snap: { innerText: 1 }, // Округляет значение до целого числа
                    scrollTrigger: {
                        trigger: sector.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                    onUpdate: function () {
                        // Форматируем число с пробелами и добавляем символ ₽
                        const formattedValue = Number(valueRefs[index].current.innerText).toLocaleString('ru-RU');
                        valueRefs[index].current.innerText = formattedValue + " ₽";
                    },
                });
            }
        });
        gsap.from(["#graph1","#graph2", "#graph3"], {
            height: 10, // Начальное значение (анимируется до текущего значения в CSS)
            duration: 3,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".statistic-mobile-graph",
                start: "top 95%",
                toggleActions: "play none none none",
            },
        });

        mobileRefs.forEach((el, index) => {
            gsap.to(el.current, {
                innerText: mobileStatisticsData[index].value, // Конечное значение
                duration: 4,
                stagger: 0.3,
                ease: "fastStartSlowEnd", // Используем кастомную ease-функцию
                snap: { innerText: 1 }, // Округляет значение до целого числа
                scrollTrigger: {
                    trigger: ".statistic-mobile-graph",
                    start: "top 95%",
                    toggleActions: "play none none none",
                },
                onUpdate: function () {
                    // Форматируем число с пробелами и добавляем символ ₽
                    const formattedValue = Number(mobileRefs[index].current.innerText).toLocaleString('ru-RU');
                    mobileRefs[index].current.innerText = formattedValue + " ₽";
                },
            });
        })

    }, []); // Пустой массив зависимостей, чтобы анимация настроилась только один раз



    return (
        <div className="statisticContent">
            <div className="leftContainer">
                <div className="title">Начните бизнес<br />по аренде с нами</div>
                <div className="description">
                    Инвестируйте в недвижимость и<br />
                    наслаждайтесь пассивным доходом.<br />
                    Управление – наша работа
                </div>
            </div>
            <div className={"statistic-mobile-container"}>
                <div className={"statistic-mobile-column"}>
                    <div ref={mobileFirstValue} className={"statistic-mobile-value"}>0 ₽</div>
                    <div id={"graph1"} className={"statistic-mobile-graph"}>
                        <div className={"statistic-mobile-fill"}></div>
                    </div>
                </div>
                <div className={"statistic-mobile-column"}>
                    <div ref={mobileSecondValue} className={"statistic-mobile-value"}>0 ₽</div>
                    <div id={"graph2"} className={"statistic-mobile-graph"}>
                        <div className={"statistic-mobile-fill"}></div>
                    </div>
                </div>
                <div className={"statistic-mobile-column"}>
                    <div ref={mobileThirdValue} className={"statistic-mobile-value"}>0 ₽</div>
                    <div id={"graph3"} className={"statistic-mobile-graph"}>
                        <div id={"dream-landia-graph"} className={"statistic-mobile-fill"}></div>
                    </div>
                </div>
                <div className={"statistic-mobile-line"}></div>
                <div className={"statistic-mobile-title"}>Долгосрочная<br/>сдача в аренду</div>
                <div className={"statistic-mobile-title"}>Краткосрочная<br/>сдача в аренду</div>
                <div className={"statistic-mobile-title"}>Поддержка от<br/>Dream Landia</div>
                <div id={"statistic-mobile-line"} className={"line"}></div>
                <div className={"statistic-mobile-button"}>Рассчитать доход</div>
            </div>
            <div className={"statistic-mobile-description"}>
                * Средний годовой чистый доход для<br/>виллы с 3 спальнями в Раваи
            </div>
            <div className="rightContainer">
                <div className="statisticButtons">
                    <div className="statisticText">* Средний годовой чистый доход<br />для виллы с 3 спальнями в Раваи
                    </div>
                    <a href={"#CalculatorMenuHook"}><Button buttonID={"StatisticContentButton"} styleId={3} content={"Рассчитать доход"} /></a>
                </div>
                {statisticsData.map((stat, index) => (
                    <StatisticBlock
                        key={stat.id}
                        id={stat.id}
                        title={stat.title}
                        icon={stat.icon}
                        value={stat.value}
                        isActive={stat.isActive}
                        blockRef={sectors[index]}
                        valueRef={valueRefs[index]} // Передаем ref для значения
                    />
                ))}
            </div>
        </div>
    );
}

export default StatisticContent;