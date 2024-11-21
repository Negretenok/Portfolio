import './style.css';
import myPhoto from '../icons/Me.jpg'
import myonitor from '../icons/monitor.png'
import mobile from '../icons/mobile.png'


const AboutMe = () => {

    return (
        <div className='AboutMe'>
            <div className='aboutme'>
                <h1>Про меня</h1>
            </div>
            <div className='MyName'>
                <img src={myPhoto}/>
                <h2>Мое имя Нуржигит</h2>
            </div>
            <div className='Description'>
                <p>Привет! На сайте разместил информацию о себе и моих проектах в веб-дизайне, верстке. Основная цель — показать портфолио начинающего веб-разработчика. К созданию сайта-портфолио постарался подойти с долей креатива и местами юмора.<br/><br/>
                 В прошлом курьер и аниматор, который нашел свое предназначение в мире IT. Мне нравиться работать с кодом, разбираться как построен процесс, его логику. Когда сидишь над задачей часами или днями, и потом получается и работает — это офигенное чувство. Поедая «большого цифрового слона» по кусочкам, все больше понимаю, насколько он «вкусный».</p>
            </div>
            <div className='MySkeels'>
                <div className='Skeel'>
                    <div>

                    <img src={myonitor}/>
                    </div>
                    <h1>Web-Сайты</h1>
                </div>
                <div className='Skeel'>
                    <div>
                    <img src={mobile}/>

                    </div>
                    <h1>Mobile App</h1>
                </div>
            </div>
        </div>
    )
}


export default AboutMe;