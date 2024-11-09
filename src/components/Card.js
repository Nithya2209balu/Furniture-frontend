
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import one from '../assets/p1.png';
import two from '../assets/p2.png'
import three from '../assets/p3.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Card = ({headline,furnitures}) => {
  return (
    <div  className='my-2 px-4 lg:px-24'> 
       <h2 className='text-2xl text-center font-bold text-black my-2'>{headline}</h2>
       <p className='text-center'>Modern furniture for contemporary living.</p>

       {/*cards */}
       <div>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={one} alt='' /> <p className='text-center'> Dinning</p></SwiperSlide>
        <SwiperSlide><img src={two} alt='' /><p className='text-center'> Living</p></SwiperSlide>
        <SwiperSlide><img src={three} alt='' /><p className='text-center'> Bedroom</p></SwiperSlide>
      
     
      </Swiper>
       </div>
    </div>
  )
}

export default Card
