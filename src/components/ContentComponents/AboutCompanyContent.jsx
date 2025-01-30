import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

// Данные для блоков с цифрами
const statsData = [
    { value: '50+', metaData: ' сделок', description: 'закрыли за год работы' },
    { value: '400+', metaData: ' объектов', description: 'недвижимости для покупки и аренды' },
    { value: '14', metaData: ' лет', description: 'опыта работы на рынке' },
    { value: '70%', metaData: ' клиентов', description: 'возвращаются к нам для повторных сделок' },
];

AboutCompanyContent.defaultProps = {
    title: ["Дома, в которых хочется жить. Компания, в которой хочется работать"],
    description: 'О компании',
    buttonText: 'Подробнее',
};

function AboutCompanyContent({ title, description, buttonText }) {
    return (
        <div id="AboutCompanyMenuHook" className="aboutCompanyContent">
            <div className="leftContainer">
                <div className="description">{description || AboutCompanyContent.defaultProps.description}</div>
                <div className="buttonContainer">
                    <Button buttonID={"AboutCompanyGetMoreButton"} styleId={4} content={buttonText || AboutCompanyContent.defaultProps.buttonText} />
                </div>
            </div>
            <div className={"rightContainer"}>
                <div className="title">{AboutCompanyContent.defaultProps.title}</div>
                <div className="container">
                    {statsData.map((stat, index) => (
                        <div key={index} className="point">
                            <div className="value">
                                {stat.value}
                                <span className="metaData">{stat.metaData}</span>
                            </div>
                            <div className="line"></div>
                            <div className="value-description">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default AboutCompanyContent;