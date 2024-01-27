import React, { useState, useEffect } from 'react';

const RandomElementDisplay = ({ elements, displayDuration = 2000 }) => {
    const [visibleElement, setVisibleElement] = useState(null);

    useEffect(() => {
        const displayRandomElement = () => {
            const randomIndex = Math.floor(Math.random() * elements.length);
            const elementToDisplay = elements[randomIndex];
            setVisibleElement(elementToDisplay);

            setTimeout(() => {
                setVisibleElement(null);
            }, displayDuration);
        };

        // Показываем первый элемент при монтировании
        displayRandomElement();

        // Запускаем интервал для повторяющегося отображения
        const intervalId = setInterval(displayRandomElement, displayDuration);

        // Очищаем интервал при размонтировании компонента
        return () => {
            clearInterval(intervalId);
        };
    }, [elements, displayDuration]);

    return (
        <div>
            {visibleElement && <div>{visibleElement}</div>}
        </div>
    );
};

export default RandomElementDisplay;
