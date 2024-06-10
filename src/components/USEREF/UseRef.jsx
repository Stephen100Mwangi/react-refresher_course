/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect} from 'react'

const UseRef = () => {
    const ref = useRef('file');
    const inputRef = useRef(null);
    const handleClick = ()=>{
        ref.current.click();
    }

    const handleFocus = ()=>{
      inputRef.current.focus();
      inputRef.current.style.borderRadius="100px"
    }

    console.log(inputRef);
  return (
    <div className='mx-8 my-16 flex flex-col space-y-5 justify-center items-center'>
      <input type="file" name="" id="" ref={ref}/>
      <button onClick={handleClick} className='bg-emerald-500 rounded-full px-6 p-2'>Click Me</button>
      <button onClick={handleFocus}>Show text</button>
      <input type="text" name="" id="" ref={inputRef} className='outline px-6 p-2 outline-emerald-500'/>
    </div>
  )
}

export default UseRef
