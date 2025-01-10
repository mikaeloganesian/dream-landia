import React from 'react';
function Button(prompt) {
    const type = [
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
            backgroundColor: "transparent",
            color: "#FFFCFC",
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
    ]
    return (
        <div style={type[prompt.styleId]} className="button">
            <div className="text" style={{color: type[prompt.styleId].color}}>{prompt.content}</div>
            <img src={prompt.icon} className="icon" alt="icon"/>
        </div>
    )
}

export default Button;