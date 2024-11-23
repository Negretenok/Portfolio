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
                    <img src={logo} alt='logo'/>
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
                        <a href='https://www.instagram.com/k4zak_11/profilecard/?igsh=dTA4MmlvemR0Mms3'><img className='contact' src={instagram} alt='inst'/></a>
                        <a href='https://wa.me/qr/J5OC7SRORR2YA1'><img className='contact' src={whatsapp} alt='waths'/></a>
                        <a href='https://www.tiktok.com/@nnurzhigit_11?_t=8raWEPNWCLY&_r=1'><img className='contact' src={tiktok} alt='tt'/></a>
                        <a href='http://t.me/NNurzh1git'><img className='contact' src={telegram}alt='tg'/></a>
                    </div>
                </div>
            </footer>
     );
}
 
export default Footer;