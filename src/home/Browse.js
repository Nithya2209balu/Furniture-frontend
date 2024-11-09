import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Browse = () => {
    const [furnitures,setFurnitures] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/all-furnitures").then(res=> res.json()).then(data=>setFurnitures(data.slice(0,8)));
    },[])
  return (
    <div>
      <Card furnitures={furnitures} headline="Browse The Range"/>
    </div>
  )

}

export default Browse
