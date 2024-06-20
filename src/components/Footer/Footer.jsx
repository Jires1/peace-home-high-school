import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

export default function Footer() {
    return(
        <footer className="row footer">
            <div className='row footer__top-container'>
                <div className="row ets-infos">
                    <div className="logo"><img src="/src/assets/img/logo.png" alt="" /></div>
                    <p className="location">
                    Carrefour Peace Home, Etoug-Ebe,<br />
                    behind La Mama P.O Box 115 Yde
                    </p>
                </div>

                <div className="row links">
                    <a href="/Discover">Discover Us</a>
                    <a href="/Study at P.H.C.H.S">STUDY AT P.H.C.H.S</a>
                    <a href="/Contact">Contact</a>
                </div>

                <div className="row links">
                    <a href="#">Disclaimer</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Privacy Policy</a>
                </div>

                <div className="row join">
                    <p>Follow Us</p>
                    <div className='row social-media'>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="footer_bottom-container">
                © 2024 PEACE HOME COMPREHENSIVE HIGH SCHOOL.
            </div>

        </footer>
    )
}