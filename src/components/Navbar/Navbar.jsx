import { Link, NavLink } from 'react-router-dom'
import schoolLogo from './../../assets/img/logo.png'
import NavLinks from './NavLinks'
import './Navbar.css'
import { useRef, useState } from 'react';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
          // Scroll to the top of the menu when closing
          menuRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      const handleLinkClick = () => {
        // Close the menu when a link is clicked
        setIsMenuOpen(false);
      };

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

                <div className='row apply-btn'>
                    <button> <Link to="/Contact">Apply Now</Link></button>
                </div>

                {isMenuOpen && (
              <div
                ref={menuRef}
                className="menu-dropdown"
              >
                <ul className='dropdown-content row'>
                  <li>
                    <NavLink className="link" to="/" replace onClick={handleLinkClick}>
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/Discover" replace onClick={handleLinkClick}>
                    DISCOVER
                    <div className="sublnks">
                      <div className="sub-sub-0"><Link class="head-link" to="/Discover/Our History">Our History</Link></div>
                      <div className="sub-sub-0"><Link class="head-link" to="/Discover/Gallery">Gallery</Link></div>
                    </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/Study at P.H.C.H.S" replace onClick={handleLinkClick}>
                    Study at P.H.C.H.S
                    <div className="sublnks">
                      <div className="sub-sub-0"><Link class="head-link" to="/Study at P.H.C.H.S/Ordinary Secondary Cycle">Ordinary Secondary</Link></div>
                      <div className="sub-sub-0"><Link class="head-link" to="/Study at P.H.C.H.S/Advance Secondary Cycle">Advance Secondary</Link></div>
                      <div className="sub-sub-0"><Link class="head-link" to="/Study at P.H.C.H.S/Technical Section">Technical Section</Link></div>
                    </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/Contact" replace onClick={handleLinkClick}>
                    Contact
                    </NavLink>
                  </li>

                </ul>
              </div>
            )}

                <div className="menu-icon row-menu-center" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <div className="menu-cross">
                        <span></span>
                        <span></span>
                        </div>
                    ) : (
                        <div className="menu-bars">
                        <span></span>
                        <span></span>
                        </div>
                    )}
                </div>


            </nav>
        </header>
    )
}