
import { Swiper, SwiperSlide } from 'swiper/react'
import {EffectCoverflow } from 'swiper/modules'
import './testimonial.css' 
import Testimonial from './Testimonial.jsx'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'


export default function Testimonials() {

    return(
        <div className="home__testimonial white-grey">
            <div className="testimonial__contWainer">
                <div className="testimonial__container__title">
                    <p className='p-title'>Testimonials</p>
                    <h2 className='head-title'>What They Think Of Us </h2>  
                </div>
            </div>

            <div className="row testimonal_swipers">

                    <Swiper navigation={true} modules={[Navigation]} speed={1000} className="mySwiper">
                            <SwiperSlide>
                                <div className="row testimonial__swiper__content">
                                    <Testimonial/>
                                    <Testimonial/>
                                </div>
                            </SwiperSlide>
                        <SwiperSlide>
                                <div className="row testimonial__swiper__content">
                                    <Testimonial/>
                                    <Testimonial/>
                                </div>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>
    )
}