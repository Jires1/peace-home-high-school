import schoolLogo from './../../assets/img/logo.png'
import NavLinks from './NavLinks'
import './Navbar.css'


export default function Navbar() {
    return(
        <header className="header">
            <nav className='row header__nav'>
                <div className="row header__nav-logo"> 
                    <img src={schoolLogo} alt="PEACE HOME COMPREHENSIVE HIGH SCHOOL ETOUG-EBE LOGO" />
                </div>

                <ul className="row header__nav-links">
                    <li className='row md-links'>
                        <NavLinks />
                    </li>
                </ul>

                <div className='row'>
                    <button>Apply Now</button>
                </div>
            </nav>
        </header>
    )
}