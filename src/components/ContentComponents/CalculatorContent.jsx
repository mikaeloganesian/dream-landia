import emailIcon from '../../assets/images/others/email-icon.png';
import plusIcon from '../../assets/images/others/plus-icon.png';
import minusIcon from '../../assets/images/others/minus-icon.png';
import {useState, useEffect, useRef} from "react";
import {sendMessage} from "../../api/telegram";
import {gsap} from "gsap";

function DataBlank({ columnMode, title, value, needException, id }) {
    return (
        <div id={id} style={columnMode === 1 ? { "grid-column": "span 1" } : { "grid-column": "span 2" }} className="DataBlank">
            {needException ? (<div className="BlankException">* Включены<br />в управленческие</div>) : null}
            <div className="BlankTitle">{title}</div>
            <div className="BlankValue">{value}</div>
        </div>
    );
}

function CalculatorContent(props) {
    const [roomCounter, setRoomCounter] = useState(1);
    const [selectedRegion, setSelectedRegion] = useState('Юг');
    const [selectedTypeOfRoom, setSelectedTypeOfRoom] = useState('Вилла');
    const [selectedCategoryOfRoom, setSelectedCategoryOfRoom] = useState('Премиум');
    const [value, setValue] = useState("250000$");
    const[showPopup, setShowPopup] = useState();

    const handleInputChange = (e) => {
        const numericValue = e.target.value.replace(/[^0-9]/g, '');
        setValue(numericValue ? `${numericValue}$` : '');
    };

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    };

    const handleInputMailChange = (event) => {
        const value = event.target.value || "";
        setEmail(value);
        setIsValidEmail(validateEmail(value));
    };

    const [inputCost, setInputCost] = useState(250000);
    const [inputRoomFactor, setInputRoomFactor] = useState(1);
    const [inputRegionFactor, setInputRegionFactor] = useState(1);
    const [inputTypeFactor, setInputTypeFactor] = useState(1);
    const [inputCategoryFactor, setInputCategoryFactor] = useState(1);

    const [ADR, setADR] = useState(98);
    const [averageOccupancyRate, setAverageOccupancyRate] = useState(81);
    const [annualGrossIncome, setAnnualGrossIncome] = useState(28974);
    const [annualRemuneration, setAnnualRemuneration] = useState(5795);
    const [annualManagementFees, setAnnualManagementFees] = useState(5795);
    const [annualOperatingExpenses, setAnnualOperatingExpenses] = useState(5215);
    const [annualIncomeFromRealEstate, setAnnualIncomeFromRealEstate] = useState(18551);
    const [profitabilityOnInvestment, setProfitabilityOnInvestment] = useState(7.2);
    const [returnOnInvestment, setReturnOnInvestment] = useState(14.2);
    const [formattedReturnOnInvestment, setFormattedReturnOnInvestment] = useState("");

    const [isCalculated, setIsCalculated] = useState(false);
    const [isReduced, setIsReduced] = useState(false);
    const [countOfCalc,setCountOfCalc] = useState(0);

    const animRef1 = useRef(null);
    const animRef2 = useRef(null);


    console.log(isReduced);
    const formatAge = (age) => {
        age = age.toFixed(1);
        const years = Math.floor(age);
        const months = Math.round((age - years) * 12);

        const getYearsWord = (years) => {
            if (years % 10 === 1 && years % 100 !== 11) {
                return "год";
            } else if ([2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years % 100)) {
                return "года";
            } else {
                return "лет";
            }
        };

        const getMonthsWord = (months) => {
            if (months % 10 === 1 && months % 100 !== 11) {
                return "месяц";
            } else if ([2, 3, 4].includes(months % 10) && ![12, 13, 14].includes(months % 100)) {
                return "месяца";
            } else {
                return "месяцев";
            }
        };

        return `${years} ${getYearsWord(years)} ${months === 0 ? "" : ("и " + months + " " + getMonthsWord(months))}`;
    };

    const calculateValues = () => {
        const roomFactor = 1 + (roomCounter - 1) * 0.2;
        const regionFactor = selectedRegion === 'Юг' ? 1 : selectedRegion === 'Патонг' ? 1.2 : selectedRegion === 'Центр' ? 1.3 : 1.4;
        const typeFactor = selectedTypeOfRoom === 'Вилла' ? 1 : 0.9;
        const categoryFactor = selectedCategoryOfRoom === 'Бюджетная' ? 0.7 : selectedCategoryOfRoom === 'Средняя' ? 0.8 : selectedCategoryOfRoom === 'Премиум' ? 1 : 1.2;


        // value - стоимость недвижимости
        // roomFactor - количество комнат
        // selectedRegion - выбранный регион ( Юг, Патонг, Центр или Север )
        // selectedTypeOfRoom - тип недвижимости ( Вилла или апартамент )
        // selectedCategoryOfRoom - категория недвижимости ( Бюджетная, Средняя, Премиум или Люкс )


        let profitabilityMap = {}
        if (!isReduced) {
            profitabilityMap = {
                'Юг-Вилла-Средняя': 0.1,
                'Юг-Вилла-Бюджетная': 0.1,
                'Юг-Вилла-Премиум': 0.1,
                'Юг-Вилла-Люкс': 0.1,
                'Юг-Апартамент-Средняя': 0.1,
                'Юг-Апартамент-Бюджетная': 0.1,
                'Юг-Апартамент-Премиум': 0.1,
                'Юг-Апартамент-Люкс': 0.1,
                'Патонг-Вилла-Средняя': 0.09,
                'Патонг-Вилла-Бюджетная': 0.09,
                'Патонг-Вилла-Премиум': 0.09,
                'Патонг-Вилла-Люкс': 0.09,
                'Патонг-Апартамент-Средняя': 0.09,
                'Патонг-Апартамент-Бюджетная': 0.09,
                'Патонг-Апартамент-Премиум': 0.09,
                'Патонг-Апартамент-Люкс': 0.09,
                'Центр-Вилла-Средняя': 0.09,
                'Центр-Вилла-Бюджетная': 0.09,
                'Центр-Вилла-Премиум': 0.09,
                'Центр-Вилла-Люкс': 0.09,
                'Центр-Апартамент-Средняя': 0.09,
                'Центр-Апартамент-Бюджетная': 0.09,
                'Центр-Апартамент-Премиум': 0.09,
                'Центр-Апартамент-Люкс': 0.09,
                'Север-Вилла-Средняя': 0.09,
                'Север-Вилла-Бюджетная': 0.09,
                'Север-Вилла-Премиум': 0.09,
                'Север-Вилла-Люкс': 0.09,
                'Север-Апартамент-Средняя': 0.09,
                'Север-Апартамент-Бюджетная': 0.09,
                'Север-Апартамент-Премиум': 0.09,
                'Север-Апартамент-Люкс': 0.09,
            };
        } else {
            profitabilityMap = {
                'Юг-Вилла-Средняя': 0.07,
                'Юг-Вилла-Бюджетная': 0.07,
                'Юг-Вилла-Премиум': 0.07,
                'Юг-Вилла-Люкс': 0.07,
                'Юг-Апартамент-Средняя': 0.07,
                'Юг-Апартамент-Бюджетная': 0.07,
                'Юг-Апартамент-Премиум': 0.07,
                'Юг-Апартамент-Люкс': 0.07,
                'Патонг-Вилла-Средняя': 0.06,
                'Патонг-Вилла-Бюджетная': 0.06,
                'Патонг-Вилла-Премиум': 0.06,
                'Патонг-Вилла-Люкс': 0.06,
                'Патонг-Апартамент-Средняя': 0.06,
                'Патонг-Апартамент-Бюджетная': 0.06,
                'Патонг-Апартамент-Премиум': 0.06,
                'Патонг-Апартамент-Люкс': 0.06,
                'Центр-Вилла-Средняя': 0.06,
                'Центр-Вилла-Бюджетная': 0.06,
                'Центр-Вилла-Премиум': 0.06,
                'Центр-Вилла-Люкс': 0.06,
                'Центр-Апартамент-Средняя': 0.06,
                'Центр-Апартамент-Бюджетная': 0.06,
                'Центр-Апартамент-Премиум': 0.06,
                'Центр-Апартамент-Люкс': 0.06,
                'Север-Вилла-Средняя': 0.06,
                'Север-Вилла-Бюджетная': 0.06,
                'Север-Вилла-Премиум': 0.06,
                'Север-Вилла-Люкс': 0.06,
                'Север-Апартамент-Средняя': 0.06,
                'Север-Апартамент-Бюджетная': 0.06,
                'Север-Апартамент-Премиум': 0.06,
                'Север-Апартамент-Люкс': 0.06,
            };
        }

        const key = `${selectedRegion}-${selectedTypeOfRoom}-${selectedCategoryOfRoom}`;



        const baseProfitability = profitabilityMap[key] || 0; // 0 - значение по умолчанию

        // Базовые значения
        const baseIncomeFromRealEstate = parseFloat(value.replace("$", "")) * baseProfitability;
        const baseOccupancyRate = isReduced ? (selectedRegion === 'Юг' ? 0.75 : 0.7) : (selectedRegion === 'Юг' ? 0.9 : 0.85);
        const baseGrossIncome = baseIncomeFromRealEstate * 1.3;
        const baseManagementFees = 0.3 * baseGrossIncome;
        const baseOperatingExpenses = 0.2 * baseGrossIncome;
        const baseADR = baseGrossIncome / (Math.floor(365*baseOccupancyRate));
        const baseROI = parseFloat(Math.floor(parseFloat(value.replace("$", ""))/baseIncomeFromRealEstate).toFixed(1));



        console.log(baseProfitability);
        console.log(baseIncomeFromRealEstate);
        console.log(baseOccupancyRate);
        console.log(baseGrossIncome);
        console.log(baseOperatingExpenses);
        console.log(baseADR);
        console.log(baseROI);

        // Применяем уменьшение на 20%, если isReduced === true
        setADR(Math.round(baseADR));
        setAverageOccupancyRate(Math.round(baseOccupancyRate*100));
        setAnnualGrossIncome(Math.round(baseGrossIncome));
        setAnnualManagementFees(Math.round(baseManagementFees));
        setAnnualOperatingExpenses(Math.round(baseOperatingExpenses));
        setAnnualIncomeFromRealEstate(Math.round(baseIncomeFromRealEstate));
        setProfitabilityOnInvestment((baseProfitability*100).toFixed(1));
        setFormattedReturnOnInvestment(formatAge(baseROI));

    };


    const transcriber = {
        region: {
            1: "Юг",
            1.2: "Патонг",
            1.3: "Центр",
            1.4: "Север"
        },
        type: {
            0.9: "Апартамент",
            1: "Вилла"
        },
        category: {
            0.7: "Бюджетная",
            0.8: "Средняя",
            1: "Премиум",
            1.2: "Люкс"
        }
    }

    const handleSubmit = async () => {
        try {
            const message = `
Новая заявка с сайта через калькулятор!\n\n
Почта: ${email}\n
Стоимость: ${value === "" ? "250000$" : value}\n
Количество комнат: ${roomCounter}\n
Регион: ${selectedRegion}\n
Тип недвижимости: ${selectedTypeOfRoom}\n
Категория недвижимости: ${selectedCategoryOfRoom}`;

            await sendMessage(message);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        calculateValues();
        gsap.from([animRef1.current, animRef2.current], {
            opacity: 0,
            y: -60,
            duration: 2,
            stagger: 0.5,
        });
    }, [isReduced, countOfCalc]);


    useEffect(() => {
        if (showPopup) {
            gsap.to(".pop-up-content", {
                translateY: 0,
                duration: 1.2,
                ease: "power3.out",
            });
            setTimeout(() => {
                gsap.to(".pop-up-content", {
                    translateY: -200,
                    duration: 1.2,
                    ease: "power3.out",
                });
            }, 5000);
        }
    }, [showPopup]);


    return (
        <div id="CalculatorMenuHook" className="CalculatorContent">
            <div className="CalculatorInfo">
                <div className="CalculatorTitle">Рассчитайте доход от {window.innerWidth > 1000 ? <br/> : null}вашей недвижимости</div>
                <div className="CalculatorDescription">Мы поможем вам найти идеальную недвижимость {window.innerWidth > 1000 ? <br/> : null}на островах, организовать комфортный отдых {window.innerWidth > 1000 ? <br/> : null}и получать пассивный доход от аренды</div>
            </div>
            <div className="CalculatorBlocks">
                <div className="Calculator">
                    <div className="CalculatorInput">
                        <div className="CalculatorInputTitle">{window.innerWidth <= 768 ? "Стоимость приобретения" : "Стоимость"}</div>
                        <div className={"CalculatorInputValue"}><input className={"CalculatorInputFont"} value={value} onChange={handleInputChange} placeholder={"250 000$"}></input></div>
                    </div>
                    <div className="CalculatorCounter">
                        <div className="CalculatorCounterTitle">Количество комнат</div>
                        <div className="CalculatorCounterBlock">
                            <img
                                onClick={() => setRoomCounter(roomCounter > 1 ? roomCounter - 1 : 1)}
                                className={"minusIcon " + (roomCounter > 1 ? "activeMinusIcon" : "")}
                                src={minusIcon}
                                alt="minusIcon"
                            />
                            <span className={"CalculatorCounterValue"}>{roomCounter > 1 ? roomCounter : 1}</span>
                            <img
                                onClick={() => setRoomCounter(roomCounter + 1)}
                                className={"plusIcon"}
                                src={plusIcon}
                                alt="plusIcon"
                            />
                        </div>
                    </div>
                    <div className="CalculatorSelectCategory">
                        <div className="CalculatorSelectCategoryTitle">Выберите регион</div>
                        <div className="CalculatorSelectCategoryBlock">
                            <span onClick={() => setSelectedRegion('Юг')} className="CalculatorCategory"><div className={"dot " + (selectedRegion === 'Юг' ? 'active' : "")}></div>Юг</span>
                            <span onClick={() => setSelectedRegion('Патонг')} className="CalculatorCategory"><div className={"dot " + (selectedRegion === 'Патонг' ? 'active' : "")}></div>Патонг</span>
                            <span onClick={() => setSelectedRegion('Центр')} className="CalculatorCategory"><div className={"dot " + (selectedRegion === 'Центр' ? 'active' : "")}></div>Центр</span>
                            <span onClick={() => setSelectedRegion('Север')} className="CalculatorCategory"><div className={"dot " + (selectedRegion === 'Север' ? 'active' : "")}></div>Север</span>
                        </div>
                    </div>
                    <div className="CalculatorSelectCategory">
                        <div className="CalculatorSelectCategoryTitle">Выберите тип недвижимости</div>
                        <div className="CalculatorSelectCategoryBlock">
                            <span onClick={() => setSelectedTypeOfRoom('Вилла')} className="CalculatorCategory"><div className={"dot " + (selectedTypeOfRoom === 'Вилла' ? 'active' : '')}></div>Вилла</span>
                            <span onClick={() => setSelectedTypeOfRoom('Апартамент')} className="CalculatorCategory"><div className={"dot " + (selectedTypeOfRoom === 'Апартамент' ? 'active' : '')}></div>Апартамент</span>
                        </div>
                    </div>
                    <div className="CalculatorSelectCategory">
                        <div className="CalculatorSelectCategoryTitle">Категория недвижимости</div>
                        <div className="CalculatorSelectCategoryBlock">
                            <span onClick={() => setSelectedCategoryOfRoom('Бюджетная')} className="CalculatorCategory"><div className={"dot " + (selectedCategoryOfRoom === 'Бюджетная' ? 'active' : '')}></div>Бюджетная</span>
                            <span onClick={() => setSelectedCategoryOfRoom('Средняя')} className="CalculatorCategory"><div className={"dot " + (selectedCategoryOfRoom === 'Средняя' ? 'active' : '')}></div>Средняя</span>
                            <span onClick={() => setSelectedCategoryOfRoom('Премиум')} className="CalculatorCategory"><div className={"dot " + (selectedCategoryOfRoom === 'Премиум' ? 'active' : '')}></div>Премиум</span>
                            <span onClick={() => setSelectedCategoryOfRoom('Люкс')} className="CalculatorCategory"><div className={"dot " + (selectedCategoryOfRoom === 'Люкс' ? 'active' : '')}></div>Люкс</span>
                        </div>
                    </div>
                    <div className="line"></div>
                    <span onClick={()=> {setCountOfCalc(countOfCalc+1); setIsCalculated(true)}} className="GetResults">Рассчитать ежегодную доходность</span>
                </div>
                <div ref={animRef1} className="AverageData">
                    <div className="AverageDataLine">
                        <span className="AverageDataTitle">Средние показатели</span>
                        <span onClick={()=> {setIsReduced(!isReduced)}} className="AverageDataBanner">{isReduced ? "Лучшие показатели" : "Базовые показатели"}</span>
                    </div>
                    <div className="AverageMainData">
                        <DataBlank id={"DataBlank1"} columnMode={1} title={window.innerWidth > 780 ? "Средняя суточная ставка (ADR)" : "Средняя суточная ставка"} value={ADR + " $"} />
                        <DataBlank id={"DataBlank2"} columnMode={1} title={"Средняя заполняемость"} value={averageOccupancyRate + " %"} />
                        <DataBlank id={"DataBlank3"} columnMode={1} title={"Годовой валовой доход"} value={annualGrossIncome + " $"} />
                        <DataBlank id={"DataBlank4"} columnMode={1} title={"Годовые управленческие сборы"} value={annualManagementFees + " $"} />
                        <DataBlank id={"DataBlank5"} columnMode={2} title={"Ежегодные операционные расходы"} value={annualOperatingExpenses + " $"} needException={true} />
                        <div className="AverageResults">
                            <div className="AverageResultsTitle">Годовой доход<br />от недвижимости</div>
                            <div className="AverageResultsValue">{annualIncomeFromRealEstate + " $"}</div>
                        </div>
                    </div>
                </div>
                <div ref={animRef2} className="Results">
                    <div className="ResultsDataTitle">Итоги</div>
                    <div className="ResultsMainData">
                        <DataBlank columnMode={2} title={"Рентабельность инвестиций"} value={profitabilityOnInvestment + "%"} />
                        <DataBlank columnMode={2} title={"Окупаемость инвестиций"} value={isCalculated ? formattedReturnOnInvestment : "14 лет и 2 месяца"} />
                    </div>
                    <div className="GetSolution">
                        <div className="GetSolutionTitle">Получить предложение</div>
                        <div className="InputMail">
                            <input placeholder={"youremail@gmail.com"} value={email} onChange={handleInputMailChange} className="inputMailTitle" />
                            <img className="MailIcon" src={emailIcon} alt={"send"} />
                        </div>
                        <a onClick={isValidEmail ? ()=>{handleSubmit(); setShowPopup(1)} : null} className={"ButtonMail " + (isValidEmail ? 'active' : '')}>Получить предложение</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalculatorContent;