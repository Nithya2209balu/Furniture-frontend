
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import o1 from '../assets/o1.png'
import o2 from '../assets/o2.png'
import o3 from '../assets/o3.png'
import o4 from '../assets/o4.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Shop2 from './Shop2';

const Shop1 = ({headline}) => {
  const [furnitures,setfurnitures] =useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/all-furnitures").then(res=>res.json()).then(data=>setfurnitures(data));
  },[])
  return (
    <div  className='my-2 px-4 lg:px-24 mt-20'> 
       
      

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
      <SwiperSlide className='bg-blue-50 p-4 '><img src={o1} alt='' />
<div className=' absolute top-3 right-3 bg-pink-300 hover:bg-black p-2 rounded-full'> -30% </div>Syltherine
<p > Stylish cafe chair</p>
<p>Rp 2.500.000</p></SwiperSlide>
<SwiperSlide className='bg-blue-50 p-4'><img src={o2} alt='' />
Leviosa<p>Stylish cafe chair</p><p>Rp 3.500.000</p></SwiperSlide>
<SwiperSlide className='bg-blue-50 p-4'><img src={o3} alt='' />
<div className=' absolute top-3 right-3 bg-pink-300 hover:bg-black p-2 rounded-full'> -30% </div>
Lolito<p>Luxury big sofa</p><p>Rp 7.000.000</p></SwiperSlide>
<SwiperSlide className='bg-blue-50 p-4'><img src={o4} alt='' />
<div className=' absolute top-3 right-3 bg-green-300 hover:bg-black p-2 rounded-full'> New </div>
Respira<p>Outdoor bar table and stool</p><p>Rp 500.000</p></SwiperSlide>


     
      </Swiper>
       </div>
    </div>
  )
}

export default Shop1
