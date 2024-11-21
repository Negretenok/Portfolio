import './style.css';
import logo from './logo.png'
import { useScroll } from '../ScrollContext'; // Импортируем контекст

const Header = () => {
    const { scrollToSection, section1Ref, section2Ref, section3Ref,section4Ref } = useScroll();
    return ( 
            <header className="header">
                <div className='headerLogo'>
                    <img src={logo}/>
                </div>
                <div className='headerNav'>
                    {/* <a href='footer' className='navbarHead'>Про меня</a>
                    <a href='#' className='navbarHead'>Опыт</a>
                    <a href='#' className='navbarHead'>Инструменты</a>
                    <a href='#' className='navbarHead'>Проекты</a>
                    <a href='#' className='navbarHead'>Контакты</a> */}
                    <button className='navbarHead' onClick={() => scrollToSection(section1Ref)}>Про меня</button>
                    {/* <button className='navbarHead' onClick={() => scrollToSection(section2Ref)}>Опыт</button> */}
                    <button className='navbarHead' onClick={() => scrollToSection(section2Ref)}>Инструменты</button>
                    <button className='navbarHead' onClick={() => scrollToSection(section3Ref)}>Проекты</button>
                    <button className='navbarHead' onClick={() => scrollToSection(section4Ref)}>Контакты</button>
                </div>
            </header>
     );
}
 
export default Header;