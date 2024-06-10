/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

const EffectsHook = () => {
    const [count,setCount] =  useState(0);
    // useEffect(()=>{
    //   console.log(`The count is ${count}`);
    // })
    // useEffect(()=>{
    //   console.log(`The count is ${count}`);
    // },[])
    useEffect(()=>{
      console.log(`The count was updated to ${count}`);
      document.title="Count"
    },[count])
  return (
    <div className='mx-8 my-12 flex flex-col space-y-4'>
      <div>Count: {count}</div>
      <button className='w-fit px-4 p-2 rounded-lg bg-slate-600' onClick={()=>setCount(count+1)}>Increase count</button>
    </div>
  )
}

export default EffectsHook
