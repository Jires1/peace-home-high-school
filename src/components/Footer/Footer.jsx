import { Link } from 'react-router-dom'
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
                    <Link to="/Discover">Discover Us</Link>
                    <Link to="/Study at P.H.C.H.S">STUDY AT P.H.C.H.S</Link>
                    <Link to="/Contact">Contact</Link>
                </div>

                <div className="row links">
                    <Link href="#">Disclaimer</Link>
                    <Link to="#">Testimonials</Link>
                    <Link to="#">Privacy Policy</Link>
                </div>

                <div className="row join">
                    <p>Follow Us</p>
                    <div className='row social-media'>
                        <Link to="http:/faecebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook/></Link>
                        <Link to="http:/twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
                        <Link to="http:/instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
                    </div>
                </div>
            </div>

            <div className="footer_bottom-container">
                © 2024 PEACE HOME COMPREHENSIVE HIGH SCHOOL.
            </div>

        </footer>
    )
}