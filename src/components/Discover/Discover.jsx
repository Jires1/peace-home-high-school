import './Discover.css'
import logo from '/src/assets/img/logo.png'

import DualEducationInfo from './DualEducationInfo'
import SchoolMissionStatement from './SchoolMission'

export default function Discover() {
    return (
        <section className="history">
            <article className="history__container">
                <h1 className="head-title">PEACE HOME COMPREHENSIVE HIGH SCHOOL</h1>
                <div className="row about-name">
                    <article>
                        <p className='p-text'>Why this Name ?</p>
                        <SchoolMissionStatement/>
                    </article>

                    <div className="row logo">
                        <img src={logo} alt="" />   
                    </div>
                </div>

                {/* <DualEducationInfo/> */}
            </article>
        </section>
    )
}