import './Gallery.css'
import { GoArrowRight } from 'react-icons/go'

import { Swiper, SwiperSlide } from 'swiper/react'
import {EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'


export default function Gallery() {

    return(
        <div className="home__gallery line gray">
            <div className="gallery__contWainer">
                <div className="gallery__container__title">
                    <p className='p-title'>our Gallery</p>
                    <h2 className='head-title'>High school Photos</h2>  
                </div>
            </div>

            <div className="row gallery__photos">
                <Swiper
                    spaceBetween={40}
                    centeredSlides={true}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                        }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, EffectCoverflow]}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                    }}
                    effect={'coverflow'}
                    className="mySwiper"
                    speed={1000}
                >

                    {
                        [1,2,3,4,5,6,7].map((img, index) => (
                            <SwiperSlide key={index}>
                                <img className='gallery__photos__img' src={`/src/assets/img/galery/${img}.jpeg`} alt="" />
                            </SwiperSlide>
                        ))
                    }
    

                </Swiper>
            </div>
            <button className="btn row"><a href="/Actualities">See more heres</a><GoArrowRight /></button>
        </div>
    )
}