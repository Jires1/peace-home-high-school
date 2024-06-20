import './Home.css'

import BackgroundSlider from './BgSlide.jsx'
import Programs from './Programs.jsx'
import Philosophy from './Philosophy.jsx'
import Gallery from './Gallery.jsx'
import Testimonials from './Testimonials.jsx'
import Apply from './Apply.jsx'

import { createBrowserRouter, RouterProvider, Outlet, NavLink} from 'react-router-dom'

export default function Home () {
    return (
        <section className="home">
            <BackgroundSlider/>
            <Programs/> 
            <Philosophy/>
            <Gallery/>
            <Testimonials/>
            <Apply/>
        </section>
    )
}