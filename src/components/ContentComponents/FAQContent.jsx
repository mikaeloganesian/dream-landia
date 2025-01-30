 import React, { useState, useRef, useEffect } from "react";
 import { gsap } from "gsap";
 import arrowIcon from "../../assets/images/others/arrow.png";
 import {QUESTIONS} from "../DATA/QUESTIONS";


 function FAQContent() {
     const [activeCategory, setActiveCategory] = useState(0);
     const [activeQuestion, setActiveQuestion] = useState(null);
     const questionRefs = useRef([]);

     const toggleQuestion = (index) => {
         if (activeQuestion === index) {
             // Закрытие блока
             gsap.to(questionRefs.current[index], {
                 height: 0,
                 duration: 0.3,
                 onComplete: () => setActiveQuestion(null),
             });
         } else {
             // Открытие блока
             if (activeQuestion !== null) {
                 // Закрываем текущий открытый блок
                 gsap.to(questionRefs.current[activeQuestion], {
                     height: 0,
                     duration: 0.3,
                 });
             }
             setActiveQuestion(index);
             gsap.fromTo(
                 questionRefs.current[index],
                 { height: 0 },
                 { height: "auto", duration: 0.3 }
             );
         }
     };

     return (
         <div className="FAQContent">
             <div className="FAQInfo">
                 <div className="FAQTitle">Остались<br/>вопросы?</div>
                 <div className="QuestionsCategories">
                     <div onClick={() => setActiveCategory(0)} className="category">
                         <div className={"dot " + (activeCategory === 0 ? "active" : "")}></div>
                         <div className="categoryTitle">Покупателям</div>
                     </div>
                     <div onClick={() => setActiveCategory(1)} className="category">
                         <div className={"dot " + (activeCategory === 1 ? "active" : "")}></div>
                         <div className="categoryTitle">Продавцам</div>
                     </div>
                     <div onClick={() => setActiveCategory(2)} className="category">
                         <div className={"dot " + (activeCategory === 2 ? "active" : "")}></div>
                         <div className="categoryTitle">Владельцам</div>
                     </div>
                     <div onClick={() => setActiveCategory(3)} className="category">
                         <div className={"dot " + (activeCategory === 3 ? "active" : "")}></div>
                         <div className="categoryTitle">Для гостей</div>
                     </div>
                 </div>
             </div>
             <div className="questions">
                 {QUESTIONS[activeCategory].map((item, index) => (
                     <div
                         key={index}
                         onClick={() => toggleQuestion(index)}
                         className="questionBlock"
                     >
                         <div className="questionHeader">
                             <img
                                 className={"arrow " + (activeQuestion === index ? "active" : "")}
                                 src={arrowIcon}
                                 alt="Открыть полностью"
                             />
                             <div className="questionTitle">{item.questionTitle}</div>
                         </div>
                         <div
                             ref={(el) => (questionRefs.current[index] = el)}
                             className="questionText"
                             style={{overflow: "hidden", height: 0}}
                         >
                             {item.questionText}
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     );
 }

 export default FAQContent;