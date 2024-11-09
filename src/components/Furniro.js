
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import o5 from '../assets/o5.png'
import o6 from '../assets/o6.png'
import o7 from '../assets/o7.png'
import o8 from '../assets/o8.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Furniro = ({headline,furnitures}) => {
  return ( 
    <div  className='my-2 px-4 mt-20 lg:px-24'> 
       <h2 className='text-2xl text-center font-bold text-black my-2'>{headline}</h2>
       <p className='text-center'>Share your setup with</p>
       <h1 className='text-center text-2xl font-bold'>#FuniroFurniture</h1>
    

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
        <SwiperSlide><img src={o5} alt='' /> </SwiperSlide>
        <SwiperSlide><img src={o6} alt='' /></SwiperSlide>
        <SwiperSlide><img src={o7} alt='' /></SwiperSlide>
        <SwiperSlide><img src={o8} alt='' /> </SwiperSlide>
        <SwiperSlide><img src={p1} alt='' /></SwiperSlide>
        <SwiperSlide><img src={p2} alt='' /></SwiperSlide>
        <SwiperSlide><img src={p3} alt='' /></SwiperSlide>

      
     
      </Swiper>
     
       </div>
       
       
    </div>
    
  )
}

export default Furniro
