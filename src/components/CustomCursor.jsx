import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true); // Показываем курсор при движении мыши
        };

        const handleMouseLeave = () => {
            setIsVisible(false); // Скрываем курсор при выходе за пределы окна
        };

        const hideCursor = () => {
            const allElements = document.querySelectorAll('*');
            allElements.forEach((element) => {
                element.style.cursor = 'none';
            });
        };

        const handleMouseEnter = () => {
            hideCursor(); // Принудительно скрываем курсор у всех элементов
            setIsVisible(true);
        };

        // Добавляем слушатели
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        // Убираем слушатели при размонтировании компонента
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: '8px',
                height: '8px',
                backgroundColor: '#FF6B01',
                borderRadius: '50%',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                zIndex: 999999999999,
                opacity: isVisible ? 1 : 0, // Скрываем курсор, если мышь за пределами окна
                transition: 'opacity 0.2s',
            }}
        />
    );
};

export default CustomCursor;