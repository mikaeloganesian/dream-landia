import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import card1 from '../../assets/images/mainBlockMedia/card1-icon.png';
import card2 from '../../assets/images/mainBlockMedia/card2-icon.png';
import card3 from '../../assets/images/mainBlockMedia/card3-icon.png';
import card4 from '../../assets/images/mainBlockMedia/card4-icon.png';
import logo from '../../assets/images/others/Dream Landia - Logotype.png';
import getFeedbackIcon from '../../assets/images/others/get-feedback-icon.png';
import Button from "../Button";


// Данные для карточек
const CARDS_DATA = [
    {
        id: 1,
        icon: card1,
        title: ['Найди объект ', window.innerWidth > 1200 ? <br/> : null, 'своей мечты'],
    },
    {
        id: 2,
        icon: card2,
        title: 'Продай свою недвижимость',
    },
    {
        id: 3,
        icon: card3,
        title: 'Забронируй проживание у нас',
    },
    {
        id: 4,
        icon: card4,
        title: ['Сдай свое ', <br/> ,'жилье в аренду'],
    },
];

// Компонент для карточки
function Card({ icon, title }) {
    return (
        <div className="card">
            <div className="cardLine">
                <img src={icon} alt={title} className="icon" />
                <div className="cardTitle">{title}</div>
            </div>
            <div className="cardDot"></div>
        </div>
    );
}

Card.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

function MainBlockContent() {
    return (
        <div id="MainBlockMenuHook" className="mainBlock">
            <div className="content">
                <div className="center">
                    <Header />
                </div>
                <div className="center">
                    <div className="headerMobile">
                        <img src={logo} alt="Logo" />
                        <a href={"#GetFeedbackMenuHook"}><Button styleId={0} content={"Связаться"} icon={getFeedbackIcon}/></a>
                    </div>
                </div>
                <div className="textBlock">
                    <div className="textLine">
                        <div className="title">
                            Пхукет: недвижимость <br /> вашей мечты
                        </div>
                        <div className="description">
                            Ищете дом мечты на Пхукете? {window.innerWidth < 1200 ? <br/> : null} Инвестиционную {window.innerWidth > 1200 ? <br/> : null} недвижимость? Заполните {window.innerWidth < 1200 ? <br/> : null} короткую форму – мы сделаем {window.innerWidth > 1200 ? <br/> : null} процесс {window.innerWidth < 1200 ? <br/> : null} покупки максимально простым и приятным!
                        </div>
                    </div>
                    <div className="cards">
                        {CARDS_DATA.map((card) => (
                            <Card key={card.id} icon={card.icon} title={card.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBlockContent;