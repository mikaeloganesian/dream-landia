import React from 'react';

const buttonStyles = [
    {
        backgroundColor: "transparent",
        color: "#FFFCFC",
        border: "2px solid rgba(245, 245, 245, 0.16)"
    },
    {
        backgroundColor: "rgba(245, 245, 245, 0.16)",
        color: "#FFFCFC",
        border: "rgba(245, 245, 245, 0.16)"
    },
    {
        backgroundColor: "#FFFCFC",
        color: "#121216",
        border: "2px solid #F5F5F5"
    },
    {
        backgroundColor: "#F5F5F5",
        color: "#4D4D4D",
        border: "2px solid #F5F5F529"
    },
    {
        backgroundColor: "#FF6B01",
        color: "#FFFCFC",
        border: "2px solid #FFFCFC"
    },
    {
        backgroundColor: "#FF8935",
        color: "#FFFCFC",
        border: "2px solid #FF8935"
    },
];

function Button({ styleId, content, icon, buttonID }) {
    const buttonStyle = buttonStyles[styleId] || buttonStyles[0]; // Fallback to the first style if styleId is invalid
    return (
        <div style={buttonStyle} className={"button "}  id={(buttonID ? buttonID : "")}>
            <div className="text">{content}</div>
            {icon && <img src={icon} className="icon" alt="icon" />}
        </div>
    );
}


export default Button;