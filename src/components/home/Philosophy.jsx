import provisor from '/src/assets/philosophiy/provisor.webp'
import './Philosophy.css'
import { Link } from 'react-router-dom'

export default function Philosophy () {
    return(
        <div className="home__philosophy white-grey">
            <div className="philosophy__container">
                <div className="philosophy__container__title">
                    <p className='p-title'>Our Philosophy</p>
                    <h2 className='head-title'>Our school philosophy</h2>  
                </div>
            </div>

            <div className="row philosophy__container__topic">
                <div className="topic__provisor-img">
                    <img src={provisor} alt="PEACE HOME COMPREHENSIVE HIGH SCHOOL provisor"/>
                </div>
                <div className="topic__quotes">
                    <h2 className="head-title">The Fondator</h2>
                    <ul className="row quote-list">
                        <li className="row quote"><p>
                        Dear Learners,

                        Peace Home Comprehensive High School
                        Etoug-Ebe Yaounde (PHCHS) is pleased to welcome you to
                        its unique institution of learning.
                        The institution offers English Medium General, Technical
                        Commercial and Technical Industrial Education specialties.
                        The subjects are taught based on the typical Anglo-Saxon
                        fashion by professional teachers of high moral and socio-
                        cultural backgrounds.

                        Built on the principle of student-centered learning, PHCHS
                        teachers are experts in detecting and harnessing talents of
                        students for better integration and success in society.

                         {/* Our motto: Partnering with God, changing lives demonstrates
                        a strong attachment not only to discipline and hard work but
                        also to academic excellence by faith.

                        Hence our main goal is to detect and harness talents among
                        our students who will serve as vectors of a changed society.
                        That is the reason why you are here at PHCHS.
                        Welcome once more and we wish you a successful academic
                        career at PHCHS.

                        THE PRINCIPAL */}
                        </p>
                            <Link to="/Discover/Our History">Read more... <span className="arrow-right"></span></Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}