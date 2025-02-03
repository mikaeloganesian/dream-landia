import React, {useEffect} from 'react';
import {MAPS} from '../DATA/MAPS';
import {gsap} from "gsap";

function RegionsContent() {
    const [selectedRegion, selectRegion] = React.useState('Nothing');
    const regionFirstBlockRef = React.useRef(null);
    const regionSecondBlockRef = React.useRef(null);

    const REGIONS = ['Юг', 'Патонг', 'Центр', 'Север', 'Все остальные']
    const CONTENT = [
        {
            shortInfoLabels: ["Постоянный рост", "14.5 млрд $", "13 млн.", "5 - 7%"],
            shortInfoText: ["\n" +
            "Экономика Таиланда, вторая по величине в Юго-Восточной Азии,\n" +
            "демонстрирует ежегодный прирост в 3-4% при инфляции менее 1%", "Общий доход от\n" +
            "туризма в год (2024 г.)", "Ежегодный\n" +
            "туристический поток", "Среднегодовой рост\n" +
            "цен на недвижимость"],
            longInfoLabel: "Пхукет",
            longInfoText: "Пхукет — южная провинция Таиланда, включающая\n" +
                "в себя основной остров и несколько более мелких\n" +
                "окружающих. Она граничит с провинцией Пхангнга и\n" +
                "расположена в живописном регионе Андаманского моря"
        },
        {
            shortInfoLabels: ["Семейный отдых", "3 600 $", "30%"],
            shortInfoText: ["Развитый район с постоянно растущей популярностью, отличающийся стабильно высоким уровнем заполняемости и ориентированный на семейный отдых. Здесь вы найдете развитую инфраструктуру, комфортабельное жилье и спокойную атмосферу, идеальную для семейного отдыха", "Средняя цена за квадратный метр", "Доля туристов, посещающих Пхукет, которые там останавливаются"],
            longInfoLabel: "Южный район",
            longInfoText: "Южный район Пхукета, включающий Раваи, Наихарн, Кату, Карон и Чалонг, предлагает более спокойный и уединенный отдых по сравнению с оживленным Патонгом. Здесь находятся красивые пляжи, тихие заливы, прекрасные условия для дайвинга и сноркелинга. Это идеальное место для тех,\n" +
                "кто ищет сочетание комфорта и умиротворенности"
        },
        {
            shortInfoLabels: ["Ночная жизнь", "6 900 $", "20%"],
            shortInfoText: ["Патонг славится своей оживленной ночной жизнью. Здесь множество баров, клубов и развлекательных заведений", "Средняя цена за квадратный метр", "Доля туристов, посещающих Пхукет, которые останавливаются в Патонге"],
            longInfoLabel: "Патонг",
            longInfoText: "Патонг – самый известный и оживленный район Пхукета, известный своими пляжами, ночной жизнью и широким выбором отелей, ресторанов и магазинов. Идеальное место для отдыха, предлагающее как спокойный пляжный отдых, так и яркие развлечения"
        },
        {
            shortInfoLabels: ["Синоним роскоши", "4 200 $", "30%"],
            shortInfoText: ["Самый быстрорастущий район, привлекающий инвестиции в элитную недвижимость. Бангтао становится синонимом роскоши и комфорта на Пхукете", "Средняя цена за квадратный метр", "Доля туристов, посещающих Пхукет, которые останавливаются в Центре"],
            longInfoLabel: "Центральные районы",
            longInfoText: "Центральный район Пхукета (Камала, Сурин, Бангтао) предлагает сочетание спокойного пляжного отдыха и развитой инфраструктуры. Здесь находятся роскошные виллы и отели, поля для гольфа мирового класса, изысканные рестораны и магазины, а также красивые пляжи с чистым песком и спокойным морем.\n" +
                "Это идеальное место для тех, кто ценит комфорт, роскошь и уединенный отдых, но при этом желает иметь доступ к удобствам и развлечениям"
        },
        {
            shortInfoLabels: ["Умиротворение и гармония", "3 000 $", "10%"],
            shortInfoText: ["Умиротворение и гармонию на севере Пхукета, всего в 15 минутах езды от аэропорта. Предлагают спокойный отдых на прекрасных пляжах, окруженные пышной зеленью и тишиной, — идеальное сочетание комфорта и близости к удобствам", "Средняя цена за квадратный метр", "Доля туристов, посещающих Пхукет, которые останавливаются на Севере"],
            longInfoLabel: "Северные районы",
            longInfoText: "Северный Пхукет (Най Янг, Най Thon, Май Као) предлагает сочетание нетронутой природы и развитой инфраструктуры. Здесь находятся длинные песчаные пляжи, идеальные для спокойного отдыха, несколько полей для гольфа, уютные отели и рестораны, а также близость к международному аэропорту. Это прекрасное место для тех, кто ищет сочетание уединения и удобства",
        },
        {
            shortInfoLabels: ["Аутентичность", "1 700 $", "10%"],
            shortInfoText: ["Можно наблюдать подлинную тайскую жизнь, посещая местные рынки и храмы, а также общаясь с местными жителями, которые живут вдали от туристической суеты", "Средняя цена за квадратный метр", "Доля туристов, посещающих Пхукет, которые останавливаются на Севере"],
            longInfoLabel: "Все остальные",
            longInfoText: "В отличие от популярных туристических зон, районы Панг Нга и Пхукет-Таун демонстрируют подлинную тайскую жизнь. Здесь проживает преимущественно местное население, создавая аутентичную атмосферу и предлагая возможность познакомиться с культурой и традициями Таиланда вдали от туристической суеты"
        }
    ]



    const ACTUAL_REGION = (()=> {
        switch(selectedRegion) {
            case "Nothing": return 0;
            case "Юг": return 1;
            case "Патонг": return 2;
            case "Центр": return 3;
            case "Север": return 4;
            case "Все остальные": return 5;
            default: return 0;
        }
    })();

    useEffect(() => {
        gsap.from([regionFirstBlockRef.current, regionSecondBlockRef.current], {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0,
            ease: 'power1.out'
        });
    }, [selectedRegion]);

    return (
        <div id="RegionsMenuHook" className="regionsContent">
            <div className="regionsText">
                <div className="regionsTitle">Лучшие проекты для жизни и инвестиций</div>
                <div className="regionsDescription">{window.innerWidth < 1200 ? ["Признанный во всем мире как одно из ведущих", <br/>, "мест отдыха, Пхукет предлагает уникальное", <br/>, "сочетание тропического образа жизни и", <br/>, "западных стандартов в области жилья"] : ["Признанный во всем мире как одно из ведущих мест отдыха,", <br/>, "Пхукет предлагает уникальное сочетание тропического образа жизни", <br/>, "и западных стандартов в области жилья, досуга и развлечений"]}</div>
            </div>
            <div className="regionContent">
                <div className="regionBlock">
                    <div className="selectRegionBlock">
                        <div className="selectRegionTitle">Выберите область</div>
                        <div className="regions">
                            {REGIONS.map((item, index) => (
                                <div
                                    onClick={() => {
                                        selectRegion(selectedRegion === item ? "Nothing" : item)
                                    }}
                                    id={'region' + index}
                                    className={selectedRegion === item ? 'region' : 'region unselected'}>
                                    <div className={selectedRegion === item ? 'regionDot active' : 'regionDot'}></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    {window.innerWidth >= 1000 ? <span></span> : (<div dangerouslySetInnerHTML={{__html: MAPS[ACTUAL_REGION]}} className="mapBlock">
                    </div>)}
                    <div className="regionInfoBlock">
                        <div id="firstBlock" className="infoBlock">
                            <div className="infoTitle">Краткая информация</div>
                            <div ref={(el) => (regionFirstBlockRef.current = el)} className="infoFirstBlock">
                                <div className="grouthData">
                                    <div className="DataContent">
                                        <div className="title">{CONTENT[ACTUAL_REGION].shortInfoLabels[0]}</div>
                                        <div className="value">{CONTENT[ACTUAL_REGION].shortInfoText[0]}</div>
                                    </div>
                                </div>
                                <div className="infoBlockDataLine">
                                    {CONTENT[ACTUAL_REGION].shortInfoLabels.slice(1).map((item, index) => (
                                        <div className="infoBlockData">
                                            <div className="DataContent">
                                                <div
                                                    className="title">{CONTENT[ACTUAL_REGION].shortInfoLabels[index + 1]}</div>
                                                <div className="value">
                                                    {CONTENT[ACTUAL_REGION].shortInfoText[index + 1]}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div id="secondBlock" className="infoBlock">
                            <div className="infoTitle">Подробное описание</div>
                            <div ref={(el) => (regionSecondBlockRef.current = el)} className="detailedDescription">
                                <div className="DataContentDetailed">
                                    <div className="title">{CONTENT[ACTUAL_REGION].longInfoLabel}</div>
                                    <div className="value">{CONTENT[ACTUAL_REGION].longInfoText}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {window.innerWidth < 1000 ? (<span></span>) : (<div dangerouslySetInnerHTML={{__html: MAPS[ACTUAL_REGION]}} className="mapBlock">
                </div>)}
            </div>
        </div>
    )
}

export default RegionsContent