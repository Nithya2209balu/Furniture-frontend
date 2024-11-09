import React from 'react'
import Shop2 from './Shop2'
import Shop1 from './Shop1'
import Shop3 from './Shop3'
import Shop4 from './Shop4'
import Navbar from '../components/Navbar'
import s from '../assets/shop.png'
import v from '../assets/Vector.png'
import v1 from '../assets/v1.png'
import v2 from '../assets/v2.png'
import n from '../assets/16.png'
import r from '../assets/r.png'
import MyFooter from '../components/MyFooter'
import Last from '../components/Last'

const Shop = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className=' mt-16'>
        <img src={s} alt='' className=''/>
        </div>
        <div >
      <div className='flex justify-start text-center bg-orange-100 gap-5  px-3 py-3'> 
      <img src={v} alt='' /> <p>Filter</p>
        <img src={v1} alt='' />
        <img src={v2} alt='' />
        <p>| Showing 1–16 of 32 results</p>
      </div>
      <div className='flex justify-end text-center bg-orange-100 gap-5 mt-0'>
      <p >Show</p><img src={n} alt='' className='bg-white p-2'/>
      <p >Short by</p>
      </div>
        
      </div>
      <Shop1/>
      <Shop2/>
      <Shop3/>
      <Shop4/>
      <Last/>
      <MyFooter/> 
     
    </div>
  )
}

export default Shop
