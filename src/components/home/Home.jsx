import './Home.css'

import BackgroundSlider from './BgSlide.jsx'
import Programs from './Programs.jsx'
import Philosophy from './Philosophy.jsx'

export default function Home () {
    return (
        <section className="home">
            <BackgroundSlider/>
            <Programs/> 
            <Philosophy/>
        </section>
    )
}