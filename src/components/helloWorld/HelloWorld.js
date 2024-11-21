import './style.css';
import React, { useState, useEffect, useMemo } from 'react';
import { useScroll } from '../ScrollContext'; // Импортируем контекст

const HelloWorld = () => {
    const { section1Ref } = useScroll();

    // Мемоизируем массив текстов, чтобы избежать его пересоздания на каждом рендере
    const texts = useMemo(() => [
        "<img",
        '.     height="173сm" weight="45kg"',
        '.     loading="lazy" decoding="async"',
        '.     src="me.jpg" alt="фото',
        '.     замечательного человека"',
        '/ >'
    ], []);

    const [textIndex, setTextIndex] = useState(0); // Индекс текущего текста
    const [displayedText, setDisplayedText] = useState([]); // Весь отображаемый текст как массив абзацев
    const [currentText, setCurrentText] = useState(""); // Текущий печатаемый текст
    const [charIndex, setCharIndex] = useState(0); // Индекс текущего символа в тексте
    const [isComplete, setIsComplete] = useState(false); // Флаг завершения

    const typingSpeed = 30; // Скорость печати (в миллисекундах)
    const delayBetweenTexts = 1000; // Задержка между текстами (в миллисекундах)

    useEffect(() => {
        if (isComplete) return; // Останавливаем анимацию, если завершено

        if (charIndex < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + texts[textIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else {
            const delayTimeout = setTimeout(() => {
                // Добавляем текущий текст как отдельный абзац в массив displayedText
                setDisplayedText((prev) => [...prev, currentText]);
                setCurrentText("");
                setCharIndex(0);

                // Если это последний текст, устанавливаем isComplete в true
                if (textIndex === texts.length - 1) {
                    setIsComplete(true);
                } else {
                    setTextIndex((prev) => prev + 1); // Переход к следующему тексту
                }
            }, delayBetweenTexts);
            return () => clearTimeout(delayTimeout);
        }
    }, [charIndex, textIndex, texts, currentText, isComplete]);

    return (
        <div className='HELLOWORLD'>
            <div className='helloWorld'>
                <div className='HELLO'>
                    <div className='hello1'>
                        <p><span className='d'>C</span>айт-портфолио Web-разработчика</p>
                        <h1>Hello, world!</h1>
                    </div>

                    <div className='projects'>
                        <h2 className='projects1'>Проекты</h2>
                        <h2 className='projects2'>Безполезная кнопка</h2>
                    </div>
                </div>
                <div className='img'>
                    <div className='IMG' style={{
                        fontFamily: 'monospace',
                        color: '#31ffee',
                        fontSize: '20px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        display: 'inline-block',
                        animation: 'blink-caret 0.5s step-end infinite'
                    }}>
                        {displayedText.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p> // Отображаем каждый элемент массива как отдельный абзац
                        ))}
                        {!isComplete && <p style={{ display: 'inline', borderRight: '2px solid' }}>{currentText}</p>}
                    </div>
                </div>
            </div>
            <div className="arrow-down" ref={section1Ref}>⬇</div>
        </div>
    );
}

export default HelloWorld;
