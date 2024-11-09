import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import {Link} from 'react-router-dom'

function Manage() {
  const [allfurnitures, setAllfurnitures] = useState([]);
  useEffect(()=>{
    fetch("https://furniture-backend-1.onrender.com/all-furnitures").then(res=>res.json()).then(data=>setAllfurnitures(data));
  },[])

  //delete 
  const handleDelete = (id)=>{
    console.log(id);
    fetch(`https://furniture-backend-1.onrender.com/furnitures/${id}`,{
      method:"DELETE",
    }).then(res=>res.json()).then(data=>
      {alert(" Deleted successfully")
       
      })

  }
  return (  
    <div>
       <h2 className='mb-8 text-3xl font-bold'>Upload a furniture</h2>
       
       <Table className='lg:w-[800px]'>
        <Table.Head>
        <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell> Name</Table.HeadCell>
          
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span >Edit or manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
        allfurnitures.map((furniture,index)=><Table.Body className='divide-y' key={furniture._id}>
             <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {furniture.furnitureTitle}
            </Table.Cell>
            
            <Table.Cell>{furniture.category}</Table.Cell>
            <Table.Cell>rs.450</Table.Cell>
            <Table.Cell> 
              <Link href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" 
              to={`/admin/dashboard/edit-furnitures/${furniture._id}`}>
                Edit
              </Link>
              <button onClick={()=>handleDelete(furniture._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>
              Delete</button>
            </Table.Cell>
          </Table.Row>
 
        </Table.Body>)
        
        }
         
          
         
      </Table> 
    </div> 
  )
}

export default Manage