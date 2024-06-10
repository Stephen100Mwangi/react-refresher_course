/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Arrays = () => {
    const [foods,setFoods] = useState(["Pizza","Omelette"]);

    const addFood = ()=>{
        const newFood = document.getElementById("newFood").value;
        setFoods(f => [...f,newFood]);
        document.getElementById("newFood").value = "";

    }

    const removeFood = (index)=>{
        setFoods(foods.filter((_,i)=> i !== index))
        

    }
  return (
    <div className='flex flex-col space-y-3 mx-8 my-12'>
        <h1 className='text-green-500 font-bold text-3xl'>List of foods</h1>
        <div>{foods.map((item,index) => (
            <div key={index} onClick={() => removeFood(index)} className='cursor-pointer'>
                {item}
            </div>
        ))}
        </div>
        <div className="flex space-x-3">
            <input type="text" name="" id="newFood" placeholder='Type in the food name' className='p-2 px-6 outline outline-green-500' />
            <button className='flex justify-center px-6 items-center text-white rounded-lg font-bold bg-green-500' onClick={addFood}>Add Food</button>
        </div>
      
    </div>
  )
}

export default Arrays
