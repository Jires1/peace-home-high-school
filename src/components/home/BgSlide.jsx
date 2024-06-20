import imageSlider from './data.home.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCoverflow, EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BackgroundSlider() {
  return (
    <div className="row home__hero">
      
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
            }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectCards]}
        effect={'cards'}
        className="mySwiper"
        speed={2000}
      >
        {
            imageSlider.map((slider, index)=> (
                <SwiperSlide>
                    <div className="text">
                        <p>{slider.paragraph}</p>
                        <h3>{slider.title}</h3>
                    </div>
                    <div className="background-overlay"></div>
                    
                    <img className='img-slider' src={`/src/assets/img/${slider.url}`} />
                </SwiperSlide>
            ))
        }
        
      </Swiper>
    </div>
  );
}
