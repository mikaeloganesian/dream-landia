import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import icon1 from '../../assets/images/advantagesIcons/icon1.png';
import icon2 from '../../assets/images/advantagesIcons/icon2.png';
import icon3 from '../../assets/images/advantagesIcons/icon3.png';
import icon4 from '../../assets/images/advantagesIcons/icon4.png';
import icon5 from '../../assets/images/advantagesIcons/icon5.png';
import icon6 from '../../assets/images/advantagesIcons/icon6.png';
import icon7 from '../../assets/images/advantagesIcons/icon7.png';
import icon8 from '../../assets/images/advantagesIcons/icon8.png';
import icon9 from '../../assets/images/advantagesIcons/icon9.png';
import icon10 from '../../assets/images/advantagesIcons/icon10.png';
import icon11 from '../../assets/images/advantagesIcons/icon11.png';
import icon12 from '../../assets/images/advantagesIcons/icon12.png';
import icon13 from '../../assets/images/advantagesIcons/icon13.png';
import icon14 from '../../assets/images/advantagesIcons/icon14.png';
import icon15 from '../../assets/images/advantagesIcons/icon15.png';
import icon16 from '../../assets/images/advantagesIcons/icon16.png';

function Advantage({ icon, title, description }) {
    const advantageRef = useRef(null);

    // Анимация появления элемента
    return (
        <div className="advantage" ref={advantageRef}>
            <div className="circleEffect"></div>
            <div className="advantageContent">
                <img className="advantageImg" src={icon} alt="icon1" />
                <div className="advantageTitle">{title}</div>
                <div className="advantageDescription">{description}</div>
            </div>
        </div>
    );
}

const CategorySelector = ({ selectedCategory, onCategoryClick }) => {
    const categories = ['Покупка', 'Продажа', 'Аренда', 'Управление'];
    const categoryRefs = useRef([]);


    return (
        <div className="selectCategoryBlock">
            {categories.map((category, index) => (
                <div
                    key={category}
                    ref={(el) => (categoryRefs.current[index] = el)}
                    className={`category ${selectedCategory === category ? 'selected' : 'unselected'}`}
                    onClick={() => onCategoryClick(category)}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

const PURCHASES = [
    {
        icon: icon1,
        title: "Профессиональное сопровождение",
        description: ["Полное сопровождение сделки", <br />, "от выбора до оформления"],
    },
    {
        icon: icon2,
        title: "Персональный подход",
        description: ["Найдем недвижимость вашей мечты:", <br />, "учитывая все ваши пожелания"],
    },
    {
        icon: icon3,
        title: ["Большое", <br />, "портфолио"],
        description: ["Широкий выбор проверенных", <br />, "объектов недвижимости"],
    },
    {
        icon: icon4,
        title: "Обеспечим удобную и выгодную оплату",
        description: ["Поможем совершить платеж", <br />, "с наиболее выгодным курсом обмена"],
    },
];

const SALES = [
    {
        icon: icon5,
        title: "Профессиональная оценка имущества",
        description: ["Получите объективную рыночную", <br />, "стоимость от наших экспертов"],
    },
    {
        icon: icon6,
        title: "Юридическое сопровождение",
        description: ["Обеспечим полное сопровождение,", <br />, "защищая ваши интересы"],
    },
    {
        icon: icon7,
        title: "Широкая база покупателей",
        description: ["Обеспечиваем широкий охват рынка", <br />, "гарантируя оперативную сделку"],
    },
    {
        icon: icon8,
        title: ["Большой опыт ", <br/>, "в продажах"],
        description: ["Успешные переговоры, основанные", <br />, "на глубокой экспертизе рынка"],
    },
];

const RENT = [
    {
        icon: icon9,
        title: "Персональный подбор",
        description: ["Предложим оптимальные варианты", <br />, "из нашего уникального каталога"],
    },
    {
        icon: icon10,
        title: "Гарантия безопасности",
        description: ["Юридически безупречный договор", <br />, "аренды — гарантия спокойствия"],
    },
    {
        icon: icon11,
        title: "Предоставляем лучшие цены",
        description: ["Прямые цены как минимум на 15%", <br />, "выгоднее, чем на других платформах"],
    },
    {
        icon: icon12,
        title: ["Оперативное", <br />, "решение проблем"],
        description: ["Мы оперативно реагируем на ", <br />, "запросы и решаем любые проблемы"],
    },
];

const MANAGEMENS = [
    {
        icon: icon13,
        title: "Полный цикл управления",
        description: ["Комплексное управление: от поиска", <br />, "арендаторов до уборки и ремонта"],
    },
    {
        icon: icon14,
        title: "Максимальная доходность",
        description: ["Выгоднее и удобнее, чем самостоятельное", <br />, "управление или долгосрочная аренда"],
    },
    {
        icon: icon15,
        title: "Эффективный маркетинг",
        description: ["Привлечение наибольшего числа", <br />, "потенциальных арендаторов"],
    },
    {
        icon: icon16,
        title: ["Безопасность ", <br/>, "и бухгалтерия"],
        description: ["С нами вы можете быть уверены", <br />, "в законности и защите ваших интересов"],
    },
];

function AdvantagesContent() {
    const [selectedCategory, setSelectedCategory] = useState('Покупка');
    const advantagesRef = useRef(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const ACTUAL_ADVANTAGES = (() => {
        switch (selectedCategory) {
            case 'Покупка':
                return PURCHASES;
            case 'Продажа':
                return SALES;
            case 'Аренда':
                return RENT;
            case 'Управление':
                return MANAGEMENS;
            default:
                return PURCHASES;
        }
    })();

    // Анимация появления преимуществ при изменении категории
    useEffect(() => {
        gsap.from(advantagesRef.current, {
            opacity: 0,
            y: -60,
            duration: 1,
            stagger: 0,
        });
    }, [selectedCategory]);

    return (
        <div id="AdvantagesMenuHook" className="advantagesContent">
            <div className="description">Наши преимущества</div>
            <div className="title">Почему выбирают<br />именно нас?</div>
            <div className="advantages" ref={advantagesRef}>
                {ACTUAL_ADVANTAGES.map((advantage, index) => (
                    <Advantage
                        key={index}
                        icon={advantage.icon}
                        title={advantage.title}
                        description={advantage.description}
                    />
                ))}
            </div>
            <CategorySelector selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick} />
        </div>
    );
}

export default AdvantagesContent;