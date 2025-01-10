import React from "react";
import Header from "./Header";
import card1 from "../assets/images/card1-icon.png";
import card2 from "../assets/images/card2-icon.png";
import card3 from "../assets/images/card3-icon.png";
import card4 from "../assets/images/card4-icon.png";

function MainBlock() {
    return (
        <div className="mainBlock">
            <div className="content">
                <div className="center"><Header /></div>
                <div className="textBlock">
                    <div className="textLine">
                        <div className="title">Пхукет: недвижимость <br/> вашей мечты</div>
                        <div className="description">Ищете дом  мечты на Пхукете? Инвестиционную недвижимость? Заполните короткую форму – мы сделаем процесс покупки максимально простым и приятным!</div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="cardLine">
                                <img src={card1} alt={"card1"} className="icon"/>
                                <div className="cardTitle">Найди объект своей мечты</div>
                            </div>
                            <div className="cardDot"></div>
                        </div>
                        <div className="card">
                            <div className="cardLine">
                                <img src={card2} alt={"card2"} className="icon"/>
                                <div className="cardTitle">Продай свою недвижимость</div>
                            </div>
                            <div className="cardDot"></div>
                        </div>
                        <div className="card">
                            <div className="cardLine">
                                <img src={card3} alt={"card3"} className="icon"/>
                                <div className="cardTitle">Забронируй проживание у нас</div>
                            </div>
                            <div className="cardDot"></div>
                        </div>
                        <div className="card">
                            <div className="cardLine">
                                <img src={card4} alt={"card4"} className="icon"/>
                                <div className="cardTitle">Сдай свое <br/> жилье в аренду</div>
                            </div>
                            <div className="cardDot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBlock;