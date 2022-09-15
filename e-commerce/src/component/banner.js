import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay, Pagination , A11y} from 'swiper';
import Promotional from './images/promotional.png'
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation'; 
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
function Banner(){
    return(
        <>
        
        <Swiper
         modules={[Navigation ,Autoplay, Pagination , A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay  = {{delay:2000}}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
      <SwiperSlide><img src={Promotional} alt="slide"/></SwiperSlide>
      <SwiperSlide><img src={Promotional} alt="slide"/></SwiperSlide>
      <SwiperSlide><img src={Promotional} alt="slide"/></SwiperSlide>
      <SwiperSlide><img src={Promotional} alt="slide"/></SwiperSlide>
      
    </Swiper>
        </>
    )
   
}
export default Banner