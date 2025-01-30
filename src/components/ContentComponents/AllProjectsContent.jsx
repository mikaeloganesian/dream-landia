import React, {useEffect} from 'react';
import Button from '../Button';
import imageModeva from '../../assets/images/allProjectsMedia/projectModeva.png';
import imageTheTitleArtRhio from '../../assets/images/allProjectsMedia/projectTheTitleArtRrio.png';
import bigBlockImage from '../../assets/images/allProjectsMedia/bigBlockImage.png';

// Данные для проектов
const projects = [
    {
        id: 1,
        image: imageModeva,
        title: 'The Modeva',
        description: 'Комплекс апартаментов',
    },
    {
        id: 2,
        image: imageTheTitleArtRhio,
        title: 'The Title ArtRrio',
        description: 'Комплекс апартаментов',
    },

    {
        id: 3,
        image: imageModeva,
        title: 'SO ORIGIN',
        description: 'Комплекс апартаментов'
    },
    {
        id: 4,
        image: imageTheTitleArtRhio,
        title: 'Canvas',
        description: 'Комплекс апартаментов'
    },
    {
        id: 5,
        image: imageModeva,
        title: 'Capri Residence',
        description: 'Комплекс апартаментов',
    },
    {
        id: 6,
        image: imageTheTitleArtRhio,
        title: 'Ozon Oasis',
        description: 'Комплекс апартаментов',
    },
];
// eslint-disable-next-line react-hooks/rules-of-hooks

// Компонент для отображения блока проекта
function ProjectBlock ({className, image, title, description, setHidden }) {
    const [isHovered, setHovered] = React.useState(false);

    const handleDetailsClick = () => {
        setHidden((prev) => !prev); // Изменяем состояние isHidden
    };

    return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}  className={className || "block"}>
        <div className="blockContent">
            <img style={isHovered ? {"height": "108px"} : {"height": "276px"}} src={image} alt={title} className="image"/>
            <div className="info">
                <div className="text">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                </div>
                <div onClick={handleDetailsClick}><Button buttonID={"AllProjectsGetMoreInfoButton"} styleId={3} content="Подробнее" icon=""/></div>
            </div>
            <div className="extraInfo">
                <div style={isHovered ? {"margin-top": "20px"} : {"margin-top": "40px"}} className="line"></div>
                <div className="table">
                    <div className="tableLine">
                        <div className="title">Этажность</div>
                        <div className="value">7 этажей</div>
                    </div>
                    <div className="tableLine">
                        <div className="title">Спальни</div>
                        <div className="value">1-3 спальни</div>
                    </div>
                    <div className="tableLine">
                        <div className="title">Цена за м²</div>
                        <div className="value">от 10 000$</div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="table">
                    <div className="tableLine">
                        <div className="title">Дата сдачи</div>
                        <div className="value">2025</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};

// Компонент для отображения большого блока
const BigBlock = () => (
    <div className="block bigBlock">
        <div className="blockContent">
            <div className="leftColumn">
                <div className="title">
                    Проведем для вас <br/> персонализированный онлайн-просмотр
                </div>
                <div className="description">
                    Не выходя из дома, выберите <br/> свой идеальный дом на Пхукете
                </div>
            </div>
            <img src={bigBlockImage} alt="Big Block" className="image"/>
        </div>
    </div>
);

// Основной компонент
function AllProjectsContent() {
    const [isHidden, setHidden] = React.useState(true);
    const blockRef = React.useRef(null);
    const [blockHeight, setBlockHeight] = React.useState(424);
    const [allProjectsHeight, setAllProjectsHeight] = React.useState(0);

    // Получаем высоту блока после рендера
    React.useEffect(() => {
        if (blockRef.current) {
            setBlockHeight(blockRef.current.offsetHeight);
        }
    }, []);

    // Пересчитываем высоту всех проектов
    React.useEffect(() => {
        const allProjectsElement = document.querySelector(".allProjects");
        if (allProjectsElement) {
            setAllProjectsHeight(allProjectsElement.scrollHeight);
        }
    }, [isHidden]);

    return (
        <div id="AllProjectsMenuHook" className="allProjectsContent">
            <div className="textLine">
                <div className="title">
                    Лучшие проекты <br /> для жизни и инвестиций
                </div>
                <div className="description">
                    Новые объекты на Пхукете: идеальное сочетание комфорта и выгодных инвестиций. Широкий выбор объектов в любых районах острова
                </div>
            </div>

            <div
                style={
                    isHidden
                        ? { transition: "0.6s ease", height: blockHeight + "px", overflow: "hidden" }
                        : { transition: "0.6s ease", height: allProjectsHeight + "px", overflow: "hidden" }
                }
                className="allProjects"
            >
                {/* Отображение проектов */}
                {projects.slice(0, 2).map((project) => (
                    <ProjectBlock
                        ref={blockRef}
                        key={project.id}
                        className="block"
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        setHidden={setHidden}
                    />
                ))}

                {/* Большой блок */}
                <BigBlock />
                {projects.slice(2).map((project) => (
                    <ProjectBlock
                        key={project.id}
                        className={"block " + (isHidden ? "hidden" : "")}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        setHidden={setHidden}
                    />
                ))}
            </div>
        </div>
    );
}

export default AllProjectsContent;