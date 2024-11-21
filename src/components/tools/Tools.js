import './style.css';
import react from '../icons/React.png'
import logo from '../header/logo.png'
import { useScroll } from '../ScrollContext'; // Импортируем контекст



const Tools = () => {
    const { section2Ref} = useScroll();
    return ( 
        <div className='Tools' ref={section2Ref}>
            <div className='name'>
                <h1> Мои инструменты</h1>
            </div>
            <div className='Cards'>
                <div className='cards'>
                    <div class="card-container">
                        <div class="card">
                        <div class="card-face card-front">

                            </div>
                            <div class="card-face card-back"> 
                                <img src='https://syhanoff.ru/wp-content/uploads/html.svg'></img>
                                <h3>HTML5</h3>
                                <p>Каркас сайта, скелет. Делаем валидным и семантическим. Валидность — «уважают» другие веб-разработчики, а семантику «уважают» поисковики.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
                        <div class="card-face card-front">

                            </div>
                            <div class="card-face card-back"> 
                                <img src='https://syhanoff.ru/wp-content/uploads/css3.svg'></img>
                                <h3>CSS3</h3>
                                <p>Язык стилей, который постоянно развивается, совершенствуется. По факту это внешний вид сайта, его одежа. Графика и геометрия. Тут полет фантазий.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
                        <div class="card-face card-front">

                            </div>
                            <div class="card-face card-back"> 
                                <img src='https://syhanoff.ru/wp-content/uploads/javascript.svg'></img>
                                <h4>JAVA SCRIPT</h4>
                                <p>Язык программирования, благодаря которому можно «оживить» что угодно: слайдеры, окна, подсказки, курсор мышки, вкладки, получение данных с сервера, расчеты и вычисления и многое другое.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
                        <div class="card-face card-front">

                            </div>
                            <div class="card-face card-back"> 
                                <img src={react} height='70'/>
                                <h4>React</h4>
                                <p>Библиотека для создания динамичных интерфейсов с использованием компоненты и виртуального DOM, что улучшает производительность веб-приложений.</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='cas'>
                        <div class="card-container aa">
                            <div class="card">
                            <div class="card-face card-front">

                                </div>
                                <div class="card-face card-back"> 
                                    <img src={react} height='70'/>
                                    <h4>React Native</h4>
                                    <p>Библиотека для создания динамичных интерфейсов с использованием компоненты и виртуального DOM, что улучшает производительность веб-приложений.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-container aa">
                            <div class="card">
                            <div class="card-face card-front">

                                </div>
                                <div class="card-face card-back"> 
                                    <img src={logo} height='70' width='70'/>
                                    <h3>Еще что нибудь</h3>
                                    <p>Потом еще добавлю, когда научусь)</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Tools;