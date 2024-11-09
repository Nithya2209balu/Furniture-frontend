import React from 'react'
import Banner from '../components/Banner'
import Browse from './Browse'
import OurProduct from '../components/OurProduct'
import Our from '../components/Our'
import Explore from '../components/Explore'
import Furniro from '../components/Furniro'
import MyFooter from '../components/MyFooter'

const Home = () => {
  return (
    <div>
     <Banner/>
     <Browse/>
     <OurProduct/>
     <Our/>
     <Explore/>
     <Furniro/>
     <MyFooter/>
    </div>
  )
}

export default Home
