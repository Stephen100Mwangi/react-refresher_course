/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Counter = () => {

  const [count,setCount] = useState(0);
  return (
    <div className='my-12'>
      <div className="flex justify-center items-center">{count}</div>
      <div className="flex justify-center items-center space-x-20">
        <button className="px-6" onClick={()=>setCount(count+1)}>Increase</button>
        <button className="px-6" onClick={()=>setCount(0)}>Reset</button>
        <button className="px-6" onClick={()=>setCount(count-1)}>Decrease</button>
      </div>
    </div>
  )
}

export default Counter
