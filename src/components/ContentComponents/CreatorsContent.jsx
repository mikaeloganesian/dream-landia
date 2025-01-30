import firstCreator from '../../assets/images/creatorsImages/firstCreator.png';
import secondCreator from '../../assets/images/creatorsImages/secondCreator.png';

function CreatorsContent(props) {
    return (
        <div id="CreatorsMenuHook" className="creatorsContent">
            <div className="creatorsLine">
                <div className="creatorsTitle">Послание от<br/>основателей</div>
                <div className="creatorsDescription">Наши основатели расскажут, почему клиенты доверяют нам и выбирают именно нашу компанию. Узнайте о ценностях, которые лежат в основе нашего успеха, и о том, что делает нас уникальными</div>
            </div>
            <div className="creatorsBlock">
                <div className="creator">
                    <div className="creatorText">
                        <div className="line"></div>
                        <div className="creatorName">Феликс Подгайный</div>
                        <div className="creatorVacation">Сооснователь компании</div>
                        <div className="creatorPhrase">Ваш успех – наш успех. Мы строим долгосрочные, основанные на
                            доверии взаимовыгодные отношения, потому что знаем: счастливый клиент – ключ к успеху
                        </div>
                    </div>
                    <img className="creatorImage" src={firstCreator} alt="firstCreator"/>
                </div>
                <div className="creator">
                    <div className="creatorText">
                        <div className="creatorName">Илья Федоренко</div>
                        <div className="creatorVacation">Сооснователь компании</div>
                        <div className="line"></div>
                        <div className="creatorPhrase">В основе нашей работы лежит тайское гостеприимство: мы стремимся
                            создать уникальный клиентский опыт, наполненный заботой и вниманием
                        </div>
                    </div>
                    <img className="creatorImage" src={secondCreator} alt="firstCreator"/>
                </div>
            </div>
        </div>
    )
}

export default CreatorsContent;