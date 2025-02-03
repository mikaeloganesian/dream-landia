import React, {useEffect} from "react";
import { gsap } from "gsap";

import stage_one_img1 from "../../assets/images/GetFeedbackMedia/stage_one_images/stage_one_img1.png";
import stage_one_img2 from "../../assets/images/GetFeedbackMedia/stage_one_images/stage_one_img2.png";
import stage_one_img3 from "../../assets/images/GetFeedbackMedia/stage_one_images/stage_one_img3.png";
import stage_one_img4 from "../../assets/images/GetFeedbackMedia/stage_one_images/stage_one_img4.png";


import stage_two_icon1 from "../../assets/images/GetFeedbackMedia/stage_two_icons/stage_two_icon1.png";
import stage_two_icon2 from "../../assets/images/GetFeedbackMedia/stage_two_icons/stage_two_icon2.png";
import stage_two_icon3 from "../../assets/images/GetFeedbackMedia/stage_two_icons/stage_two_icon3.png";
import stage_two_icon4 from "../../assets/images/GetFeedbackMedia/stage_two_icons/stage_two_icon4.png";

import stage_three_icon1 from "../../assets/images/GetFeedbackMedia/stage_three_icons/stage_three_icon1.png";
import stage_three_icon2 from "../../assets/images/GetFeedbackMedia/stage_three_icons/stage_three_icon2.png";
import stage_three_icon3 from "../../assets/images/GetFeedbackMedia/stage_three_icons/stage_three_icon3.png";
import stage_three_icon4 from "../../assets/images/GetFeedbackMedia/stage_three_icons/stage_three_icon4.png";

import stage_four_icon1 from "../../assets/images/GetFeedbackMedia/stage_four_icons/stage_four_icon1.png";
import stage_four_icon2 from "../../assets/images/GetFeedbackMedia/stage_four_icons/stage_four_icon2.png";
import stage_four_icon3 from "../../assets/images/GetFeedbackMedia/stage_four_icons/stage_four_icon3.png";
import stage_four_icon4 from "../../assets/images/GetFeedbackMedia/stage_four_icons/stage_four_icon4.png";

import region1 from "../../assets/images/GetFeedbackMedia/regions/Illustration - Map.png";
import region2 from "../../assets/images/GetFeedbackMedia/regions/Illustration - Map-1.png"
import region3 from "../../assets/images/GetFeedbackMedia/regions/Illustration - Map-2.png";
import region4 from "../../assets/images/GetFeedbackMedia/regions/Illustration - Map-3.png";
import region5 from "../../assets/images/GetFeedbackMedia/regions/Illustration - Map-4.png";
import region6 from "../../assets/images/GetFeedbackMedia/regions/Illustration - Map-5.png";

import stage_seven_icon1 from "../../assets/images/GetFeedbackMedia/stage_seven_icon/1.png";
import stage_seven_icon2 from "../../assets/images/GetFeedbackMedia/stage_seven_icon/2.png";
import stage_seven_icon3 from "../../assets/images/GetFeedbackMedia/stage_seven_icon/3.png";
import stage_seven_icon4 from "../../assets/images/GetFeedbackMedia/stage_seven_icon/4.png";
import stage_seven_phone from "../../assets/images/GetFeedbackMedia/stage_seven_icon/phone.png";
import stage_seven_email from "../../assets/images/GetFeedbackMedia/stage_seven_icon/email.png";
import stage_seven_chat from "../../assets/images/GetFeedbackMedia/stage_seven_icon/chat.png";

import {sendMessage} from "../../api/telegram";

// Компонент первого этапа
const StageOneComponent = ({ setStageCompleted, setActiveTypeOfRoom, activeTypeOfRoom }) => {
    return (
        <div className="stage-one-content">
            <div
                key="commercial"
                onClick={() => { setActiveTypeOfRoom('Коммерческая недвижимость'); setStageCompleted(true); }}
                className={"stage-one-container"}
            >
                <img
                    src={stage_one_img1}
                    alt={"img"}
                    className={`stage-one-select ${activeTypeOfRoom === 'Коммерческая недвижимость' ? 'active' : ''}`}
                />
                <div className={"stage-one-title"}>{window.innerWidth > 780 ? "Коммерческая недвижимость" : "Коммерческая"}</div>
            </div>
            <div
                key="land"
                onClick={() => { setActiveTypeOfRoom('Земельный участок'); setStageCompleted(true); }}
                className={"stage-one-container"}
            >
                <img
                    src={stage_one_img2}
                    alt={"img"}
                    className={`stage-one-select ${activeTypeOfRoom === 'Земельный участок' ? 'active' : ''}`}
                />
                <div className={"stage-one-title"}>Земельный участок</div>
            </div>
            <div
                key="villa"
                onClick={() => { setActiveTypeOfRoom('Вилла'); setStageCompleted(true); }}
                className={"stage-one-container"}
            >
                <img
                    src={stage_one_img3}
                    alt={"img"}
                    className={`stage-one-select ${activeTypeOfRoom === 'Вилла' ? 'active' : ''}`}
                />
                <div className={"stage-one-title"}>Вилла</div>
            </div>
            <div
                key="apartment"
                onClick={() => { setActiveTypeOfRoom('Квартира'); setStageCompleted(true); }}
                className={"stage-one-container"}
            >
                <img
                    src={stage_one_img4}
                    alt={"img"}
                    className={`stage-one-select ${activeTypeOfRoom === 'Квартира' ? 'active' : ''}`}
                />
                <div className={"stage-one-title"}>Квартира</div>
            </div>
        </div>
    );
};

// Компонент второго этапа
const StageTwoComponent = ({ setStageCompleted, setActiveStageTwoValue, activeStageTwoValue }) => {
    return (
        <div className="stage-two-content">
            <div onClick={() => {
                setActiveStageTwoValue('Для постоянного проживания');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageTwoValue === 'Для постоянного проживания' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageTwoValue === 'Для постоянного проживания' ? 'icon-active' : '')} src={stage_two_icon1} alt={"img"}/>
                <div className={"stage-two-title"}>Для постоянного проживания</div>
            </div>
            <div onClick={() => {
                setActiveStageTwoValue('Аренда и проживание');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageTwoValue === 'Аренда и проживание' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageTwoValue === 'Аренда и проживание' ? 'icon-active' : '')} src={stage_two_icon2} alt={"img"}/>
                <div className={"stage-two-title"}>Аренда и проживание</div>
            </div>
            <div onClick={() => {
                setActiveStageTwoValue('Перепродажа новостроек');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageTwoValue === 'Перепродажа новостроек' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageTwoValue === 'Перепродажа новостроек' ? 'icon-active' : '')} src={stage_two_icon3} alt={"img"}/>
                <div className={"stage-two-title"}>Перепродажа новостроек</div>
            </div>
            <div onClick={() => {
                setActiveStageTwoValue('Инвестирование в прибыльную субаренду');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageTwoValue === 'Инвестирование в прибыльную субаренду' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageTwoValue === 'Инвестирование в прибыльную субаренду' ? 'icon-active' : '')} src={stage_two_icon4} alt={"img"}/>
                <div className={"stage-two-title"}>{window.innerWidth > 1000 ? "Инвестирование в прибыльную субаренду" : "Инвестирование в субаренду"}</div>
            </div>
        </div>

    );
};

// Компонент третьего этапа
const StageThreeComponent = ({ setStageCompleted, setActiveStageThreeValue, activeStageThreeValue }) => {
    return (
        <div className="stage-two-content">
            <div onClick={() => {
                setActiveStageThreeValue('Менее 200 000 $');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageThreeValue === 'Менее 200 000 $' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageThreeValue === 'Менее 200 000 $' ? 'icon-active' : '')} src={stage_three_icon1} alt={"img"}/>
                <div className={"stage-two-title"}>Менее 200 000 $</div>
            </div>
            <div onClick={() => {
                setActiveStageThreeValue('200 000 $ - 500 000 $');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageThreeValue === '200 000 $ - 500 000 $' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageThreeValue === '200 000 $ - 500 000 $' ? 'icon-active' : '')} src={stage_three_icon2} alt={"img"}/>
                <div className={"stage-two-title"}>200 000 $ - 500 000 $</div>
            </div>
            <div onClick={() => {
                setActiveStageThreeValue('500 000 $ - 1 000 000 $');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageThreeValue === '500 000 $ - 1 000 000 $' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageThreeValue === '500 000 $ - 1 000 000 $' ? 'icon-active' : '')} src={stage_three_icon3} alt={"img"}/>
                <div className={"stage-two-title"}>500 000 $ - 1 000 000 $</div>
            </div>
            <div onClick={() => {
                setActiveStageThreeValue('Более 1 000 000 $');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageThreeValue === 'Более 1 000 000 $' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageThreeValue === 'Более 1 000 000 $' ? 'icon-active' : '')} src={stage_three_icon4} alt={"img"}/>
                <div className={"stage-two-title"}>Более 1 000 000 $</div>
            </div>
        </div>

    );
};

const StageFourComponent = ({ setStageCompleted, setActiveStageFourValue, activeStageFourValue }) => {
    return (
        <div className="stage-two-content">
            <div onClick={() => {
                setActiveStageFourValue('Как можно скорее');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageFourValue === 'Как можно скорее' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageFourValue === 'Как можно скорее' ? 'icon-active' : '')} src={stage_four_icon1} alt={"img"}/>
                <div className={"stage-two-title"}>Как можно скорее</div>
            </div>
            <div onClick={() => {
                setActiveStageFourValue('В течение 3 месяцев');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageFourValue === 'В течение 3 месяцев' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageFourValue === 'В течение 3 месяцев' ? 'icon-active' : '')} src={stage_four_icon2} alt={"img"}/>
                <div className={"stage-two-title"}>В течение 3 месяцев</div>
            </div>
            <div onClick={() => {
                setActiveStageFourValue('В течение 6 месяцев');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageFourValue === 'В течение 6 месяцев' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageFourValue === 'В течение 6 месяцев' ? 'icon-active' : '')} src={stage_four_icon3} alt={"img"}/>
                <div className={"stage-two-title"}>В течение 6 месяцев</div>
            </div>
            <div onClick={() => {
                setActiveStageFourValue('Я пока не уверен');
                setStageCompleted(true);
            }} className={"stage-two-container"}>
                <div className={"dot " + (activeStageFourValue === 'Я пока не уверен' ? 'active' : '')}></div>
                <img className={"stage-two-icon "  + (activeStageFourValue === 'Я пока не уверен' ? 'icon-active' : '')} src={stage_four_icon4} alt={"img"}/>
                <div className={"stage-two-title"}>Я пока не уверен</div>
            </div>
        </div>

    );
};

const StageFiveComponent = ({ setStageCompleted, setActiveStageFiveValue, activeStageFiveValue }) => {
    // Функция для обработки выбора региона
    const allRegions = ['Все районы', 'Юг', 'Патонг', 'Центр', 'Север', 'Остальные'];

    // Функция для обработки выбора региона
    const handleRegionClick = (region) => {
        let updatedRegions;

        if (region === 'Все районы') {
            // Если выбран "Все районы"
            if (activeStageFiveValue.includes('Все районы')) {
                // Если "Все районы" уже выбраны, снимаем выбор
                updatedRegions = [];
            } else {
                // Если "Все районы" не выбраны, выбираем все регионы
                updatedRegions = [...allRegions];
            }
        } else {
            // Если выбран другой регион
            if (activeStageFiveValue.includes(region)) {
                // Если регион уже выбран, удаляем его из массива
                updatedRegions = activeStageFiveValue.filter((r) => r !== region);

                // Если "Все районы" были выбраны, снимаем их выбор
                if (updatedRegions.includes('Все районы')) {
                    updatedRegions = updatedRegions.filter((r) => r !== 'Все районы');
                }
            } else {
                // Если регион не выбран, добавляем его в массив
                updatedRegions = [...activeStageFiveValue, region];

                // Если выбраны все регионы вручную, добавляем "Все районы"
                const allRegionsSelected = allRegions
                    .filter((r) => r !== 'Все районы') // Исключаем "Все районы" из проверки
                    .every((r) => updatedRegions.includes(r));

                if (allRegionsSelected) {
                    updatedRegions = [...allRegions]; // Добавляем "Все районы"
                }
            }
        }

        // Обновляем состояние
        setActiveStageFiveValue(updatedRegions);
        // Отмечаем этап как завершенный, если выбран хотя бы один регион
        setStageCompleted(updatedRegions.length > 0);
    };

    return (
        <div className={"stage-five-content"}>
            <div
                onClick={() => handleRegionClick('Все районы')}
                className={`allRegions stage-five-container`}
            >
                <div className={"dot " + (activeStageFiveValue.includes('Все районы') ? 'active' : '')}></div>
                <div className={"stage-five-title"}>Все районы</div>
                <img alt={"region"} className={"stage-five-region"} src={region1} />
                <div className={"stage-five-description"}>Не ограничиваюсь<br />конкретными районами</div>
            </div>
            <div
                onClick={() => handleRegionClick('Юг')}
                className={`stage-five-container`}
            >
                <div className={"dot " + (activeStageFiveValue.includes('Юг') ? 'active' : '')}></div>
                <div className={"stage-five-title"}>Юг</div>
                <img alt={"region"} className={"stage-five-region"} src={region2} />
            </div>
            <div
                onClick={() => handleRegionClick('Патонг')}
                className={`stage-five-container`}
            >
                <div className={"dot " + (activeStageFiveValue.includes('Патонг') ? 'active' : '')}></div>
                <div className={"stage-five-title"}>Патонг</div>
                <img alt={"region"} className={"stage-five-region"} src={region3} />
            </div>
            <div
                onClick={() => handleRegionClick('Центр')}
                className={`stage-five-container`}
            >
                <div className={"dot " + (activeStageFiveValue.includes('Центр') ? 'active' : '')}></div>
                <div className={"stage-five-title"}>Центр</div>
                <img alt={"region"} className={"stage-five-region"} src={region4} />
            </div>
            <div
                onClick={() => handleRegionClick('Север')}
                className={`stage-five-container`}
            >
                <div className={"dot " + (activeStageFiveValue.includes('Север') ? 'active' : '')}></div>
                <div className={"stage-five-title"}>Север</div>
                <img alt={"region"} className={"stage-five-region"} src={region5} />
            </div>
            <div
                onClick={() => handleRegionClick('Остальные')}
                className={`anotherRegions stage-five-container`}
            >
                <div className={"dot " + (activeStageFiveValue.includes('Остальные') ? 'active' : '')}></div>
                <div style={window.innerWidth < 1200 ? {"text-align": "center"}: null} className={"stage-five-title"}>Остальные</div>
                <img style={window.innerWidth < 1200 ? {"display": "none"}: null} alt={"region"} className={"stage-five-region"} src={region6} />
                <div style={window.innerWidth < 1200 ? {"display": "none"}: null} className={"stage-five-description"}>Поможем вам найти идеальное<br />решение для ваших инвестиций</div>
            </div>
        </div>
    );
};

const StageSixComponent = ({ setStageCompleted, setActiveStageSixValue, activeStageSixValue, choosedRegions }) => {
    const REGIONS_MORE_DATA = {
        "Юг": ["Cape Panwa", "Chalong", "Rawai", "Kata", "Nai Harn", "Karon"],
        "Патонг": ["Patong"],
        "Центр": ["Kamala", "Surin", "Bangtao", "Cherng Talay", "Laguna", "Layan"],
        "Север": ["Nai Thon", "Nai Yang", "Mai Khao"],
        "Остальные": ["AO PO", "Cape Yamu", "Boat Lagun", "Phuket Town", "Royal Phuket Marine"]
    };

    // Состояние для хранения выбранных регионов
    const [selectedRegions, setSelectedRegions] = React.useState([]);

    // Обновляем activeStageSixValue и setStageCompleted при изменении selectedRegions
    React.useEffect(() => {
        setActiveStageSixValue(selectedRegions);
        setStageCompleted(selectedRegions.length > 0);
    }, [selectedRegions]);

    // Обработчик выбора региона
    const handleRegionClick = (region) => {
        setSelectedRegions((prev) =>
            prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
        );
    };

    // Формируем actual_regions на основе выбранных choosedRegions
    let actual_regions = [];

    Object.keys(REGIONS_MORE_DATA).forEach((region) => {
        if (choosedRegions.includes(region)) {
            actual_regions = actual_regions.concat(REGIONS_MORE_DATA[region]);
        }
    });
    // Разделяем actual_regions на три части
    const partLength = Math.ceil(actual_regions.length / 3);
    const part1 = actual_regions.slice(0, partLength);
    const part2 = actual_regions.slice(partLength, partLength * 2);
    const part3 = actual_regions.slice(partLength * 2);
    const isOdd = (arr) => arr.length % 2 !== 0;
    return (
        window.innerWidth > 1200 ? (
            <div className={"stage-six-content"}>
                <div className={"stage-six-line"}>
                    {part1.map((item, i) => (
                        <div
                            className={`stage-six-container`}
                            key={i}
                            onClick={() => handleRegionClick(item)}
                        >
                            <div className={"dot " + (selectedRegions.includes(item) ? "active" : "")}></div>
                            {item}
                        </div>
                    ))}
                </div>
                <div className={"stage-six-line"}>
                    {part2.map((item, i) => (
                        <div
                            className={`stage-six-container`}
                            key={i}
                            onClick={() => handleRegionClick(item)}
                        >
                            <div className={"dot " + (selectedRegions.includes(item) ? "active" : "")}></div>
                            {item}
                        </div>
                    ))}
                </div>
                <div className={"stage-six-line"}>
                    {part3.map((item, i) => (
                        <div
                            className={`stage-six-container`}
                            key={i}
                            onClick={() => handleRegionClick(item)}
                        >
                            <div className={"dot " + (selectedRegions.includes(item) ? "active" : "")}></div>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <div className={"stage-six-content"}>
                {[part1, part2, part3].map((part, partIndex) => (
                        part.map((item, i) => {
                            // Проверка: длинное название ИЛИ последний элемент при нечетном числе
                            const shouldSpan = item === "Royal Phuket Marine";

                            return (
                                <div
                                    className="stage-six-container"
                                    style={shouldSpan ? {"grid-column": "span 2"} : null}
                                    key={i}
                                    onClick={() => handleRegionClick(item)}
                                >
                                    <div className={"dot " + (selectedRegions.includes(item) ? "active" : "")}></div>
                                    {item}
                                </div>
                            );
                        })
                ))}
            </div>

        )
    );
};

// Основной компонент
const StageSevenComponent = ({setStageCompleted, setActiveStageSevenValue, activeStageSevenValue}) => {
    // Обработчики для полей ввода
    const handleNameChange = (event) => {
        setActiveStageSevenValue(prev => ({
            ...prev,
            name: event.target.value
        }));
    };

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        // Разрешаем только цифры, +, -, (, )
        const filteredValue = value.replace(/[^0-9+\-()]/g, '');
        setActiveStageSevenValue(prev => ({
            ...prev,
            phone: filteredValue,
        }));
    };

    const handleSocialChange = (event) => {
        setActiveStageSevenValue(prev => ({
            ...prev,
            social: event.target.value
        }));
    };

    const handleEmailChange = (event) => {
        setActiveStageSevenValue(prev => ({
            ...prev,
            email: event.target.value
        }));
    };

    // Обработчик для выбора способа связи
    const handleContactMethodChange = (method) => {
        setActiveStageSevenValue(prev => ({
            ...prev,
            typeOfContact: method
        }));
    };

    // Проверка завершённости этапа
    React.useEffect(() => {
        const isCompleted = (
            activeStageSevenValue.name.trim() !== "" &&
            activeStageSevenValue.phone.trim() !== "" &&
            activeStageSevenValue.typeOfContact !== "Не указано"
        );
        setStageCompleted(isCompleted);
    }, [activeStageSevenValue]);

    const [selectedField, setSelectedField] = React.useState(null);

    return (
        <div className={"stage-seven-content"}>
            <div className={"stage-seven-container-left"}>
                <div className={"stage-seven-content-left-container"}>
                    <div className={"stage-seven-title"}>Ваше имя <span className={"primary"}>*</span></div>
                    <div className={"stage-seven-icon-input"}>
                        <img alt={"icon"} src={stage_seven_icon1} className={"stage-seven-icon "  + (selectedField === 'Имя' ? 'icon-active' : '')}/>
                        <input
                            id={"input_name"}
                            placeholder={"Иван Иванов"}
                            className={"stage-seven-input"}
                            value={activeStageSevenValue.name}
                            onChange={handleNameChange}
                            onSelect={() => {setSelectedField('Имя')}}
                        />
                    </div>
                </div>

                <div className={"stage-seven-content-left-container"}>
                    <div className={"stage-seven-title"}>Номер телефона <span className={"primary"}>*</span></div>
                    <div className={"stage-seven-icon-input"}>
                        <img alt={"icon"} src={stage_seven_icon2} className={"stage-seven-icon "  + (selectedField === 'Телефон' ? 'icon-active' : '')}/>
                        <input
                            id={"input_phone"}
                            type={"tel"}
                            placeholder={"+66 65 925 5000"}
                            className={"stage-seven-input"}
                            value={activeStageSevenValue.phone}
                            onChange={handlePhoneChange}
                            onSelect={() => {setSelectedField('Телефон')}}
                        />
                    </div>
                </div>

                <div className={"stage-seven-content-left-container"}>
                    <div className={"stage-seven-title"}>Социальная сеть</div>
                    <div className={"stage-seven-icon-input"}>
                        <img alt={"icon"} src={stage_seven_icon3} className={"stage-seven-icon "  + (selectedField === 'Соц. сеть' ? 'icon-active' : '')}/>
                        <input
                            id={"input_social"}
                            placeholder={"t.me/dream-landia"}
                            className={"stage-seven-input"}
                            value={activeStageSevenValue.social}
                            onChange={handleSocialChange}
                            onSelect={() => {setSelectedField('Соц. сеть')}}
                        />
                    </div>
                </div>

                <div className={"stage-seven-content-left-container"}>
                    <div className={"stage-seven-title"}>Электронная почта</div>
                    <div className={"stage-seven-icon-input"}>
                        <img alt={"icon"} src={stage_seven_icon4} className={"stage-seven-icon "  + (selectedField === 'Почта' ? 'icon-active' : '')}/>
                        <input
                            id={"input_email"}
                            placeholder={"youremail@gmail.com"}
                            className={"stage-seven-input"}
                            value={activeStageSevenValue.email}
                            onChange={handleEmailChange}
                            onSelect={() => {setSelectedField('Почта')}}
                        />
                    </div>
                </div>
            </div>
            <div className={"stage-seven-container-right"}>
                <div className={"stage-seven-title"}>{window.innerWidth > 1200 ? "Какой способ связи будет для вас наиболее удобен?" : "Какой способ связи для вас наиболее удобен?"}</div>
                <div
                    className={"stage-seven-right-container"}
                    onClick={() => handleContactMethodChange("phone")}
                >
                    <div className={`dot ${activeStageSevenValue.typeOfContact === "phone" ? "active" : ""}`}></div>
                    <img src={stage_seven_phone} alt="phone" className={`stage-seven-right-icon ${activeStageSevenValue.typeOfContact === "phone" ? "icon-active" : ""}`}/>
                    <div className={"stage-seven-right-title"}>По номеру {window.innerWidth > 1200 ? <br/> : null}телефона</div>
                </div>
                <div
                    className={"stage-seven-right-container"}
                    onClick={() => handleContactMethodChange("email")}
                >
                    <div className={`dot ${activeStageSevenValue.typeOfContact === "email" ? "active" : ""}`}></div>
                    <img src={stage_seven_email} alt="email" className={`stage-seven-right-icon ${activeStageSevenValue.typeOfContact === "email" ? "icon-active" : ""}`}/>
                    <div className={"stage-seven-right-title"}>Электронным {window.innerWidth > 1200 ? <br/> : null}письмом</div>
                </div>
                <div
                    className={"stage-seven-right-container"}
                    onClick={() => handleContactMethodChange("messenger")}
                >
                    <div className={`dot ${activeStageSevenValue.typeOfContact === "messenger" ? "active" : ""}`}></div>
                    <img src={stage_seven_chat} alt="chat" className={`stage-seven-right-icon ${activeStageSevenValue.typeOfContact === "messenger" ? "icon-active" : ""}`}/>
                    <div className={"stage-seven-right-title"}>Через {window.innerWidth > 1200 ? <br/> : null}мессенджеры</div>
                </div>
            </div>
        </div>
    );
};

const ThanksForData = () => {
    return (
        <span></span>
    )
}


function GetFeedbackContent(props) {
    const [activeStage, setActiveStage] = React.useState(1); // Текущий этап
    const [activeTypeOfRoom, setActiveTypeOfRoom] = React.useState(null); // Выбранный тип недвижимости
    const [activeStageTwoValue, setActiveStageTwoValue] = React.useState(null);
    const [activeStageThreeValue, setActiveStageThreeValue] = React.useState(null);
    const [activeStageFourValue, setActiveStageFourValue] = React.useState(null);
    const [activeStageFiveValue, setActiveStageFiveValue] = React.useState([]);
    const [activeStageSixValue, setActiveStageSixValue] = React.useState([]);
    const [activeStageSevenValue, setActiveStageSevenValue] = React.useState({
        name: "",
        phone: "",
        social: "",
        email: "",
        typeOfContact: ""
    });

    const [stagesCompleted, setStagesCompleted] = React.useState({}); // Состояние завершенности этапов

    // Массив этапов
    const STAGES = [
        {
            component: (
                <StageOneComponent
                    setStageCompleted={(completed) => setStagesCompleted((prev) => ({ ...prev, 1: completed }))}
                    setActiveTypeOfRoom={setActiveTypeOfRoom}
                    activeTypeOfRoom={activeTypeOfRoom}
                />
            ),
            isCompleted: stagesCompleted[1] || false, // Завершен ли первый этап
        },
        {
            component: <StageTwoComponent
                    setStageCompleted={(completed) => setStagesCompleted((prev) => ({ ...prev, 2: completed }))}
                    setActiveStageTwoValue={setActiveStageTwoValue}
                    activeStageTwoValue={activeStageTwoValue}
            />,
            isCompleted: stagesCompleted[2] || false, // Завершен ли второй этап
        },
        {
            component: <StageThreeComponent
                    setStageCompleted={(completed) => setStagesCompleted((prev) => ({ ...prev, 3: completed }))}
                    setActiveStageThreeValue={setActiveStageThreeValue}
                    activeStageThreeValue={activeStageThreeValue}
            />,
            isCompleted: stagesCompleted[3] || false, // Завершен ли третий этап
        },
        {
            component: <StageFourComponent
                    setStageCompleted={(completed) => setStagesCompleted((prev) => ({ ...prev, 4: completed }))}
                    setActiveStageFourValue={setActiveStageFourValue}
                    activeStageFourValue={activeStageFourValue}
            />,
            isCompleted: stagesCompleted[4] || false,
        },
        {
            component: <StageFiveComponent
                    setStageCompleted={(completed) => setStagesCompleted((prev) => ({ ...prev, 5: completed }))}
                    setActiveStageFiveValue={setActiveStageFiveValue}
                    activeStageFiveValue={activeStageFiveValue}
            />,
            isCompleted: stagesCompleted[5] || false,
        },
        {
            component: <StageSixComponent
                    setStageCompleted={(completed) => setStagesCompleted((prev) => ({ ...prev, 6: completed }))}
                    setActiveStageSixValue={setActiveStageSixValue}
                    activeStageSixValue={activeStageSixValue}
                    choosedRegions={activeStageFiveValue}
            />,
            isCompleted: stagesCompleted[6] || false,
        },
        {
            component: <StageSevenComponent
                    setStageCompleted={(completed) => setStagesCompleted((prev) => ({ ...prev, 7: completed }))}
                    setActiveStageSevenValue={setActiveStageSevenValue}
                    activeStageSevenValue={activeStageSevenValue}
            />,
            isCompleted: stagesCompleted[7] || false,
        },
        {
            component: <ThanksForData />,
            isCompleted: stagesCompleted[8] || false,
        }
        // Добавьте другие этапы по аналогии
    ];

    const TITLES = [
        window.innerWidth > 1200 ? "Какой тип недвижимости<br/>вы ищите?" : "Какой тип недвижимости<br/>вы ищете?" ,
        window.innerWidth > 1200 ? "Для какой цели приобретаете<br/>недвижимость?" : "Для какой цели покупаете<br/>недвижимость?",
        window.innerWidth > 1200 ? "Какой у вас бюджет<br/>в долларах США?": "Какой у вас бюджет<br/>в долларах США?",
        window.innerWidth > 1200 ? "Когда вы планируете<br/>приобрести недвижимость?" : "Когда вы планируете<br/>купить недвижимость?",
        window.innerWidth > 1200 ? "Какие районы на Пхукете<br/>вы предпочитаете?" : "Какие районы на Пхукете<br/>вы предпочитаете?",
        window.innerWidth > 1200 ? "Какие районы на Пхукете<br/>вы предпочитаете?" : "Какие районы на Пхукете<br/>вы предпочитаете?",
        window.innerWidth > 1200 ? "Пожалуйста, укажите<br/>ваши данные" : "Пожалуйста, укажите<br/>ваши данные",
        window.innerWidth > 1200 ? "Ваша заявка принята, мы свяжемся <br/> с вами в ближайшее время" : "Заявка принята, мы скоро <br/> свяжемся с вами"
    ]

    // Обработчик для кнопки "Перейти дальше"
    const handleNextStage = () => {
        if (activeStage < STAGES.length) {
            console.log(activeStageFiveValue)
            // Если на 5 этапе выбран только "Patong", пропускаем 6 этап
            if (activeStage === 5 && activeStageFiveValue.length === 1 && activeStageFiveValue[0] === "Патонг") {
                setActiveStageSixValue(['Patong']);
                setActiveStage(7);
            } else {
                setActiveStage(activeStage + 1);
            }
        }
    };

    // Обработчик для кнопки "Вернуться назад"
    const handlePrevStage = () => {
        if (activeStage > 1 && activeStage < 8) {
            // Если текущий этап — 7, и был пропущен 6 этап, возвращаемся на 5 этап
            if (activeStage === 7 && activeStageFiveValue.length === 1 && activeStageFiveValue[0] === "Патонг") {
                setActiveStage(5);
            } else {
                setActiveStage(activeStage - 1);
            }
        }
    };

    const handleSubmit = async (values) => {
        try {
            const message = `
            Новая заявка с сайта!\n\nТип недвижимости: ${activeTypeOfRoom}\nЦель приобретения: ${activeStageTwoValue}\nБюджет (USD): ${activeStageThreeValue}\nСроки приобретения: ${activeStageFourValue}\nВыбранные районы: ${activeStageFiveValue.join(" | ")}\nУточненные районы: ${activeStageSixValue.join(" | ")}\n\nИмя: ${activeStageSevenValue.name}\nНомер: ${activeStageSevenValue.phone}\nСоц. сеть: ${activeStageSevenValue.social}\nПочта: ${activeStageSevenValue.email}\nПредпоч. вид связи: ${activeStageSevenValue.typeOfContact}`;
            await sendMessage(message);
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        gsap.from(".getInfoBlock", {
            opacity: 0,
            y: -20,
            duration: 1,
        })
    }, [activeStage])

    return (
        <div id="GetFeedbackMenuHook" className="GetFeedbackContent" style={activeStage === 8 ? {"align-content": "center"} : null}>
            <div className="description">Оставить заявку</div>
            <div className="title" dangerouslySetInnerHTML={{ __html: TITLES[activeStage-1] }}></div>
            <div style={activeStage === 8 ? {"min-height": "0px", "transition": "0.3s ease"} : null} className="getInfoBlock">
                {STAGES[activeStage - 1].component}
                <div style={activeStage === 8 ? {"display": "none"} : null} className="line"></div>
                {window.innerWidth <= 1200 ? (
                    <div className="managementStageBlock" style={activeStage === 8 ? {"justify-content": "center", "gap": "16px"} : null}>
                        <div className="actualStage">{"0" + (activeStage === 8 ? 8 : activeStage)}</div>
                        <div style={activeStage === 8 ? {"grid-template-columns": "1fr"} : null} className="managementButtons">
                            {/* Кнопка "Вернуться назад" активна начиная со второго этапа */}
                            <div
                                onClick={handlePrevStage}
                                style={activeStage===8 ? {"display": 'none'} : null}
                                className={`backStageButton ${activeStage > 1 && activeStage < 8 ? "activeButton" : ""}`}
                            >
                                Назад
                            </div>
                            {/* Кнопка "Перейти дальше" активна, если текущий этап завершен */}
                            <div
                                onClick={STAGES[activeStage - 1].isCompleted || activeStage === 8 ? (activeStage === 7 ? ()=>{handleSubmit(); setActiveStage(activeStage+1);} : activeStage === 8 ? ()=> {setActiveStage(1)} : handleNextStage) : null}
                                className={`nextStageButton ${STAGES[activeStage - 1].isCompleted ? "activeButton" : ""}`}
                            >
                                {activeStage === 7 ? "Отправить заявку" : activeStage === 8 ? "Заполнить заявку повторно" : "Дальше"}
                            </div>
                        </div>
                        <div className="lastStage">07</div>
                    </div>
                ) : null}
            </div>
            {window.innerWidth > 1200 ? (
                <div className="managementStageBlock" style={activeStage === 8 ? {"justify-content": "center", "gap": "16px"} : null}>
                    <div className="actualStage">{"0" + (activeStage === 8 ? 8 : activeStage)}</div>
                    <div style={activeStage === 8 ? {"grid-template-columns": "1fr"} : null} className="managementButtons">
                        {/* Кнопка "Вернуться назад" активна начиная со второго этапа */}
                        <div
                            onClick={handlePrevStage}
                            style={activeStage===8 ? {"display": 'none'} : {"display": 'inline-flex'}}
                            className={`backStageButton ${activeStage > 1 && activeStage < 8 ? "activeButton" : ""}`}
                        >
                            Вернуться назад
                        </div>
                        {/* Кнопка "Перейти дальше" активна, если текущий этап завершен */}
                        <div
                            onClick={STAGES[activeStage - 1].isCompleted || activeStage === 8 ? (activeStage === 7 ? ()=>{handleSubmit(); setActiveStage(activeStage+1);} : activeStage === 8 ? ()=> {setActiveStage(1)} : handleNextStage) : null}
                            className={`nextStageButton ${STAGES[activeStage - 1].isCompleted ? "activeButton" : ""}`}
                        >
                            {activeStage === 7 ? "Отправить заявку" : activeStage === 8 ? "Заполнить заявку повторно" : "Перейти дальше"}
                        </div>
                    </div>
                    <div className="lastStage">08</div>
                </div>
            ) : null}
            <div style={activeStage===8 ? {"display": "none"} : null} className="PrivacyPolicy">
                Заполняя форму обратной связи, вы подтверждаете свое согласие<br/>
                на <span className={"getFeedbackLink"}>обработку персональных данных</span> и получение рекламных рассылок
            </div>
        </div>
    );
}

export default GetFeedbackContent;



























