
import { Swiper, SwiperSlide } from 'swiper/react'
import './testimonial.css' 
import Testimonial from './Testimonial.jsx'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

import {  Navigation } from 'swiper/modules'


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
                                    <Testimonial author="Chibindji Kadjija" job="Salesperson" >I really appreciate the personalized attention my child receives. The small class sizes allow each student to be closely monitored and to progress at their own pace. It really makes a difference.</Testimonial>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="row testimonial__swiper__content">
                                    <Testimonial author="Martin" job="Nurse" >The school has been able to identify my child's talents and encourage them to develop. The wide range of extracurricular activities offered allows them to fully flourish.</Testimonial>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="row testimonial__swiper__content">
                                    <Testimonial author="Kamto John" job="Architect" >The science labs are very well equipped, which allows students to carry out concrete experiments. This facilitates the understanding of theoretical concepts.</Testimonial>
                                </div>
                            </SwiperSlide>
                    </Swiper>
            </div>
        </div>
    )
}