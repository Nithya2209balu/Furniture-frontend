import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import {  Label, TextInput,Textarea } from "flowbite-react";

const Edit=()=> {
  const {id} = useParams();
  const {furnitureTitle,imageURL,category,furnitureDescription} = useLoaderData() || {};


  const furnitureCategories =[
    "chair",
    "bed",
    "table",
    "cupboard",
  ]

  const[selectedfurnitureCategory,setselectedfurnitureCategory]=useState(furnitureCategories[0])

  const handleChangeSelectValue = (event)=>{
    console.log(event.target.value);
    setselectedfurnitureCategory(event.target.value);
  }

 // handle book submission
 const handleUpdate = (event)=>{
     event.preventDefault();
     const form=event.target;

     const furnitureTitle = form.furnitureTitle.value;
      
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const furnitureDescription =form.furnitureDescription.value;
      
     
      const updateFurnitureObj = {
        furnitureTitle,imageURL,category,furnitureDescription
      }
      //console.log(bookObj)

      //update book
      fetch(`https://furniture-backend-1.onrender.com/furniture/${id}`,{
        method:"PATCH",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(updateFurnitureObj)
      }).then(res=>res.json()).then(data=>{
        alert(" updated successfully!!")
        
      })

 }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the  data</h2>
      <form onSubmit={handleUpdate} className="flex  flex-col flex-wrap gap-4">
        {/*first row*/}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="furnitureTitle"
           value="furnitureTitle" 
           />
        </div>
        <TextInput id="furnitureTitle"
        name='furnitureTitle'
         type="text"
          placeholder=" Name"
          defaultValue={furnitureTitle}  />
      </div>
    

  
      </div>
      {/*2 */}
      <div>
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="imageURL"
           value="imageURL" 
           />
        </div>
        <TextInput id="imageURL"
        name='imageURL'
         type="text"
          placeholder="Image URL" 
           defaultValue={imageURL} />
      </div>
{/* category*/}

      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label 
          htmlFor="inputState"
           value=" Category" 
           />
        </div>

        <select id='inputState' name='categoryName' className='w-full rounded' value={selectedfurnitureCategory}
          onchange={handleChangeSelectValue}>
          {
            furnitureCategories.map((option)=><option key={option} value={option}>{option}</option>)
          }
            

        </select>
        
      </div>

      </div>
      </div>

{/*book description */}
<div>
        <div className="mb-2 block">
          <Label
           htmlFor="furnitureDescription" 
           value="furnitureDescription" />
        </div>
        <Textarea
         id="furnitureDescription" 
        name="furnitureDescription"
         placeholder="Write your  decription..." 
          defaultValue={furnitureDescription} 
         
         className='w-full'
          rows={6} />
      
      </div>
     
      <button type='submit' className='mt-5 bg-green-600 p-2 rounded'>
        Update 

      </button>
    
    </form>

    </div>
  )
}

export default Edit