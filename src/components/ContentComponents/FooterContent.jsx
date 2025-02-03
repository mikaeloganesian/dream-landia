import telegramIcon from "../../assets/images/socialLinks/telegram.png";
import mailIcon from "../../assets/images/socialLinks/mail.png";
import whatsupIcon from "../../assets/images/socialLinks/whatsup.png";
import mapIcon from "../../assets/images/socialLinks/map.png";
import {useNavigate} from "react-router-dom";
import {gsap} from "gsap";


function FooterContent() {
    const navigate = useNavigate();

    return (
        <div className="footerBlock">
            <div className="footerContent">
                <div className="footerLeftBlock">
                    <div className="title">Обсудить <br/>проект</div>
                    {window.innerWidth > 1000 ? (
                        <div className="socialLinks">
                            <img src={telegramIcon} alt="telegram" className="socialLink"/>
                            <img src={mailIcon} alt="telegram" className="socialLink"/>
                            <img src={whatsupIcon} alt="telegram" className="socialLink"/>
                        </div>
                    ) : null}
                    {window.innerWidth > 1000 ? (
                            <div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/privacy-policy"); }} className="termsOfUse">Политика конфиденциальности</div>
                            ) :
                            null}
                            {window.innerWidth > 1000 ? (<div className="license">© 2025 Dream Landia</div>) : null}
                </div>
                <div className="footerCenterBlock">
                <div className="footerPoints">
                        <a onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} href={"#AllProjectsMenuHook"}><div className="footerPoint">Недвижимость</div></a>
                        <a onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} href={"#AdvantagesMenuHook"}><div className="footerPoint">Преимущества</div></a>
                        <a onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} href={"#AboutCompanyMenuHook"}><div className="footerPoint">О компании</div></a>
                        <a onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} href={"#CreatorsMenuHook"}><div className="footerPoint">Основатели</div></a>
                    </div>
                    {window.innerWidth <= 1000 ? (<div className={"line"}></div>) : null }
                    <div className="addressLine">
                        {window.innerWidth <= 1000 ? (
                                <div className="footerContactMobile footerContact1">
                                    <div className={"mobile-open-menu-svg-icon"}>
                                        <svg width="24" height="24" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M5.9999 3.69728C4.90936 3.69728 4.02531 4.58344 4.02531 5.67658C4.02531 6.76971 4.90936 7.65588 5.9999 7.65588C7.09044 7.65588 7.9745 6.76971 7.9745 5.67658C7.9745 4.58344 7.09044 3.69728 5.9999 3.69728ZM5.0126 5.67658C5.0126 5.13001 5.45463 4.68693 5.9999 4.68693C6.54517 4.68693 6.9872 5.13001 6.9872 5.67658C6.9872 6.22315 6.54517 6.66623 5.9999 6.66623C5.45463 6.66623 5.0126 6.22315 5.0126 5.67658Z"
                                                  fill="#FFFCFC"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M9.06412 2.60524C7.37185 0.908932 4.62813 0.908932 2.93586 2.60524C1.24359 4.30154 1.24359 7.05179 2.93586 8.7481L4.60374 10.42C5.37487 11.1929 6.62511 11.1929 7.39624 10.42L9.06412 8.7481C10.7564 7.05179 10.7564 4.30154 9.06412 2.60524ZM3.63398 3.30502C4.94069 1.9952 7.05929 1.9952 8.36599 3.30502C9.6727 4.61485 9.6727 6.73849 8.366 8.04831L6.69811 9.72016C6.31255 10.1066 5.68743 10.1066 5.30186 9.72016L3.63399 8.04831C2.32728 6.73849 2.32728 4.61484 3.63398 3.30502Z"
                                                  fill="#FFFCFC"/>
                                        </svg>

                                    </div>
                                    <div className={"footerContactTitle"}>Адрес офиса</div>
                                    <div className={"footerContactValue"}>66/2 Moo 6, Rawai, Mueang Phuket</div>
                                </div>
                            ) :
                            (<div className="address">66/2 Moo 6, Rawai, Mueang Phuket</div>)}
                        <div className="showInMap">Показать офис на карте<img className="mapIcon" src={mapIcon}
                                                                              alt="mapIcon"/></div>
                    </div>
                </div>
                <div className="footerRightBlock">
                        <svg onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/"); }} className="FooterLogo" width="242" height="88" viewBox="0 0 242 88" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1510_707)">
                                <path
                                    d="M100.76 87.0063V67.855C100.76 62.6663 104.956 58.4601 110.132 58.4601C115.309 58.4601 119.505 62.6663 119.505 67.855V87.0063H125.814V66.7033C125.814 59.0075 119.59 52.7689 111.912 52.7689C108.179 52.7689 104.789 54.2442 102.292 56.6448V60.6282H100.76V53.7626H94.4511V87.0063H100.76Z"
                                    fill="#FFFCFC"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M70.2083 88C74.3694 88 78.1928 86.5503 81.2032 84.1273V80.1408H82.7352V87.0063H89.0438V53.7626H82.7352V60.6282H81.2032V56.6416C78.1928 54.2186 74.3694 52.7689 70.2083 52.7689C60.5025 52.7689 52.6344 60.6557 52.6344 70.3845C52.6344 80.1133 60.5025 88 70.2083 88ZM82.7352 70.3845C82.7352 63.7988 77.4092 58.4601 70.8391 58.4601C64.2691 58.4601 58.943 63.7988 58.943 70.3845C58.943 76.9701 64.2691 82.3088 70.8391 82.3088C77.4092 82.3088 82.7352 76.9701 82.7352 70.3845Z"
                                      fill="#FFFCFC"/>
                                <path d="M42 45H48.3086V87.0063H42V45Z" fill="#FFFCFC"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M200.164 88C204.326 88 208.149 86.5503 211.159 84.1273V80.1408H212.691V87.0063H219V53.7626H212.691V60.6282H211.159V56.6416C208.149 54.2186 204.326 52.7689 200.164 52.7689C190.459 52.7689 182.591 60.6557 182.591 70.3845C182.591 80.1133 190.459 88 200.164 88ZM212.691 70.3845C212.691 63.7988 207.365 58.4601 200.795 58.4601C194.225 58.4601 188.899 63.7988 188.899 70.3845C188.899 76.9701 194.225 82.3088 200.795 82.3088C207.365 82.3088 212.691 76.9701 212.691 70.3845Z"
                                  fill="#FFFCFC"/>
                            <path d="M171.956 53.7626H178.265V87.0063H171.956V53.7626Z" fill="#FFFCFC"/>
                            <path d="M171.956 45H178.265V51.0525H171.956V45Z" fill="#FFFCFC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M147.713 88C151.875 88 155.698 86.5503 158.708 84.1273V80.1408H160.24V87.0063H166.549V45H160.24V60.6282H158.708V56.6416C155.698 54.2186 151.875 52.7689 147.713 52.7689C138.008 52.7689 130.14 60.6557 130.14 70.3845C130.14 80.1133 138.008 88 147.713 88ZM160.24 70.3845C160.24 63.7988 154.914 58.4601 148.344 58.4601C141.774 58.4601 136.448 63.7988 136.448 70.3845C136.448 76.9701 141.774 82.3088 148.344 82.3088C154.914 82.3088 160.24 76.9701 160.24 70.3845Z"
                                  fill="#FFFCFC"/>
                            <path
                                d="M242 22.5C242 34.9264 231.926 45 219.5 45C207.074 45 197 34.9264 197 22.5C197 10.0736 207.074 0 219.5 0C231.926 0 242 10.0736 242 22.5Z"
                                fill="#FFFCFC"/>
                            <path
                                d="M148.099 20.7773C148.099 16.7361 151.374 13.4601 155.413 13.4601C159.453 13.4601 162.728 16.7361 162.728 20.7773V42.0063H169.049V20.7773C169.049 16.7361 172.324 13.4601 176.364 13.4601C180.404 13.4601 183.679 16.7361 183.679 20.7773V42.0063H190V19.7836C189.964 13.1418 184.57 7.76891 177.922 7.76891C174.414 7.76891 171.256 9.26454 169.049 11.6531V15.6282H167.514V12.1742C165.363 9.48861 162.056 7.76891 158.348 7.76891C154.891 7.76891 151.782 9.26415 149.634 11.6435V15.6282H148.099V8.76261H141.778V42.0063H148.099V20.7773Z"
                                fill="#FFFCFC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M117.486 43C121.655 43 125.486 41.5503 128.503 39.1273V35.1408H130.038V42.0063H136.359V8.76261H130.038V15.6282H128.503V11.6416C125.486 9.21858 121.655 7.76891 117.486 7.76891C107.76 7.76891 99.8764 15.6557 99.8764 25.3845C99.8764 35.1133 107.76 43 117.486 43ZM130.038 25.3845C130.038 18.7988 124.701 13.4601 118.118 13.4601C111.535 13.4601 106.198 18.7988 106.198 25.3845C106.198 31.9701 111.535 37.3088 118.118 37.3088C124.701 37.3088 130.038 31.9701 130.038 25.3845Z"
                                  fill="#FFFCFC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M96.0131 28.3655C96.1783 27.3965 96.2643 26.4005 96.2643 25.3845C96.2643 15.6557 88.3803 7.76891 78.6549 7.76891C68.9296 7.76891 61.0456 15.6557 61.0456 25.3845C61.0456 35.1132 68.9296 43 78.6549 43C85.9108 43 92.1416 38.61 94.8382 32.3403H88.338C86.1741 35.3494 82.6433 37.3088 78.6549 37.3088C73.1007 37.3088 68.4336 33.5086 67.1103 28.3655H96.0131ZM90.1996 22.4034C88.8763 17.2603 84.2092 13.4601 78.6549 13.4601C73.1007 13.4601 68.4336 17.2603 67.1103 22.4034H90.1996Z"
                                  fill="#FFFCFC"/>
                            <path
                                d="M57.6141 13.4601C52.4272 13.4601 48.2224 17.6664 48.2224 22.855V42.0063H41.9011V8.76261H48.2224V15.6282H49.7576V11.6448C52.2601 9.24416 55.6566 7.76891 59.3976 7.76891C59.6475 7.76891 59.8959 7.77549 60.1426 7.7885V13.8045C59.3381 13.5801 58.4901 13.4601 57.6141 13.4601Z"
                                fill="#FFFCFC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M17.6093 43C21.7789 43 25.61 41.5503 28.6264 39.1273V35.1408H30.1616V42.0063H36.4829V0H30.1616V15.6282H28.6264V11.6416C25.61 9.21858 21.7789 7.76891 17.6093 7.76891C7.88396 7.76891 0 15.6557 0 25.3845C0 35.1133 7.88396 43 17.6093 43ZM30.1616 25.3845C30.1616 18.7988 24.8248 13.4601 18.2414 13.4601C11.6581 13.4601 6.32129 18.7988 6.32129 25.3845C6.32129 31.9701 11.6581 37.3088 18.2414 37.3088C24.8248 37.3088 30.1616 31.9701 30.1616 25.3845Z"
                                  fill="#FFFCFC"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1510_707">
                                <rect width="242" height="88" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    {window.innerWidth <= 1000 ? (
                        <div className="footerContacts">
                            <div className="footerContact footerContact1">
                                <div className={"mobile-open-menu-svg-icon"}>
                                    <svg width="24" height="24" viewBox="0 0 12 12" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M0.999908 3.99902C0.999908 2.89445 1.89534 1.99902 2.99991 1.99902H8.99991C10.1045 1.99902 10.9999 2.89445 10.9999 3.99902V7.99902C10.9999 9.10359 10.1045 9.99902 8.99991 9.99902H2.99991C1.89534 9.99902 0.999908 9.10359 0.999908 7.99902V3.99902ZM2.99991 2.99902C2.44762 2.99902 1.99991 3.44674 1.99991 3.99902V7.99902C1.99991 8.55131 2.44762 8.99902 2.99991 8.99902H8.99991C9.55219 8.99902 9.99991 8.55131 9.99991 7.99902V3.99902C9.99991 3.44674 9.55219 2.99902 8.99991 2.99902H2.99991Z"
                                              fill="#FFFCFC"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3.10959 4.18826C3.28209 3.97263 3.59674 3.93767 3.81237 4.11017L6.00002 5.86029L8.18768 4.11017C8.40331 3.93767 8.71795 3.97263 8.89046 4.18826C9.06296 4.40389 9.028 4.71853 8.81237 4.89104L6.00002 7.14092L3.18768 4.89104C2.97205 4.71853 2.93709 4.40389 3.10959 4.18826Z"
                                              fill="#FFFCFC"/>
                                    </svg>
                                </div>
                                <div className={"footerContactTitle"}>Электронная почта</div>
                                <div className={"footerContactValue"}>sales@dream-landia.com</div>
                            </div>
                            <div className="footerContact footerContact2">
                                <div>
                                    <div className={"mobile-open-menu-svg-icon"}>
                                        <svg width="24" height="24" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M6.46739 3.49451C6.57028 3.23825 6.86142 3.11391 7.11768 3.2168C7.50713 3.37316 7.85944 3.60949 8.15184 3.91051C8.44425 4.21154 8.67024 4.57057 8.81523 4.96439C8.91062 5.22353 8.77788 5.51094 8.51874 5.60634C8.2596 5.70174 7.97219 5.569 7.87679 5.30986C7.78014 5.04731 7.62948 4.80796 7.43454 4.60727C7.2396 4.40659 7.00473 4.24904 6.7451 4.1448C6.48884 4.04191 6.3645 3.75077 6.46739 3.49451Z"
                                                  fill="#FFFCFC"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M6.68162 1.52403C6.75309 1.2573 7.02726 1.09901 7.29399 1.17048C8.14177 1.39764 8.91482 1.84396 9.53543 2.46458C10.156 3.08519 10.6024 3.85824 10.8295 4.70602C10.901 4.97275 10.7427 5.24692 10.476 5.31839C10.2092 5.38986 9.93507 5.23157 9.8636 4.96483C9.68187 4.28661 9.32482 3.66818 8.82833 3.17168C8.33183 2.67519 7.7134 2.31814 7.03517 2.13641C6.76844 2.06494 6.61015 1.79077 6.68162 1.52403Z"
                                                  fill="#FFFCFC"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2.48411 2.60767C3.6932 2.20438 4.91503 2.96176 5.25441 4.18798C5.48567 5.02355 5.26665 5.89971 4.73259 6.49966C4.84197 6.64132 4.96149 6.77753 5.09124 6.90737C5.22036 7.03659 5.35575 7.15566 5.49652 7.26467C6.09626 6.72639 6.97506 6.50492 7.81305 6.73719C9.03903 7.07701 9.795 8.29978 9.39233 9.50882C9.12813 10.3021 8.6355 10.7841 7.97848 10.9427C7.36798 11.0902 6.70974 10.9335 6.12918 10.6921C4.9599 10.206 3.80531 9.24861 3.27801 8.72091C2.73826 8.18076 1.78495 7.0245 1.30329 5.85742C1.06411 5.27787 0.910103 4.62207 1.05786 4.01437C1.21683 3.36058 1.69636 2.87041 2.48411 2.60767ZM4.29064 4.45472C4.0843 3.70918 3.39868 3.35678 2.80052 3.55629C2.27472 3.73166 2.09235 3.99235 2.02955 4.25063C1.95554 4.55501 2.0199 4.9725 2.22766 5.47592C2.6399 6.47478 3.49484 7.52316 3.98538 8.01407C4.46404 8.49309 5.51132 9.35231 6.51304 9.76872C7.01798 9.97863 7.43753 10.0446 7.74376 9.97068C8.00346 9.90797 8.26649 9.72454 8.44356 9.19284C8.64325 8.59327 8.29027 7.90717 7.54594 7.70085C6.992 7.54731 6.42248 7.7252 6.08353 8.08821C5.86466 8.32261 5.44744 8.45624 5.09247 8.20847C4.84271 8.03413 4.60551 7.83601 4.38387 7.61421C4.16189 7.39207 3.96369 7.1543 3.78933 6.90398C3.54311 6.55052 3.67449 6.13492 3.9072 5.91554C4.26751 5.57585 4.44365 5.00757 4.29064 4.45472Z"
                                                  fill="#FFFCFC"/>
                                        </svg>

                                    </div>
                                    <div className={"footerContactTitle"}>Номер телефона</div>
                                    <div className={"footerContactValue"}>+66 659255000</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="footerContacts">
                            <div className="footerContact footerContact1">+66 65 925 5000</div>
                            <div className="footerContact footerContact2">sales@dream-landia.com</div>
                        </div>
                    )}
                    {window.innerWidth <= 1000 ? (<div className={"line"}></div>) : null}
                    {window.innerWidth <= 1000 ? (
                        <div className="socialLinks">
                            <img src={telegramIcon} alt="telegram" className="socialLink"/>
                            <img src={mailIcon} alt="telegram" className="socialLink"/>
                            <img src={whatsupIcon} alt="telegram" className="socialLink"/>
                            <div className={"getPresentation"}>Скачать презентацию</div>
                        </div>
                    ) : null}
                    {window.innerWidth <= 1000 ? (<div className={"line"}></div>) : null}
                    {window.innerWidth <= 1000 ? (<div onClick={()=>{gsap.globalTimeline.clear(); gsap.killTweensOf("*"); navigate("/privacy-policy"); }} className="termsOfUse">Политика конфиденциальности</div>) : null}
                    {window.innerWidth <= 1000 ? (<div className="license">© 2025 Dream Landia</div>) : null}
                </div>
            </div>
        </div>
    )
}


export default FooterContent;