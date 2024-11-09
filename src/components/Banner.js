import React from 'react'
import hero from '../assets/hero.png'

import { Link } from 'react-router-dom';


function Banner() {
  return (
    <div className='  items-center '>
        <div className='justify-between items-center  py-20'>
            {/*left side */}
            <div className='relative '>
            <img src={hero} alt='' className='w-full'/>
            </div>
                  {/*right side */}
             <div className='banner absolute inset-0 mb-7 items-center textbox justify-center   bg-orange-100 p-4 md:w-1/3 h-32  md:p-7   md:h-60 max-w-md  ' > 
              
             <p>New Arrival</p>
             <h1 className='font-bold md:text-2xl text-yellow-700 '>Discover Our New Collection</h1>
             <p>Explore our stylish furniture collection designed to enhance your home’s comfort and aesthetic</p>
             <Link to='/shop' className=' block'> 
                    <button className='bg-yellow-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
    Get Promo</button></Link>
              </div>    
         

             
        </div>
    </div>
  )
}

export default Banner