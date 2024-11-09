import React, { useState } from 'react'
import {  Label, TextInput,Textarea } from "flowbite-react";

function Upload() {
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
 const handlefurnitureSubmit = (event)=>{
     event.preventDefault();
     const form=event.target;

     const furnitureTitle = form.furnitureTitle.value;
      
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const furnitureDescription =form.furnitureDescription.value;
    
     
      const furnitureObj = {
        furnitureTitle,imageURL,category,furnitureDescription,
      }
      console.log(furnitureObj)

      //send data to db
      fetch("https://furniture-backend-1.onrender.com/upload-furniture",{
        method:"POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify(furnitureObj)
      }).then(res=>res.json()).then(data=>{
        alert(" uploaded successfully!!")
        form.reset();
      })
 }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload </h2>
      <form onSubmit={handlefurnitureSubmit} className="flex  flex-col flex-wrap gap-4">
        {/*first row*/}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="funitureTitle"
           value="furnitureTitle" 
           />
        </div>
        <TextInput id="furnitureTitle"
        name='furnitureTitle'
         type="text"
          placeholder="furniture name"  />
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
          placeholder=" Image URL" />
      </div>
{/* category*/}

      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label 
          htmlFor="inputState"
           value="furniture Category" 
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
         placeholder="Write your decription..." 
         
         className='w-full'
          rows={6} />
      
      </div>
     
      <button type='submit' className='mt-5 bg-green-600 p-2 rounded'>
        Upload 

      </button>
    
    </form>

    </div>
  )
}

export default Upload
