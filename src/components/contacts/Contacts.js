import './style.css';
import instagram from './../icons/INST.png'
import tiktok from './../icons/TT.png'
import whatsapp from './../icons/WT.png'
import telegram from './../icons/TG.png'

const Contacts = () => {
    return (
        <div className='Contacts'>
            <div className='curcle'>
                <h1>⌬</h1>
            </div>
            <div className='conts'>
                <div className='title'>
                    <h3>Контакты</h3>
                </div>
                <div className='line'>
                    <h1>---------</h1>
                </div>
                <div className='Icons'>
                    <a><img className='icon' src={instagram}></img></a>
                    <a><img className='icon' src={tiktok}></img></a>
                    <a><img className='icon' src={whatsapp}></img></a>
                    <a><img className='icon' src={telegram}></img></a>
                </div>

            </div>
        </div>
    );
}
 
export default Contacts;