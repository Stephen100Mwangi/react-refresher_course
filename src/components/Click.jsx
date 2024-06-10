/* eslint-disable no-unused-vars */
import React from 'react'

const Click = () => {

    const handleClick = (username)=>{
        console.log(username + "Clicked me");
    }

    const handleClick2 = (e) => {
        e.target.textContent = "OUCH?!! ☹"
    }
  return (
    <div className='my-24 flex justify-evenly w-full'>
        <button className='w-fit px-6 py-2' onClick={()=>console.log("You Clicked me")}>Click Once</button>
        <button className='w-fit px-6 py-2 bg-green-500' onClick={(username)=>handleClick("Steve ")}>Click Again</button>
        <button className='w-fit px-6 py-2 bg-green-500' onClick={(e)=>handleClick2(e)}>Click Me 😀</button>
    </div>
  )
}

export default Click
