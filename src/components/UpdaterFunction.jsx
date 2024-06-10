/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const UpdaterFunction = () => {
    const [count,setCount] = useState(0);
  return (
    <div className='flex flex-col space-y-3 p-8 justify-center items-center'>
        <div className="flex space-x-5">
            <button className='p-2 px-6 text-white bg-red-500 rounded-lg shadow-lg' onClick={()=>setCount(prevCount => prevCount - 5)}>Decrement</button>
            <button className='p-2 px-6 text-white bg-blue-500 rounded-lg shadow-lg' onClick={()=>setCount(0)}>Reset</button>
            <button className='p-2 px-6 text-white bg-green-500 rounded-lg shadow-lg' onClick={()=>setCount(prevCount => prevCount + 5)}>Increment</button>
        </div>
        <div>{count}</div>
      
    </div>
  )
}

export default UpdaterFunction
