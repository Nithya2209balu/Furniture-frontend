import React from 'react'
import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'
import l4 from '../assets/l4.png'

const Last = () => {
  return (
    <div className='bg-orange-50 md:p-10 flex justify-between mt-8 lastimg'>
      <div className='flex'>
        <img src={l1} alt=''/>
        <div> 
              <h1 className='font-bold'>High Quality</h1>
        <p>crafted from top materials</p>
        </div>
     
      </div>
      <div className='flex'>
        <img src={l2} alt=''/>
       <div>
       <h1 className='font-bold'>Warranty Protection</h1>
       <p>Over 2 years</p>
       </div>
      </div>
      <div className='flex'>
        <img src={l3} alt=''/>
       <div>
       <h1 className='font-bold'>Free Shipping</h1>
       <p>Order over 150 $  </p>
       </div>
      </div>
      <div className='flex'>
        <img src={l4} alt=''/>
      <div>
      <h1 className='font-bold'>24 / 7 Support</h1>
      <p>Dedicated support</p>
      </div>
      </div>
    </div>
  ) 
}

export default Last
