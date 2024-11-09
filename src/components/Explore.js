import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 
import './styles.css';

// import required modules 
import { Pagination } from 'swiper/modules';
import e1 from '../assets/e1.png'
import e2 from '../assets/e2.png'
import e3 from '../assets/e3.png'
import { Link } from 'react-router-dom';
 

const Explore = () => {
  return ( 
    <div className='mt-16 md:py-12  bg-rose-50 md:px-4 Swiper justify-between  '>
          
          <div className='flex  flex-col   mr-0 justify-between items-center justify-center '>
              <div>
              <h2 className='md:text-3xl font-bold leading-snug mt-8 '>
                50+ Beautiful rooms  
                inspiration</h2>
              </div>
                <Link to='/shop' className=' block  explore'> 
                    <button className='bg-blue-700 text-white font-semibold px-5 py-2 button mt-5 rounded hover:bg-black transition-all duration-300'>
    Get Promo</button></Link>
                   
            
    </div> 
  
  
            
   
     <div className='ml-0 mt-5'>
       <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true, 
        }}
        modules={[Pagination]} 
       className="mySwiper"   
      > 
      
      
        
     
        <SwiperSlide><img src={e1} alt=''/></SwiperSlide>
        <SwiperSlide><img src={e2} alt=''/></SwiperSlide>
        <SwiperSlide><img src={e3} alt=''/></SwiperSlide>
      
      
      </Swiper>
      </div>

      
      
    </div>
  )
}

export default Explore
