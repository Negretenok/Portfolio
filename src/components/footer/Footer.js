import './style.css';
import logo from './logo.png'
import instagram from './../icons/INST.png'
import tiktok from './../icons/TT.png'
import whatsapp from './../icons/WT.png'
import telegram from './../icons/TG.png'

const Footer = () => {
    return ( 
            <footer className="footer">
                <div className='footerLogo'> 
                    <img src={logo}/>
                </div>
                <div className='footerTitle'> 
                    <h1>Nurlanbekuulu Nurjigit</h1>
                    <h2>11 Dec. 2007</h2>
                </div>
                <div className='footerContact'> 
                    <div>
                        <h2>
                            Contacts
                        </h2>
                    </div>
                    <div className='contacts'>
                        <a href='#'><img className='contact' src={instagram}/></a>
                        <a href='#'><img className='contact' src={tiktok}/></a>
                        <a href='#'><img className='contact' src={whatsapp}/></a>
                        <a href='#'><img className='contact' src={telegram}/></a>
                    </div>
                </div>
            </footer>
     );
}
 
export default Footer;