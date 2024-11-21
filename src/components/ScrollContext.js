// ScrollContext.js
import React, { createContext, useContext, useRef } from 'react';

// Создаем контекст для прокрутки
const ScrollContext = createContext();

// Хук для использования контекста в других компонентах
export const useScroll = () => useContext(ScrollContext);

// Создаем компонент-провайдер для передачи контекста
export const ScrollProvider = ({ children }) => {
  // Ссылки на разделы страницы
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  // const section4Ref = useRef(null);

  // Функция для прокрутки к нужному разделу
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollToSection,
        section1Ref,
        section2Ref,
        section3Ref,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
