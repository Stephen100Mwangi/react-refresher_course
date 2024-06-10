/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Greeting = () => {
    const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={`w-fit cursor-pointer rounded-lg p-4 m-4 shadow-lg ${loggedIn? 'bg-green-500':'bg-red-600'}`} onClick={() => setLoggedIn(!loggedIn)}>
      {
        loggedIn ? <h1 className='text-white'>Welcome Back</h1>: <h1 className='text-white'>Please log in</h1>
      }
    </div>
  )
}

export default Greeting
