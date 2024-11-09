



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
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
import Explore from './Explore';

const Our = ({headline,furnitures}) => {
  return (
    <div  className='my-2 px-4 lg:px-24 '> 
       
      

       {/*cards */}
       <div>
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
      

<SwiperSlide className='bg-blue-50 p-4'><img src={o5} alt='' />
Grifo<p>Night lamp</p><p>Rp 1.500.000</p></SwiperSlide>
<SwiperSlide className='bg-blue-50 p-4'> <img src={o6} alt='' />
<div className=' absolute top-3 right-3 bg-green-300 hover:bg-black p-2 rounded-full'> New </div>
Muggo<p>Small mug</p><p>Rp 150.000</p></SwiperSlide>
<SwiperSlide className='bg-blue-50 p-4'><img src={o7} alt='' />
<div className=' absolute top-3 right-3 bg-pink-300 hover:bg-black p-2 rounded-full'> -30%</div>
Pingky<p>Cute bed set</p><p>Rp 7.000.000</p></SwiperSlide>
<SwiperSlide className='bg-blue-50 p-4'> <img src={o8} alt='' />
<div className=' absolute top-3 right-3 bg-green-300 hover:bg-black p-2 rounded-full'> New </div>
Potty<p>Minimalist flower pot</p><p>Rp 500.000</p></SwiperSlide>

      
      
   
     
      </Swiper>
      <div className=' text-center  text-black my-2' >
         <button className='text-center p-2  border border-orange-400 mt-3  '>  Show More</button></div>
      
       </div>
    
    </div>

    
  )
}

export default Our
