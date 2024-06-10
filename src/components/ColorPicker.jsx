/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const ColorPicker = () => {
    const [color,setColor] = useState("#FFeeFF");
  return (
    <div className='flex flex-col space-y-2 justify-center items-center w-fit p-8'>
        <div className={`rounded-lg size-40 border`} style={{background:color}}></div>
        <div className="flex space-x-2">
            <p className='font-bold'>Color:</p>
            <p className={`text-${color}`} style={{color:color}}>{color}</p>
        </div>
        <input  className='p-2 text-left outline outline-green-500 rounded-lg' type="color" value={color} onChange={(e)=>setColor(e.target.value)}  name="" id="" />
      
    </div>
  )
}

export default ColorPicker
